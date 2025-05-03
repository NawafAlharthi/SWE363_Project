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
  margin-bottom: 1rem;
  color: #333;
`;

export const FlashcardProgress = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const FlashcardControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ControlButton = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const FlashcardContainer = styled.div`
  perspective: 1000px;
  margin-bottom: 2rem;
`;

export const FlashcardInner = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const FlashcardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const FlashcardFront = styled(FlashcardSide)`
  background-color: #f8f9ff;
`;

export const FlashcardBack = styled(FlashcardSide)`
  background-color: #f0f0ff;
  transform: rotateY(180deg);
`;

export const FlashcardQuestion = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

export const FlashcardHint = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
`;

export const FlashcardAnswer = styled.div`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

export const FlashcardNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const NavButton = styled.button`
  background-color: ${props => props.primary ? '#6c5ce7' : '#f0f0f0'};
  color: ${props => props.primary ? 'white' : '#333'};
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#5a4ad1' : '#e0e0e0'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CardCounter = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

export const SelfAssessmentSection = styled.div`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const AssessmentButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const AssessmentButton = styled.button`
  background-color: ${props => {
    if (props.active) {
      if (props.type === 'need-review') return '#ffebee';
      if (props.type === 'almost') return '#fff8e1';
      if (props.type === 'known') return '#e8f5e9';
    }
    return '#f0f0f0';
  }};
  color: ${props => {
    if (props.active) {
      if (props.type === 'need-review') return '#c62828';
      if (props.type === 'almost') return '#ff8f00';
      if (props.type === 'known') return '#2e7d32';
    }
    return '#333';
  }};
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const SubjectSelectionSection = styled.div`
  margin-bottom: 3rem;
`;

export const SubjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const SubjectCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

export const SubjectIcon = styled.div`
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

export const SubjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const SubjectCount = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const CreateCustomSection = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 2px dashed #ddd;
  transition: border-color 0.2s ease;
  
  &:hover {
    border-color: #6c5ce7;
  }
`;

export const CreateIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`;

export const CreateTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const CreateDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const CreateButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`;

export const ErrorMessage = styled.div`
  color: #c62828;
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

export const InfoMessage = styled.div`
  color: #1565c0;
  background-color: #e3f2fd;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

export const LoadingMessage = styled.div`
  color: #333;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  text-align: center;
`;