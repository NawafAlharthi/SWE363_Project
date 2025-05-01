import React, { useState } from 'react';
import styled from 'styled-components';

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
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.4rem;
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
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.error ? '#e74c3c' : '#ddd'};
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.error ? '#e74c3c' : '#ddd'};
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`;

const ErrorText = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const SessionContainer = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const SessionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SessionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    color: #c0392b;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: ${props => props.secondary ? 'transparent' : '#6c5ce7'};
  color: ${props => props.secondary ? '#6c5ce7' : 'white'};
  border: ${props => props.secondary ? '1px solid #6c5ce7' : 'none'};
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? '#f0f0ff' : '#5a4ad1'};
  }
  
  &:disabled {
    background-color: ${props => props.secondary ? 'transparent' : '#a8a8a8'};
    color: ${props => props.secondary ? '#a8a8a8' : 'white'};
    border-color: ${props => props.secondary ? '#a8a8a8' : 'transparent'};
    cursor: not-allowed;
  }
`;

const AddSessionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: #f0f0ff;
  border: 1px dashed #6c5ce7;
  border-radius: 4px;
  color: #6c5ce7;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
  
  &:hover {
    background-color: #e6e6ff;
  }
`;

const ConfirmationText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #333;
`;

// Add Subject Modal
export const AddSubjectModal = ({ isOpen, onClose, onSubmit, existingSubjects = [] }) => {
  const [subjectName, setSubjectName] = useState('');
  const [sessions, setSessions] = useState([
    { id: 1, day: 'Monday', duration: '1', topic: '', priority: 'Medium', completed: false }
  ]);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!subjectName.trim()) {
      newErrors.subjectName = 'Subject name is required';
    } else {
      // Check for duplicate subject names
      const isDuplicate = existingSubjects.some(
        subject => subject.name.toLowerCase() === subjectName.trim().toLowerCase()
      );
      
      if (isDuplicate) {
        newErrors.subjectName = 'A subject with this name already exists';
      }
    }
    
    const sessionErrors = [];
    sessions.forEach((session, index) => {
      const sessionError = {};
      
      if (!session.duration) {
        sessionError.duration = 'Duration is required';
      } else if (isNaN(session.duration) || parseFloat(session.duration) <= 0) {
        sessionError.duration = 'Duration must be a positive number';
      }
      
      if (!session.topic.trim()) {
        sessionError.topic = 'Topic is required';
      }
      
      if (Object.keys(sessionError).length > 0) {
        sessionErrors[index] = sessionError;
      }
    });
    
    if (sessionErrors.length > 0) {
      newErrors.sessions = sessionErrors;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleAddSession = () => {
    setSessions([
      ...sessions,
      {
        id: Date.now(),
        day: 'Monday',
        duration: '1',
        topic: '',
        priority: 'Medium'
      }
    ]);
  };
  
  const handleRemoveSession = (id) => {
    if (sessions.length > 1) {
      setSessions(sessions.filter(session => session.id !== id));
    }
  };
  
  const handleSessionChange = (id, field, value) => {
    setSessions(sessions.map(session => 
      session.id === id ? { ...session, [field]: value } : session
    ));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        name: subjectName,
        sessions: sessions
      });
      
      // Reset form
      setSubjectName('');
      setSessions([
        { id: 1, day: 'Monday', duration: '1', topic: '', priority: 'Medium' }
      ]);
      setErrors({});
      
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
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
              onChange={e => setSubjectName(e.target.value)}
              error={errors.subjectName}
            />
            {errors.subjectName && <ErrorText>{errors.subjectName}</ErrorText>}
          </FormGroup>
          
          <Label>Sessions</Label>
          
          {sessions.map((session, index) => (
            <SessionContainer key={session.id}>
              <SessionHeader>
                <SessionTitle>Session {index + 1}</SessionTitle>
                {sessions.length > 1 && (
                  <DeleteButton 
                    type="button" 
                    onClick={() => handleRemoveSession(session.id)}
                  >
                    &times;
                  </DeleteButton>
                )}
              </SessionHeader>
              
              <FormGroup>
                <Label htmlFor={`day-${session.id}`}>Day</Label>
                <Select
                  id={`day-${session.id}`}
                  value={session.day}
                  onChange={e => handleSessionChange(session.id, 'day', e.target.value)}
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor={`duration-${session.id}`}>Duration (hours)</Label>
                <Input
                  id={`duration-${session.id}`}
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={session.duration}
                  onChange={e => handleSessionChange(session.id, 'duration', e.target.value)}
                  error={errors.sessions && errors.sessions[index] && errors.sessions[index].duration}
                />
                {errors.sessions && errors.sessions[index] && errors.sessions[index].duration && (
                  <ErrorText>{errors.sessions[index].duration}</ErrorText>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor={`topic-${session.id}`}>Topic</Label>
                <Input
                  id={`topic-${session.id}`}
                  type="text"
                  value={session.topic}
                  onChange={e => handleSessionChange(session.id, 'topic', e.target.value)}
                  error={errors.sessions && errors.sessions[index] && errors.sessions[index].topic}
                />
                {errors.sessions && errors.sessions[index] && errors.sessions[index].topic && (
                  <ErrorText>{errors.sessions[index].topic}</ErrorText>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor={`priority-${session.id}`}>Priority</Label>
                <Select
                  id={`priority-${session.id}`}
                  value={session.priority}
                  onChange={e => handleSessionChange(session.id, 'priority', e.target.value)}
                >
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </Select>
              </FormGroup>
            </SessionContainer>
          ))}
          
          <AddSessionButton type="button" onClick={handleAddSession}>
            + Add Session
          </AddSessionButton>
          
          <ButtonGroup>
            <Button type="button" secondary onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add Subject
            </Button>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Edit Subject Modal
export const EditSubjectModal = ({ isOpen, onClose, subject, onSubmit }) => {
  const [subjectName, setSubjectName] = useState(subject ? subject.name : '');
  const [sessions, setSessions] = useState(
    subject ? subject.sessions : [{ id: 1, day: 'Monday', duration: '1', topic: '', priority: 'Medium' }]
  );
  const [errors, setErrors] = useState({});
  
  // Update state when subject prop changes
  React.useEffect(() => {
    if (subject) {
      setSubjectName(subject.name);
      setSessions(subject.sessions);
    }
  }, [subject]);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!subjectName.trim()) {
      newErrors.subjectName = 'Subject name is required';
    }
    
    const sessionErrors = [];
    sessions.forEach((session, index) => {
      const sessionError = {};
      
      if (!session.duration) {
        sessionError.duration = 'Duration is required';
      } else if (isNaN(session.duration) || parseFloat(session.duration) <= 0) {
        sessionError.duration = 'Duration must be a positive number';
      }
      
      if (!session.topic.trim()) {
        sessionError.topic = 'Topic is required';
      }
      
      if (Object.keys(sessionError).length > 0) {
        sessionErrors[index] = sessionError;
      }
    });
    
    if (sessionErrors.length > 0) {
      newErrors.sessions = sessionErrors;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleAddSession = () => {
    setSessions([
      ...sessions,
      {
        id: Date.now(),
        day: 'Monday',
        duration: '1',
        topic: '',
        priority: 'Medium'
      }
    ]);
  };
  
  const handleRemoveSession = (id) => {
    if (sessions.length > 1) {
      setSessions(sessions.filter(session => session.id !== id));
    }
  };
  
  const handleSessionChange = (id, field, value) => {
    setSessions(sessions.map(session => 
      session.id === id ? { ...session, [field]: value } : session
    ));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        id: subject.id,
        name: subjectName,
        sessions: sessions
      });
      
      onClose();
    }
  };
  
  if (!isOpen || !subject) return null;
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
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
              onChange={e => setSubjectName(e.target.value)}
              error={errors.subjectName}
            />
            {errors.subjectName && <ErrorText>{errors.subjectName}</ErrorText>}
          </FormGroup>
          
          <Label>Sessions</Label>
          
          {sessions.map((session, index) => (
            <SessionContainer key={session.id}>
              <SessionHeader>
                <SessionTitle>Session {index + 1}</SessionTitle>
                {sessions.length > 1 && (
                  <DeleteButton 
                    type="button" 
                    onClick={() => handleRemoveSession(session.id)}
                  >
                    &times;
                  </DeleteButton>
                )}
              </SessionHeader>
              
              <FormGroup>
                <Label htmlFor={`day-${session.id}`}>Day</Label>
                <Select
                  id={`day-${session.id}`}
                  value={session.day}
                  onChange={e => handleSessionChange(session.id, 'day', e.target.value)}
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor={`duration-${session.id}`}>Duration (hours)</Label>
                <Input
                  id={`duration-${session.id}`}
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={session.duration}
                  onChange={e => handleSessionChange(session.id, 'duration', e.target.value)}
                  error={errors.sessions && errors.sessions[index] && errors.sessions[index].duration}
                />
                {errors.sessions && errors.sessions[index] && errors.sessions[index].duration && (
                  <ErrorText>{errors.sessions[index].duration}</ErrorText>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor={`topic-${session.id}`}>Topic</Label>
                <Input
                  id={`topic-${session.id}`}
                  type="text"
                  value={session.topic}
                  onChange={e => handleSessionChange(session.id, 'topic', e.target.value)}
                  error={errors.sessions && errors.sessions[index] && errors.sessions[index].topic}
                />
                {errors.sessions && errors.sessions[index] && errors.sessions[index].topic && (
                  <ErrorText>{errors.sessions[index].topic}</ErrorText>
                )}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor={`priority-${session.id}`}>Priority</Label>
                <Select
                  id={`priority-${session.id}`}
                  value={session.priority}
                  onChange={e => handleSessionChange(session.id, 'priority', e.target.value)}
                >
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </Select>
              </FormGroup>
            </SessionContainer>
          ))}
          
          <AddSessionButton type="button" onClick={handleAddSession}>
            + Add Session
          </AddSessionButton>
          
          <ButtonGroup>
            <Button type="button" secondary onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Save Changes
            </Button>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Delete Subject Confirmation Modal
export const DeleteSubjectModal = ({ isOpen, onClose, subject, onConfirm }) => {
  if (!isOpen || !subject) return null;
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Delete Subject</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <ConfirmationText>
          Are you sure you want to delete <strong>{subject.name}</strong>? This action cannot be undone.
        </ConfirmationText>
        
        <ButtonGroup>
          <Button type="button" secondary onClick={onClose}>
            Cancel
          </Button>
          <Button 
            type="button" 
            style={{ backgroundColor: '#e74c3c', borderColor: '#e74c3c' }}
            onClick={() => {
              onConfirm(subject.id);
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

// Weekly Progress Details Modal
export const WeeklyProgressModal = ({ isOpen, onClose, progressData }) => {
  if (!isOpen || !progressData) return null;
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Weekly Progress Details</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <div>
          <h3>Overall Progress</h3>
          <div style={{ 
            height: '20px', 
            backgroundColor: '#eee', 
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '1rem'
          }}>
            <div style={{ 
              height: '100%', 
              width: `${progressData.completionPercentage}%`, 
              backgroundColor: '#6c5ce7',
              borderRadius: '10px'
            }} />
          </div>
          <p>{progressData.completionPercentage}% of planned sessions completed</p>
          
          <h3>Daily Breakdown</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {progressData.dailyBreakdown.map((day, index) => (
              <li key={index}>
                <strong>{day.day}:</strong> {day.completed}/{day.total} sessions completed
              </li>
            ))}
          </ul>
          
          <h3>Subject Summary</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {progressData.subjectSummary.map((subject, index) => (
              <li key={index}>
                <strong>{subject.name}:</strong> {subject.completed}/{subject.total} sessions
              </li>
            ))}
          </ul>
          
          <h3>Missed/Pending Sessions</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {progressData.missedSessions.map((session, index) => (
              <li key={index}>
                <strong>{session.day}:</strong> {session.subject} - {session.topic} ({session.duration} hours)
              </li>
            ))}
          </ul>
        </div>
        
        <ButtonGroup>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};
