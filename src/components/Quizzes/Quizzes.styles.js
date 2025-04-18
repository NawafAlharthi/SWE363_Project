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
  margin-bottom: 2rem;
  color: #333;
`;

export const SelectionContainer = styled.div`
  margin-bottom: 3rem;
`;

export const SelectionDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const SelectionForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const SelectionGroup = styled.div`
  margin-bottom: 1rem;
`;

export const SelectionLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const SelectionDropdown = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${props => props.secondary ? 'transparent' : '#6c5ce7'};
  color: ${props => props.secondary ? '#6c5ce7' : 'white'};
  border: ${props => props.secondary ? '1px solid #6c5ce7' : 'none'};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? '#f0f0ff' : '#5a4ad1'};
  }
`;

export const RecentQuizzesSection = styled.div`
  margin-bottom: 3rem;
`;

export const QuizHistoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9ff;
  margin-bottom: 1rem;
`;

export const QuizHistoryIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`;

export const QuizHistoryContent = styled.div`
  flex: 1;
`;

export const QuizHistoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #333;
`;

export const QuizHistoryMeta = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: #666;
`;

export const QuizHistoryDate = styled.span`
  margin-right: 1rem;
`;

export const QuizHistoryScore = styled.span`
  font-weight: 500;
`;

export const QuizHistoryActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StatisticsSection = styled.div`
  margin-bottom: 3rem;
`;

export const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const StatCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

export const StatIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`;

export const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

export const RecommendedSection = styled.div`
  margin-bottom: 3rem;
`;

export const RecommendedQuiz = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9ff;
  margin-bottom: 1rem;
  border-left: 4px solid #6c5ce7;
`;

export const RecommendedIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`;

export const RecommendedContent = styled.div`
  flex: 1;
`;

export const RecommendedTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #333;
`;

export const RecommendedMeta = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: #666;
`;

export const RecommendedDifficulty = styled.span`
  margin-right: 1rem;
`;

export const RecommendedQuestions = styled.span`
  font-weight: 500;
`;

export const RecommendedTime = styled.span`
  margin-left: 1rem;
  font-style: italic;
`;

export const RecommendedAction = styled.div`
  display: flex;
`;