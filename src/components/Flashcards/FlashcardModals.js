import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#6c5ce7' : '#f0f0f0'};
  color: ${props => props.primary ? 'white' : '#333'};
  border: none;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.primary ? '#5a4ad1' : '#e0e0e0'};
  }
`;

export const AddDeckModal = ({ isOpen, onClose, onAddDeck }) => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [numCards, setNumCards] = useState(10);

  useEffect(() => {
    if (isOpen) {
      setName('');
      setTopic('');
      setNumCards(10);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !topic.trim()) {
      alert('Deck name and topic are required.');
      return;
    }
    onAddDeck({ name, topic, numCards });
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>Create New Deck</ModalHeader>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="deckName">Deck Name</Label>
            <Input 
              id="deckName" 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deckTopic">Topic</Label>
            <Input
              id="deckTopic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="numCards">Number of Cards (5-20)</Label>
            <Input
              id="numCards"
              type="number"
              min="5"
              max="20"
              value={numCards}
              onChange={(e) => setNumCards(Math.min(20, Math.max(5, e.target.value)))}
              required
            />
          </FormGroup>
          <ButtonGroup>
            <Button type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit" primary>Generate Deck</Button>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

// --- Add Card Modal ---
export const AddCardModal = ({ isOpen, onClose, onAddCard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (isOpen) {
      setQuestion('');
      setAnswer('');
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) {
      alert('Both question and answer are required.'); // Simple validation
      return;
    }
    onAddCard({ question, answer });
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>Add New Flashcard</ModalHeader>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="cardQuestion">Question</Label>
            <Textarea 
              id="cardQuestion" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cardAnswer">Answer</Label>
            <Textarea 
              id="cardAnswer" 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required 
            />
          </FormGroup>
          <ButtonGroup>
            <Button type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit" primary>Add Card</Button>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};
