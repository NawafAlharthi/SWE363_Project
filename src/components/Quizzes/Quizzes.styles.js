import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  gap: 0.5rem;
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
  color: #666;
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
`;

export const Button = styled.button`
  background-color: ${props => props.secondary ? 'transparent' : '#6c5ce7'};
  color: ${props => props.secondary ? '#6c5ce7' : 'white'};
  border: ${props => props.secondary ? '1px solid #6c5ce7' : 'none'};
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? '#f0f0ff' : '#5a4ad1'};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const QuizzesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const QuizCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

export const QuizIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`;

export const QuizTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const QuizDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const QuizMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
`;

export const AnswersList = styled.div`
  margin-top: 1.5rem;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: #444;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  button {
    flex: 1;
    padding: 1rem;
  }
`;

export const AnswerOption = styled.div`
  padding: 1rem;
  margin-bottom: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.selected ? '#6c5ce7' : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  
  &:hover {
    background-color: ${props => props.selected ? '#5a4ad1' : '#f8f9ff'};
    border-color: #6c5ce7;
  }
`;

export const QuestionContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
`;

export const QuestionNumber = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const QuestionText = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const ResultsContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f8f9ff;
  border-radius: 8px;
  margin: 2rem 0;
`;

export const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Score = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6c5ce7;
  margin-bottom: 2rem;
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  background-color: #f8d7da;
  padding: 1rem;
  border-radius: 4px;
  margin: 1.5rem 0;
`;

export const LoadingMessage = styled.p`
  color: #0d6efd;
  background-color: #cfe2ff;
  padding: 1rem;
  border-radius: 4px;
  margin: 1.5rem 0;
`;

export const InfoMessage = styled.p`
  color: #055160;
  background-color: #cff4fc;
  padding: 1rem;
  border-radius: 4px;
  margin: 1.5rem 0;
`;

// Add to Quizzes.styles.js
export const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

export const StatTitle = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;