// Dashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import TaskModal from './TaskModal';

const DashboardContainer = styled.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const DashboardHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`;

const QuickAccessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const QuickAccessCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`;

const CardLabel = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const CardButton = styled.button`
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

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

const TasksContainer = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
`;

const TasksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TasksDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const AddTaskButton = styled.button`
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

const ViewAllButton = styled.button`
  background-color: transparent;
  color: #6c5ce7;
  border: 1px solid #6c5ce7;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f0f0ff;
  }
`;

const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TaskIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1rem;
`;

const TaskContent = styled.div`
  flex: 1;
`;

const TaskTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #333;
`;

const TaskDueDate = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const TaskToggle = styled.div`
  width: 3rem;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const ProgressCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`;

const ProgressIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1rem;
`;

const ProgressTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProgressDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ViewDetailsButton = styled.button`
  background-color: transparent;
  color: #6c5ce7;
  border: none;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #5a4ad1;
  }
`;

const Dashboard = () => {
  // State for tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Physics Problem Set',
      dueDate: 'Due today at 5:00 PM',
      icon: '📝',
      completed: false
    },
    {
      id: 2,
      title: 'Review Biology Notes',
      dueDate: 'Due tomorrow at 9:00 AM',
      icon: '📚',
      completed: false
    },
    {
      id: 3,
      title: 'Prepare for History Presentation',
      dueDate: 'Due in 3 days',
      icon: '🎭',
      completed: false
    }
  ]);
  
  // State for task modal
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  
  // Function to add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  // Function to toggle task completion
  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  return (
    <>
      <Navbar isLoggedIn={true} />
      <DashboardContainer>
        <DashboardHeader>Dashboard</DashboardHeader>
        
        <QuickAccessGrid>
          <QuickAccessCard>
            <CardLabel>QUICK ACCESS</CardLabel>
            <CardTitle>Start Study Session</CardTitle>
            <CardDescription>Begin a focused study session with your current materials</CardDescription>
            <CardButton>Start Now</CardButton>
          </QuickAccessCard>
          
          <QuickAccessCard>
            <CardLabel>QUICK ACCESS</CardLabel>
            <CardTitle>Take a Quiz</CardTitle>
            <CardDescription>Test your knowledge with a quiz from your recent topics</CardDescription>
            <CardButton>Start Quiz</CardButton>
          </QuickAccessCard>
          
          <QuickAccessCard>
            <CardLabel>QUICK ACCESS</CardLabel>
            <CardTitle>Ask AI Assistant</CardTitle>
            <CardDescription>Get instant help with difficult concepts or homework</CardDescription>
            <CardButton>Ask Question</CardButton>
          </QuickAccessCard>
        </QuickAccessGrid>
        
        <SectionTitle>To-Do List</SectionTitle>
        <TasksContainer>
          <TasksHeader>
            <div>
              <SectionTitle>Today's Tasks</SectionTitle>
              <TasksDescription>Manage your study tasks and track completion</TasksDescription>
            </div>
            <ButtonGroup>
              <AddTaskButton onClick={() => setIsTaskModalOpen(true)}>Add Task</AddTaskButton>
              <ViewAllButton>View All</ViewAllButton>
            </ButtonGroup>
          </TasksHeader>
          
          <TasksList>
            {tasks.map(task => (
              <TaskItem key={task.id} style={{ opacity: task.completed ? 0.6 : 1 }}>
                <TaskIcon>{task.icon}</TaskIcon>
                <TaskContent>
                  <TaskTitle style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                  </TaskTitle>
                  <TaskDueDate>{task.dueDate}</TaskDueDate>
                </TaskContent>
                <TaskToggle>
                  <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                  />
                </TaskToggle>
              </TaskItem>
            ))}
            
            {tasks.length === 0 && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                No tasks yet. Click "Add Task" to create your first task.
              </div>
            )}
          </TasksList>
        </TasksContainer>
        
        <SectionTitle>Progress Tracker</SectionTitle>
        <ProgressGrid>
          <ProgressCard>
            <ProgressIcon>📊</ProgressIcon>
            <ProgressTitle>Quiz Completion</ProgressTitle>
            <ProgressDescription>You've completed 8 of 10 quizzes this week</ProgressDescription>
            <ViewDetailsButton>View Details</ViewDetailsButton>
          </ProgressCard>
          
          <ProgressCard>
            <ProgressIcon>⏱️</ProgressIcon>
            <ProgressTitle>Study Sessions</ProgressTitle>
            <ProgressDescription>12 hours of focused study time this week</ProgressDescription>
            <ViewDetailsButton>View Details</ViewDetailsButton>
          </ProgressCard>
          
          <ProgressCard>
            <ProgressIcon>📈</ProgressIcon>
            <ProgressTitle>Pomodoro Cycles</ProgressTitle>
            <ProgressDescription>Completed 24 Pomodoro cycles this week</ProgressDescription>
            <ViewDetailsButton>View Details</ViewDetailsButton>
          </ProgressCard>
        </ProgressGrid>
        
        {/* Task Modal */}
        <TaskModal 
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          onAddTask={handleAddTask}
        />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
