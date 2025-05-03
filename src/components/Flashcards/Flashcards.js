import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
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
  const [loading, setLoading] = useState(false);
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

  const fetchDecks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/flashcards/decks');
      setDecks(response.data);
      if (response.data.length > 0 && !selectedDeck) {
        setSelectedDeck(response.data[0]);
      }
      setLoading(false);
    } catch (err) {
      handleError("Failed to load decks", err);
    }
  };

  const fetchFlashcards = async (deckId) => {
    try {
      setLoading(true);
      const response = await api.get(`/flashcards/cards/${deckId}`);
      setFlashcards(response.data);
      setCurrentCardIndex(0);
      setFlipped(false);
      setAssessment(null);
      setLoading(false);
    } catch (err) {
      handleError(`Failed to load flashcards for deck`, err);
    }
  };

  const handleAddDeckSubmit = async (deckData) => {
    try {
      setLoading(true);
      const response = await api.post('/flashcards/decks/generate', deckData);
      
      setDecks(prev => [...prev, response.data]);
      setSelectedDeck(response.data);
      setIsAddDeckModalOpen(false);
      setError(null);
    } catch (err) {
      handleError("Failed to generate deck", err);
    } finally {
      setLoading(false); // Ensure loading is reset
    }
  };

  const handleAddCardSubmit = async (cardData) => {
    try {
      if (!selectedDeck) throw new Error("No deck selected");
      
      setLoading(true);
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
    } finally {
      setLoading(false); // Always reset loading state
    }
  };

  const handleError = (message, err) => {
    console.error(message, err);
    setError(message + (err.response?.data?.message || ''));
    setLoading(false);
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
        setLoading(true);
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
        setLoading(true);
        await api.delete(`/flashcards/cards/${cardId}`);
        
        setFlashcards(prev => 
          prev.filter(c => c._id !== cardId)
        );
        setCurrentCardIndex(prev => 
          Math.min(prev, flashcards.length - 2)
        );
      } catch (err) {
        handleError("Failed to delete card", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const currentCard = flashcards[currentCardIndex];
  const totalCards = flashcards.length;

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

        <S.PageTitle>{selectedDeck ? selectedDeck.name : 'Flashcards'}</S.PageTitle>

        {selectedDeck && (
          <>
            <S.FlashcardControls>
              <S.ControlButton onClick={shuffleCards} disabled={loading || totalCards < 2}>
                Shuffle
              </S.ControlButton>
              <S.ControlButton onClick={() => setIsAddCardModalOpen(true)} disabled={loading}>
                Add Card
              </S.ControlButton>
              <S.ControlButton 
                onClick={() => handleDeleteDeck(selectedDeck._id)} 
                disabled={loading}
                style={{backgroundColor: '#dc3545'}}
              >
                Delete Deck
              </S.ControlButton>
            </S.FlashcardControls>

            {loading && flashcards.length === 0 ? (
              <S.LoadingMessage>Loading flashcards...</S.LoadingMessage>
            ) : totalCards > 0 && currentCard ? (
              <>
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
                        disabled={loading}
                      >
                        Delete Card
                      </S.ControlButton>
                    </S.FlashcardBack>
                  </S.FlashcardInner>
                </S.FlashcardContainer>

                <S.FlashcardNavigation>
                  <S.NavButton onClick={handlePrevious} disabled={loading || currentCardIndex === 0}>
                    Previous
                  </S.NavButton>
                  <S.CardCounter>
                    Card {currentCardIndex + 1} of {totalCards}
                  </S.CardCounter>
                  <S.NavButton primary onClick={handleNext} disabled={loading || currentCardIndex === totalCards - 1}>
                    Next
                  </S.NavButton>
                </S.FlashcardNavigation>

                <S.SelfAssessmentSection>
                  <S.SectionTitle>Self-Assessment</S.SectionTitle>
                  <S.AssessmentButtons>
                    <S.AssessmentButton
                      type="need-review"
                      active={assessment === 'need-review'}
                      onClick={() => setAssessment('need-review')}
                      disabled={loading}
                    >
                      Need Review
                    </S.AssessmentButton>
                    <S.AssessmentButton
                      type="almost"
                      active={assessment === 'almost'}
                      onClick={() => setAssessment('almost')}
                      disabled={loading}
                    >
                      Almost There
                    </S.AssessmentButton>
                    <S.AssessmentButton
                      type="known"
                      active={assessment === 'known'}
                      onClick={() => setAssessment('known')}
                      disabled={loading}
                    >
                      Known
                    </S.AssessmentButton>
                  </S.AssessmentButtons>
                </S.SelfAssessmentSection>
              </>
            ) : (
              <S.InfoMessage>No flashcards in this deck. Click "Add Card" to create one.</S.InfoMessage>
            )}
          </>
        )}

        <S.SubjectSelectionSection>
          <S.SectionTitle>Decks</S.SectionTitle>
          {loading && decks.length === 0 ? (
            <S.LoadingMessage>Loading decks...</S.LoadingMessage>
          ) : (
            <S.SubjectsGrid>
              {decks.map((deck) => (
                <S.SubjectCard key={deck._id} selected={selectedDeck?._id === deck._id}>
                  <S.SubjectTitle>{deck.name}</S.SubjectTitle>
                  <S.SubjectCount>{deck.description || 'No description'}</S.SubjectCount>
                  <S.NavButton 
                    primary 
                    onClick={() => setSelectedDeck(deck)}
                    disabled={loading || (selectedDeck?._id === deck._id)}
                  >
                    {selectedDeck?._id === deck._id ? 'Selected' : 'Study'}
                  </S.NavButton>
                </S.SubjectCard>
              ))}

              <S.CreateCustomSection>
                <S.CreateIcon>+</S.CreateIcon>
                <S.CreateTitle>Generate AI Deck</S.CreateTitle>
                <S.CreateDescription>Automatically create flashcards</S.CreateDescription>
                <S.CreateButton onClick={() => setIsAddDeckModalOpen(true)} disabled={loading}>
                  Generate
                </S.CreateButton>
              </S.CreateCustomSection>
            </S.SubjectsGrid>
          )}
        </S.SubjectSelectionSection>
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