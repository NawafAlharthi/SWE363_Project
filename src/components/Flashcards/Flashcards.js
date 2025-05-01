import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import api from '../../config/api';
import * as S from './Flashcards.styles';

const Flashcards = () => {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAddDeckModalOpen, setIsAddDeckModalOpen] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);

  // Fetch decks when component mounts
  useEffect(() => {
    fetchDecks();
  }, []);

  // Fetch cards when a deck is selected
  useEffect(() => {
    if (selectedDeck) {
      fetchCards(selectedDeck._id);
    }
  }, [selectedDeck]);

  const fetchDecks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/flashcards/decks');
      setDecks(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load flashcard decks');
      console.error('Error fetching decks:', err);
      setLoading(false);
    }
  };

  const fetchCards = async (deckId) => {
    try {
      setLoading(true);
      const response = await api.get(`/flashcards/cards/${deckId}`);
      setFlashcards(response.data);
      setCurrentCardIndex(0);
      setFlipped(false);
      setLoading(false);
    } catch (err) {
      setError('Failed to load flashcards');
      console.error('Error fetching cards:', err);
      setLoading(false);
    }
  };

  const handleAddDeck = async (deckData) => {
    try {
      setLoading(true);
      const response = await api.post('/flashcards/decks/add', deckData);
      setDecks(prev => [...prev, response.data]);
      setIsAddDeckModalOpen(false);
      setLoading(false);
    } catch (err) {
      setError('Failed to create deck');
      console.error('Error creating deck:', err);
      setLoading(false);
    }
  };

  const handleAddCard = async (cardData) => {
    if (!selectedDeck) return;

    try {
      setLoading(true);
      const response = await api.post('/flashcards/cards/add', {
        ...cardData,
        deckId: selectedDeck._id
      });
      setFlashcards(prev => [...prev, response.data]);
      setIsAddCardModalOpen(false);
      setLoading(false);
    } catch (err) {
      setError('Failed to create flashcard');
      console.error('Error creating flashcard:', err);
      setLoading(false);
    }
  };

  const handleFlip = () => setFlipped(!flipped);

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false);
    }
  };

  const handleStudyDeck = (deck) => {
    setSelectedDeck(deck);
    setCurrentCardIndex(0);
    setFlipped(false);
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <S.Breadcrumbs>
          <S.BreadcrumbLink href="/dashboard">Dashboard</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/flashcards">Flashcards</S.BreadcrumbLink>
        </S.Breadcrumbs>

        <S.PageTitle>
          {selectedDeck ? `${selectedDeck.name} Flashcards` : 'My Flashcard Decks'}
        </S.PageTitle>

        {error && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
        )}

        {!selectedDeck ? (
          // Deck List View
          <>
            <S.Button onClick={() => setIsAddDeckModalOpen(true)}>
              Create New Deck
            </S.Button>
            
            {loading ? (
              <p>Loading decks...</p>
            ) : decks.length === 0 ? (
              <p>No flashcard decks yet. Create your first deck!</p>
            ) : (
              <S.DeckGrid>
                {decks.map((deck) => (
                  <S.DeckCard key={deck._id} onClick={() => handleStudyDeck(deck)}>
                    <S.DeckTitle>{deck.name}</S.DeckTitle>
                    <S.DeckDescription>{deck.description}</S.DeckDescription>
                    <S.CardCount>
                      {deck.cardCount || 0} cards
                    </S.CardCount>
                  </S.DeckCard>
                ))}
              </S.DeckGrid>
            )}
          </>
        ) : (
          // Flashcard Study View
          <>
            <S.Button onClick={() => setSelectedDeck(null)}>
              Back to Decks
            </S.Button>
            <S.Button onClick={() => setIsAddCardModalOpen(true)}>
              Add New Card
            </S.Button>

            {loading ? (
              <p>Loading flashcards...</p>
            ) : flashcards.length === 0 ? (
              <p>No flashcards in this deck yet. Add your first card!</p>
            ) : (
              <>
                <S.FlashcardContainer onClick={handleFlip}>
                  <S.FlashcardInner flipped={flipped}>
                    <S.FlashcardFront>
                      <S.FlashcardQuestion>
                        {flashcards[currentCardIndex]?.front}
                      </S.FlashcardQuestion>
                    </S.FlashcardFront>
                    <S.FlashcardBack>
                      <S.FlashcardAnswer>
                        {flashcards[currentCardIndex]?.back}
                      </S.FlashcardAnswer>
                    </S.FlashcardBack>
                  </S.FlashcardInner>
                </S.FlashcardContainer>

                <S.FlashcardNavigation>
                  <S.NavButton 
                    onClick={handlePrevious} 
                    disabled={currentCardIndex === 0}
                  >
                    Previous
                  </S.NavButton>
                  <S.CardCounter>
                    Card {currentCardIndex + 1} of {flashcards.length}
                  </S.CardCounter>
                  <S.NavButton 
                    onClick={handleNext} 
                    disabled={currentCardIndex === flashcards.length - 1}
                  >
                    Next
                  </S.NavButton>
                </S.FlashcardNavigation>
              </>
            )}
          </>
        )}

        {/* Add Deck Modal */}
        {isAddDeckModalOpen && (
          <S.Modal>
            <S.ModalContent>
              <h2>Create New Deck</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleAddDeck({
                  name: e.target.name.value,
                  description: e.target.description.value
                });
              }}>
                <S.Input
                  name="name"
                  placeholder="Deck Name"
                  required
                />
                <S.TextArea
                  name="description"
                  placeholder="Deck Description"
                  required
                />
                <S.Button type="submit" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Deck'}
                </S.Button>
                <S.Button 
                  type="button" 
                  onClick={() => setIsAddDeckModalOpen(false)}
                >
                  Cancel
                </S.Button>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}

        {/* Add Card Modal */}
        {isAddCardModalOpen && (
          <S.Modal>
            <S.ModalContent>
              <h2>Add New Flashcard</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleAddCard({
                  front: e.target.front.value,
                  back: e.target.back.value
                });
              }}>
                <S.TextArea
                  name="front"
                  placeholder="Front of card"
                  required
                />
                <S.TextArea
                  name="back"
                  placeholder="Back of card"
                  required
                />
                <S.Button type="submit" disabled={loading}>
                  {loading ? 'Adding...' : 'Add Card'}
                </S.Button>
                <S.Button 
                  type="button" 
                  onClick={() => setIsAddCardModalOpen(false)}
                >
                  Cancel
                </S.Button>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}
      </S.Container>
    </>
  );
};

export default Flashcards;