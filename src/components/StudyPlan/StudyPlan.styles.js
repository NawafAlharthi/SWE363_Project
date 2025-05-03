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

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

export const FeatureCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const FeatureIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
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

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const SubjectTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  
  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

export const SubjectTab = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#6c5ce7' : '#666'};
  cursor: pointer;
  border-bottom: ${props => props.active ? '2px solid #6c5ce7' : 'none'};
  margin-bottom: -1px;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    color: #6c5ce7;
  }
`;

export const SubjectCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(80, 80, 180, 0.06);
  border: 1px solid #ececff;
  transition: box-shadow 0.2s, border 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(80, 80, 180, 0.12);
    border: 1px solid #d1d1f7;
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
  margin-right: 1.5rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`;

export const SubjectContent = styled.div`
  flex: 1;
`;

export const SubjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
`;

export const SubjectSessions = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const SubjectActions = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6c5ce7;
  cursor: pointer;
  margin-right: 1rem;
  
  &:hover {
    color: #5a4ad1;
  }
`;

export const DaySection = styled.div`
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  background: #f6faff;
  box-shadow: 0 2px 12px rgba(80,80,180,0.07);
`;

export const DaySectionHeader = styled.div`
  background-color: #eaf1fb;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d2d2d;
  border-bottom: 1px solid #e0e7ef;
  &:hover {
    background-color: #dde8f7;
  }
`;

export const DaySectionContent = styled.div`
  padding: 1.2rem 1.5rem;
  background-color: #fafdff;
`;

export const SessionRow = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(80,80,180,0.06);
  margin-bottom: 1rem;
  padding: 1.1rem 1.2rem;
  transition: box-shadow 0.2s, transform 0.2s;
  border: 1px solid #f0f0f0;
  &:hover {
    box-shadow: 0 4px 16px rgba(80,80,180,0.13);
    transform: translateY(-2px) scale(1.01);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SessionCheckbox = styled.input`
  margin-right: 1.2rem;
  width: 22px;
  height: 22px;
  cursor: pointer;
  accent-color: #6c5ce7;
`;

export const SessionSubject = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1rem;
  color: #222;
  font-weight: 500;
  gap: 0.7rem;
`;

export const PriorityIndicator = styled.span`
  margin-left: 0.7rem;
  padding: 0.2em 0.9em;
  border-radius: 999px;
  font-size: 0.98em;
  font-weight: 600;
  background: ${props =>
    props.priority === 'High' ? '#e74c3c' :
    props.priority === 'Medium' ? '#f9c846' :
    '#27ae60'};
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
`;

export const EmptySchedule = styled.div`
  padding: 2rem;
  text-align: center;
  color: #666;
  font-style: italic;
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
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
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
    border-color: #4a90e2;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 1rem;
  background-color: #fde8e8;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const WeeklyProgressPanel = styled.div`
  margin-top: 1.5rem;
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ProgressTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  
  &:hover {
    color: #333;
  }
`;

export const ProgressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProgressSubject = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const ProgressBar = styled.div`
  height: 10px;
  background-color: #e6e6ff;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.width || '0%'};
  background-color: #6c5ce7;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

export const ProgressText = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

export const SubjectName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const AddSubjectButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`;

export const SubjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const SubjectDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const TopicsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const TopicItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8f9ff;
  border-radius: 8px;
`;

export const TopicCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #6c5ce7;
`;

export const TopicContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TopicName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.completed ? '#6c5ce7' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

export const TopicProgress = styled.span`
  font-size: 0.85rem;
  color: #666;
`;

export const TopicActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AddTopicForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const DaySectionTitle = styled.div`
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  font-size: 1.08rem;
`; 