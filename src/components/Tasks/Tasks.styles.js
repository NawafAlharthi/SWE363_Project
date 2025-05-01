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

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1rem;
`;

export const TaskCheckbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.2rem;
  cursor: pointer;
`;

export const TaskContent = styled.div`
  flex: 1;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  opacity: ${props => props.completed ? 0.7 : 1};
`;

export const TaskTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const TaskDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const TaskMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
`;

export const TaskDueDate = styled.span`
  color: #666;
`;

export const TaskPriority = styled.span`
  color: ${props => {
    switch (props.priority) {
      case 'high': return '#e74c3c';
      case 'medium': return '#f39c12';
      default: return '#27ae60';
    }
  }};
  font-weight: 500;
  text-transform: capitalize;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TaskEditForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`; 