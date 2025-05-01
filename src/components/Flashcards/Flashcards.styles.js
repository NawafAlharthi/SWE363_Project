import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

export const BreadcrumbLink = styled.a`
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #6c5ce7;
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 0.5rem;
  color: #666;
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`;

export const Button = styled.button`
  background-color: ${props => props.secondary ? 'white' : '#6c5ce7'};
  color: ${props => props.secondary ? '#6c5ce7' : 'white'};
  border: 1px solid #6c5ce7;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: ${props => props.secondary ? '#f8f9ff' : '#5a4ad1'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DeckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const DeckCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const DeckTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const DeckDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const CardCount = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

export const FlashcardContainer = styled.div`
  perspective: 1000px;
  margin: 2rem auto;
  width: 100%;
  max-width: 600px;
  height: 300px;
  cursor: pointer;
`;

export const FlashcardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

export const FlashcardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FlashcardBack = styled(FlashcardFront)`
  transform: rotateY(180deg);
  background-color: #6c5ce7;
  color: white;
`;

export const FlashcardQuestion = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const FlashcardAnswer = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const FlashcardNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const NavButton = styled(Button)`
  min-width: 100px;
`;

export const CardCounter = styled.div`
  font-size: 1rem;
  color: #666;
`;

export const Modal = styled.div`
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

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;