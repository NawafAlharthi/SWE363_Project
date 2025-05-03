// TaskModal.js
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

const PrioritySelect = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const PriorityOption = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${props => props.selected ? '#6c5ce7' : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.selected ? '#5a4ad1' : '#f0f0ff'};
  }
`;

const TaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskType, setTaskType] = useState('📝');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [priority, setPriority] = useState('medium');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (taskTitle.trim()) {
      // Format due date text
      let dueDateText = 'No due date';
      
      if (dueDate) {
        const today = new Date().toISOString().split('T')[0];
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        
        if (dueDate === today) {
          dueDateText = `Due today`;
        } else if (dueDate === tomorrowStr) {
          dueDateText = `Due tomorrow`;
        } else {
          // Calculate days difference
          const diffTime = new Date(dueDate) - new Date(today);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          dueDateText = `Due in ${diffDays} days`;
        }
        
        if (dueTime) {
          dueDateText += ` at ${dueTime}`;
        }
      }
      
      onAddTask({
        id: Date.now(),
        title: taskTitle,
        dueDate: dueDate || '',
        dueDateLabel: dueDateText,
        icon: taskType,
        completed: false,
        priority,
        createdAt: new Date().toISOString()
      });
      
      // Reset form
      setTaskTitle('');
      setTaskType('📝');
      setDueDate('');
      setDueTime('');
      setPriority('medium');
      
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add New Task</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="taskTitle">Task Title</Label>
            <Input
              id="taskTitle"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="e.g., Complete Physics Problem Set"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="taskType">Task Type</Label>
            <Select
              id="taskType"
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
            >
              <option value="📝">📝 Assignment</option>
              <option value="📚">📚 Reading</option>
              <option value="🎭">🎭 Presentation</option>
              <option value="🧪">🧪 Lab Work</option>
              <option value="📊">📊 Project</option>
              <option value="📌">📌 Other</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Priority</Label>
            <PrioritySelect>
              <PriorityOption
                type="button"
                selected={priority === 'high'}
                onClick={() => setPriority('high')}
              >
                High
              </PriorityOption>
              <PriorityOption
                type="button"
                selected={priority === 'medium'}
                onClick={() => setPriority('medium')}
              >
                Medium
              </PriorityOption>
              <PriorityOption
                type="button"
                selected={priority === 'low'}
                onClick={() => setPriority('low')}
              >
                Low
              </PriorityOption>
            </PrioritySelect>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="dueTime">Due Time (Optional)</Label>
            <Input
              id="dueTime"
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="button" secondary onClick={onClose}>Cancel</Button>
            <Button type="submit">Add Task</Button>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default TaskModal;
