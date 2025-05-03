import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import AnimatedContainer from '../common/AnimatedContainer';
import * as S from './Flashcards.styles';
import { AddDeckModal, AddCardModal } from './FlashcardModals';
import api from '../../config/api';

const Flashcards = () => {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [assessment, setAssessment] = useState(null);
  const [error, setError] = useState(null);
  const [isAddDeckModalOpen, setIsAddDeckModalOpen] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);

  // Fetch decks on component mount
  useEffect(() => {
    fetchDecks();
  }, []);

  // Fetch cards when selectedDeck changes
  useEffect(() => {
    if (selectedDeck) {
      fetchFlashcards(selectedDeck._id);
    }
  }, [selectedDeck]);

  // Load assessment from localStorage when card or deck changes
  useEffect(() => {
    if (selectedDeck && currentCard) {
      const key = `flashcard-assessment-${selectedDeck._id}-${currentCard._id}`;
      const saved = localStorage.getItem(key);
      setAssessment(saved || null);
    }
  }, [selectedDeck, currentCardIndex, flashcards]);

  const fetchDecks = async () => {
    try {
      const response = await api.get('/flashcards/decks');
      setDecks(response.data);
      if (response.data.length > 0 && !selectedDeck) {
        setSelectedDeck(response.data[0]);
      }
    } catch (err) {
      handleError("Failed to load decks", err);
    }
  };

  const fetchFlashcards = async (deckId) => {
    try {
      const response = await api.get(`/flashcards/cards/${deckId}`);
      setFlashcards(response.data);
      setCurrentCardIndex(0);
      setFlipped(false);
      setAssessment(null);
    } catch (err) {
      handleError(`Failed to load flashcards for deck`, err);
    }
  };

  const handleAddDeckSubmit = async (deckData) => {
    try {
      const response = await api.post('/flashcards/decks/generate', deckData);
      
      setDecks(prev => [...prev, response.data]);
      setSelectedDeck(response.data);
      setIsAddDeckModalOpen(false);
      setError(null);
    } catch (err) {
      handleError("Failed to generate deck", err);
    }
  };

  const handleAddCardSubmit = async (cardData) => {
    try {
      if (!selectedDeck) throw new Error("No deck selected");
      
      const response = await api.post('/flashcards/cards/add', {
        deckId: selectedDeck._id,
        front: cardData.question,
        back: cardData.answer
      });
      
      // Use functional update for state dependencies
      setFlashcards(prev => [...prev, response.data]);
      setCurrentCardIndex(prev => prev + 1);  // Update index correctly
      setIsAddCardModalOpen(false);
      setError(null);
    } catch (err) {
      handleError("Failed to add card", err);
    }
  };

  const handleError = (message, err) => {
    console.error(message, err);
    setError(message + (err.response?.data?.message || ''));
  };

  // Flashcard navigation handlers
  const handleFlip = () => setFlipped(!flipped);
  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false);
      setAssessment(null);
    }
  };
  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFlipped(false);
      setAssessment(null);
    }
  };
  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentCardIndex(0);
    setFlipped(false);
    setAssessment(null);
  };

  const handleDeleteDeck = async (deckId) => {
    if (window.confirm("Delete this deck and all its cards?")) {
      try {
        await api.delete(`/flashcards/decks/${deckId}`);
        const updatedDecks = decks.filter(d => d._id !== deckId);
        setDecks(updatedDecks);
        if (selectedDeck?._id === deckId) {
          setSelectedDeck(updatedDecks[0] || null);
          setFlashcards([]);
        }
      } catch (err) {
        handleError("Failed to delete deck", err);
      }
    }
  };

  const handleDeleteCard = async (cardId) => {
    if (window.confirm("Delete this flashcard?")) {
      try {
        await api.delete(`/flashcards/cards/${cardId}`);
        
        setFlashcards(prev => 
          prev.filter(c => c._id !== cardId)
        );
        setCurrentCardIndex(prev => 
          Math.min(prev, flashcards.length - 2)
        );
      } catch (err) {
        handleError("Failed to delete card", err);
      }
    }
  };

  const currentCard = flashcards[currentCardIndex];
  const totalCards = flashcards.length;

  // Save assessment to localStorage
  const handleAssessment = (value) => {
    if (selectedDeck && currentCard) {
      const key = `flashcard-assessment-${selectedDeck._id}-${currentCard._id}`;
      localStorage.setItem(key, value);
      setAssessment(value);
    }
  };

  if (error) {
    return (
      <>
        <Navbar isLoggedIn={true} />
        <S.Container>
          <S.PageTitle>Error</S.PageTitle>
          <S.ErrorMessage>{error}</S.ErrorMessage>
          <S.ControlButton onClick={() => setError(null)}>Try Again</S.ControlButton>
        </S.Container>
      </>
    );
  }

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <AnimatedContainer>
          <S.Breadcrumbs>
            <S.BreadcrumbLink href="/dashboard">Dashboard</S.BreadcrumbLink>
            <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
            <S.BreadcrumbLink href="/flashcards">Flashcards</S.BreadcrumbLink>
            {selectedDeck && (
              <>
                <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
                <span>{selectedDeck.name}</span>
              </>
            )}
          </S.Breadcrumbs>
        </AnimatedContainer>

        <AnimatedContainer delay="0.1s">
          <S.PageTitle>{selectedDeck ? selectedDeck.name : 'Flashcards'}</S.PageTitle>
        </AnimatedContainer>

        {selectedDeck && (
          <>
            <AnimatedContainer delay="0.2s">
              <S.FlashcardControls>
                <S.ControlButton onClick={shuffleCards} disabled={totalCards < 2}>
                  Shuffle
                </S.ControlButton>
                <S.ControlButton onClick={() => setIsAddCardModalOpen(true)}>
                  Add Card
                </S.ControlButton>
                <S.ControlButton 
                  onClick={() => handleDeleteDeck(selectedDeck._id)} 
                  style={{backgroundColor: '#dc3545'}}
                >
                  Delete Deck
                </S.ControlButton>
              </S.FlashcardControls>
            </AnimatedContainer>

            {totalCards > 0 && currentCard ? (
              <>
                <AnimatedContainer delay="0.3s">
                  <S.FlashcardContainer onClick={handleFlip}>
                    <S.FlashcardInner flipped={flipped}>
                      <S.FlashcardFront>
                        <S.FlashcardQuestion>
                          {currentCard.front}
                        </S.FlashcardQuestion>
                        <S.FlashcardHint>
                          Tap to reveal answer
                        </S.FlashcardHint>
                      </S.FlashcardFront>
                      <S.FlashcardBack>
                        <S.FlashcardAnswer>
                          {currentCard.back}
                        </S.FlashcardAnswer>
                        <S.ControlButton 
                          onClick={(e) => {
                            e.stopPropagation(); 
                            handleDeleteCard(currentCard._id);
                          }} 
                          style={{backgroundColor: '#dc3545', marginTop: '10px'}}
                        >
                          Delete Card
                        </S.ControlButton>
                      </S.FlashcardBack>
                    </S.FlashcardInner>
                  </S.FlashcardContainer>
                </AnimatedContainer>

                <AnimatedContainer delay="0.4s">
                  <S.FlashcardNavigation>
                    <S.NavButton onClick={handlePrevious} disabled={currentCardIndex === 0}>
                      Previous
                    </S.NavButton>
                    <S.CardCounter>
                      Card {currentCardIndex + 1} of {totalCards}
                    </S.CardCounter>
                    <S.NavButton primary onClick={handleNext} disabled={currentCardIndex === totalCards - 1}>
                      Next
                    </S.NavButton>
                  </S.FlashcardNavigation>
                </AnimatedContainer>

                <AnimatedContainer delay="0.5s">
                  <S.SelfAssessmentSection>
                    <S.SectionTitle>Self-Assessment</S.SectionTitle>
                    <S.AssessmentButtons>
                      <S.AssessmentButton
                        type="need-review"
                        active={assessment === 'need-review'}
                        onClick={() => handleAssessment('need-review')}
                      >
                        Need Review
                      </S.AssessmentButton>
                      <S.AssessmentButton
                        type="almost"
                        active={assessment === 'almost'}
                        onClick={() => handleAssessment('almost')}
                      >
                        Almost There
                      </S.AssessmentButton>
                      <S.AssessmentButton
                        type="known"
                        active={assessment === 'known'}
                        onClick={() => handleAssessment('known')}
                      >
                        Known
                      </S.AssessmentButton>
                    </S.AssessmentButtons>
                  </S.SelfAssessmentSection>
                </AnimatedContainer>
              </>
            ) : (
              <AnimatedContainer delay="0.3s">
                <S.InfoMessage>No flashcards in this deck. Click "Add Card" to create one.</S.InfoMessage>
              </AnimatedContainer>
            )}
          </>
        )}

        <AnimatedContainer delay="0.6s">
          <S.SubjectSelectionSection>
            <S.SectionTitle>Decks</S.SectionTitle>
            <S.SubjectsGrid>
              {decks.map((deck) => (
                <S.SubjectCard key={deck._id} selected={selectedDeck?._id === deck._id}>
                  <S.SubjectTitle>{deck.name}</S.SubjectTitle>
                  <S.SubjectCount>{deck.description || 'No description'}</S.SubjectCount>
                  <S.NavButton 
                    primary 
                    onClick={() => setSelectedDeck(deck)}
                    disabled={selectedDeck?._id === deck._id}
                  >
                    {selectedDeck?._id === deck._id ? 'Selected' : 'Study'}
                  </S.NavButton>
                </S.SubjectCard>
              ))}

              <S.CreateCustomSection>
                <S.CreateIcon>+</S.CreateIcon>
                <S.CreateTitle>Generate AI Deck</S.CreateTitle>
                <S.CreateDescription>Automatically create flashcards</S.CreateDescription>
                <S.CreateButton onClick={() => setIsAddDeckModalOpen(true)}>
                  Generate
                </S.CreateButton>
              </S.CreateCustomSection>
            </S.SubjectsGrid>
          </S.SubjectSelectionSection>
        </AnimatedContainer>
      </S.Container>

      <AddDeckModal 
        isOpen={isAddDeckModalOpen}
        onClose={() => setIsAddDeckModalOpen(false)}
        onAddDeck={handleAddDeckSubmit}
      />
      <AddCardModal 
        isOpen={isAddCardModalOpen}
        onClose={() => setIsAddCardModalOpen(false)}
        onAddCard={handleAddCardSubmit}
      />
    </>
  );
};

export default Flashcards;