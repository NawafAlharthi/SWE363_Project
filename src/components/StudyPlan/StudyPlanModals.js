import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for modals
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
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
`;

// Add Subject Modal
export const AddSubjectModal = ({ isOpen, onClose, onAddSubject }) => {
  const [subjectName, setSubjectName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (subjectName.trim()) {
      onAddSubject({
        name: subjectName,
        sessions: []
      });
      
      setSubjectName('');
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add New Subject</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="subjectName">Subject Name</Label>
            <Input
              id="subjectName"
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="e.g., Mathematics"
              required
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="button" secondary onClick={onClose}>Cancel</Button>
            <Button type="submit">Add Subject</Button>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Edit Subject Modal
export const EditSubjectModal = ({ isOpen, onClose, onEditSubject, subject }) => {
  const [subjectName, setSubjectName] = useState(subject?.name || '');
  
  // Update state when subject changes
  React.useEffect(() => {
    if (subject) {
      setSubjectName(subject.name);
    }
  }, [subject]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (subjectName.trim() && subject) {
      onEditSubject({
        ...subject,
        name: subjectName
      });
      
      onClose();
    }
  };
  
  if (!isOpen || !subject) return null;
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit Subject</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="subjectName">Subject Name</Label>
            <Input
              id="subjectName"
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="e.g., Mathematics"
              required
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="button" secondary onClick={onClose}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Delete Subject Modal
export const DeleteSubjectModal = ({ isOpen, onClose, onDeleteSubject, subject }) => {
  if (!isOpen || !subject) return null;
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Delete Subject</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <p>Are you sure you want to delete <strong>{subject.name}</strong>? This action cannot be undone.</p>
        
        <ButtonGroup>
          <Button type="button" secondary onClick={onClose}>Cancel</Button>
          <Button 
            type="button" 
            style={{ backgroundColor: '#e74c3c' }}
            onClick={() => {
              onDeleteSubject(subject.id);
              onClose();
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Weekly Progress Modal
export const WeeklyProgressModal = ({ isOpen, onClose, progressData }) => {
  if (!isOpen || !progressData) return null;
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Weekly Progress</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <div>
          <h3>Overall Completion: {progressData.completionPercentage}%</h3>
          
          <h4>Daily Breakdown</h4>
          <ul>
            {progressData.dailyBreakdown.map((day, index) => (
              <li key={index}>
                {day.day}: {day.completed}/{day.total} sessions completed
              </li>
            ))}
          </ul>
          
          <h4>Subject Summary</h4>
          <ul>
            {progressData.subjectSummary.map((subject, index) => (
              <li key={index}>
                {subject.name}: {subject.completed}/{subject.total} sessions completed
              </li>
            ))}
          </ul>
          
          {progressData.missedSessions.length > 0 && (
            <>
              <h4>Missed Sessions</h4>
              <ul>
                {progressData.missedSessions.map((session, index) => (
                  <li key={index}>
                    {session.day}: {session.subject} - {session.topic} ({session.duration} hours)
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <ButtonGroup>
          <Button type="button" onClick={onClose}>Close</Button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};