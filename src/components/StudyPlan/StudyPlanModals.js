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

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: #333;
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
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const TextArea = styled.textarea`
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

const Button = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 0.5rem;
  
  &:hover {
    background-color: #5a4ad1;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f5f5f5;
  color: #333;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const TopicList = styled.div`
  margin-top: 1rem;
`;

const TopicItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.75rem;
  flex-wrap: nowrap;
  max-width: 100%;
  background: transparent;
`;

const RemoveTopicButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
  &:hover {
    color: #cc0000;
    background: #ffeaea;
  }
`;

const Select = styled.select`
  width: auto;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-left: 0.5rem;
  background: white;
  color: #333;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

// Add Subject Modal
export const AddSubjectModal = ({ isOpen, onClose, onAddSubject }) => {
  const [subjectName, setSubjectName] = useState('');
  const [topics, setTopics] = useState([{ name: '', allocatedTime: '', day: 'Monday', priority: 'Medium' }]);
  const [totalAllocatedTime, setTotalAllocatedTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate topics
    const validTopics = topics.filter(
      t => t.name && t.allocatedTime && !isNaN(parseFloat(t.allocatedTime))
    );
    if (validTopics.length === 0) {
      setError('Please add at least one valid topic (name and hours required).');
      return;
    }

    setError('');
    const newSubject = {
      name: subjectName,
      topics: validTopics.map(topic => ({
        name: topic.name,
        allocatedTime: parseFloat(topic.allocatedTime),
        day: topic.day || 'Monday',
        priority: topic.priority || 'Medium',
        completed: false
      })),
      active: true
    };
    
    onAddSubject(newSubject);
    onClose();
  };

  const handleTopicChange = (index, field, value) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = {
      ...updatedTopics[index],
      [field]: value
    };
    setTopics(updatedTopics);
  };

  const addTopic = () => {
    setTopics([...topics, { name: '', allocatedTime: '', day: 'Monday', priority: 'Medium' }]);
  };

  const removeTopic = (index) => {
    const updatedTopics = topics.filter((_, i) => i !== index);
    setTopics(updatedTopics);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add New Subject</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Subject Name</Label>
            <Input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Topics</Label>
            {topics.map((topic, index) => (
              <TopicItem key={index}>
                <Input
                  type="text"
                  placeholder="Topic name"
                  value={topic.name}
                  onChange={(e) => handleTopicChange(index, 'name', e.target.value)}
                  required
                  style={{ minWidth: '100px', flex: '1 1 100px' }}
                />
                <Input
                  type="number"
                  placeholder="Hours"
                  value={topic.allocatedTime}
                  onChange={(e) => handleTopicChange(index, 'allocatedTime', e.target.value)}
                  required
                  min="0"
                  step="0.5"
                  style={{ width: '60px' }}
                />
                <Select
                  value={topic.day}
                  onChange={e => handleTopicChange(index, 'day', e.target.value)}
                  required
                  style={{ minWidth: '100px', flex: '1 1 100px' }}
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </Select>
                <Select
                  value={topic.priority}
                  onChange={e => handleTopicChange(index, 'priority', e.target.value)}
                  required
                  style={{ minWidth: '100px', flex: '1 1 100px' }}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
                {topics.length > 1 && (
                  <RemoveTopicButton onClick={() => removeTopic(index)}>
                    ×
                  </RemoveTopicButton>
                )}
              </TopicItem>
            ))}
            <Button type="button" onClick={addTopic}>
              Add Topic
            </Button>
          </FormGroup>
          
          {error && (
            <div style={{ color: '#e74c3c', marginBottom: '1rem', fontWeight: 500 }}>
              {error}
            </div>
          )}
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <Button type="submit">
              Add Subject
            </Button>
          </div>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Edit Subject Modal
export const EditSubjectModal = ({ isOpen, onClose, subject, onEditSubject }) => {
  const [subjectName, setSubjectName] = useState('');
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (subject) {
      setSubjectName(subject.name);
      setTopics(subject.topics.map(t => ({
        ...t,
        day: t.day || 'Monday',
        priority: t.priority || 'Medium',
      })));
    }
  }, [subject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSubject = {
      ...subject,
      name: subjectName,
      topics: topics.map(topic => ({
        ...topic,
        allocatedTime: parseFloat(topic.allocatedTime),
        day: topic.day || 'Monday',
        priority: topic.priority || 'Medium',
      }))
    };
    onEditSubject(updatedSubject);
    onClose();
  };

  const handleTopicChange = (index, field, value) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = {
      ...updatedTopics[index],
      [field]: value
    };
    setTopics(updatedTopics);
  };

  const addTopic = () => {
    setTopics([...topics, { name: '', allocatedTime: '', day: 'Monday', priority: 'Medium', completed: false }]);
  };

  const removeTopic = (index) => {
    const updatedTopics = topics.filter((_, i) => i !== index);
    setTopics(updatedTopics);
  };

  if (!isOpen || !subject) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit Subject</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Subject Name</Label>
            <Input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Topics</Label>
            {topics.map((topic, index) => (
              <TopicItem key={index}>
                <Input
                  type="text"
                  placeholder="Topic name"
                  value={topic.name}
                  onChange={(e) => handleTopicChange(index, 'name', e.target.value)}
                  required
                  style={{ minWidth: '100px', flex: '1 1 100px' }}
                />
                <Input
                  type="number"
                  placeholder="Hours"
                  value={topic.allocatedTime}
                  onChange={(e) => handleTopicChange(index, 'allocatedTime', e.target.value)}
                  required
                  min="0"
                  step="0.5"
                  style={{ width: '60px' }}
                />
                <Select
                  value={topic.day}
                  onChange={e => handleTopicChange(index, 'day', e.target.value)}
                  required
                  style={{ minWidth: '100px', flex: '1 1 100px' }}
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </Select>
                <Select
                  value={topic.priority}
                  onChange={e => handleTopicChange(index, 'priority', e.target.value)}
                  required
                  style={{ minWidth: '100px', flex: '1 1 100px' }}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
                {topics.length > 1 && (
                  <RemoveTopicButton onClick={() => removeTopic(index)}>
                    ×
                  </RemoveTopicButton>
                )}
              </TopicItem>
            ))}
            <Button type="button" onClick={addTopic}>
              Add Topic
            </Button>
          </FormGroup>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <Button type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Delete Subject Modal
export const DeleteSubjectModal = ({ isOpen, onClose, subject, onConfirm }) => {
  if (!isOpen || !subject) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Delete Subject</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <p>Are you sure you want to delete "{subject.name}"? This action cannot be undone.</p>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <CancelButton onClick={onClose}>
            Cancel
          </CancelButton>
          <Button 
            onClick={() => {
              onConfirm(subject._id);
              onClose();
            }}
            style={{ backgroundColor: '#ff4444' }}
          >
            Delete
          </Button>
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Weekly Progress Modal
export const WeeklyProgressModal = ({ isOpen, onClose, subjects }) => {
  if (!isOpen) return null;

  // Calculate progress data
  const totalTopics = subjects.reduce((sum, subject) => sum + subject.topics.length, 0);
  const completedTopics = subjects.reduce((sum, subject) => 
    sum + subject.topics.filter(topic => topic.completed).length, 0
  );
  const completionPercentage = totalTopics > 0 
    ? Math.round((completedTopics / totalTopics) * 100) 
    : 0;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Weekly Progress</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>Overall Progress: {completionPercentage}%</h3>
          <div style={{ 
            width: '100%', 
            height: '20px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '10px',
            marginTop: '0.5rem'
          }}>
            <div style={{ 
              width: `${completionPercentage}%`, 
              height: '100%', 
              backgroundColor: '#4a90e2',
              borderRadius: '10px'
            }} />
          </div>
        </div>
        
        <div>
          <h3>Subject Progress</h3>
          {subjects.map(subject => {
            const completed = subject.topics.filter(topic => topic.completed).length;
            const total = subject.topics.length;
            const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
            
            return (
              <div key={subject._id} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{subject.name}</span>
                  <span>{percentage}%</span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '10px', 
                  backgroundColor: '#f0f0f0', 
                  borderRadius: '5px',
                  marginTop: '0.25rem'
                }}>
                  <div style={{ 
                    width: `${percentage}%`, 
                    height: '100%', 
                    backgroundColor: '#4a90e2',
                    borderRadius: '5px'
                  }} />
                </div>
              </div>
            );
          })}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <Button onClick={onClose}>
            Close
          </Button>
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};