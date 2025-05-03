// Dashboard.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import TaskModal from './TaskModal';
import { useNavigate } from 'react-router-dom';
import AnimatedContainer from '../common/AnimatedContainer';

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

const SearchBar = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? '#6c5ce7' : 'transparent'};
  color: ${props => props.active ? 'white' : '#6c5ce7'};
  border: 1px solid #6c5ce7;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#5a4ad1' : '#f0f0ff'};
  }
`;

const PriorityBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 0.5rem;
  background-color: ${props => {
    switch (props.priority) {
      case 'high':
        return '#ff6b6b';
      case 'medium':
        return '#ffd93d';
      case 'low':
        return '#6c5ce7';
      default:
        return '#ddd';
    }
  }};
  color: ${props => props.priority === 'medium' ? '#333' : 'white'};
`;

const DetailsModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const DetailsModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DetailsModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const DetailsModalTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const DetailsCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  &:hover { color: #333; }
`;

const DetailsModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <DetailsModalOverlay>
      <DetailsModalContainer>
        <DetailsModalHeader>
          <DetailsModalTitle>{title}</DetailsModalTitle>
          <DetailsCloseButton onClick={onClose}>&times;</DetailsCloseButton>
        </DetailsModalHeader>
        {children}
      </DetailsModalContainer>
    </DetailsModalOverlay>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [detailsModal, setDetailsModal] = useState(null);
  
  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), createdAt: new Date().toISOString() }]);
  };
  
  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || 
      (filter === 'completed' && task.completed) ||
      (filter === 'active' && !task.completed);
    return matchesSearch && matchesFilter;
  });
  
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
  
  const handleQuickAccess = (action) => {
    switch (action) {
      case 'study':
        navigate('/pomodoro');
        break;
      case 'quiz':
        navigate('/quizzes');
        break;
      case 'ai':
        navigate('/ai-qna');
        break;
      default:
        break;
    }
  };
  
  const calculateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    
    const weeklyTasks = tasks.filter(task => {
      if (!task.dueDate) return false;
      const taskDate = new Date(task.dueDate);
      return taskDate >= weekStart && taskDate <= weekEnd;
    });
    
    const completedWeeklyTasks = weeklyTasks.filter(task => task.completed).length;
    
    return {
      completionRate,
      weeklyTasks: weeklyTasks.length,
      completedWeeklyTasks
    };
  };
  
  const progress = calculateProgress();
  
  return (
    <>
      <Navbar isLoggedIn={true} />
      <DashboardContainer>
        <AnimatedContainer delay="0.05s">
          <DashboardHeader>Dashboard</DashboardHeader>
        </AnimatedContainer>
        <AnimatedContainer delay="0.1s">
          <QuickAccessGrid>
            <QuickAccessCard>
              <CardLabel>QUICK ACCESS</CardLabel>
              <CardTitle>Start Study Session</CardTitle>
              <CardDescription>Begin a focused study session with your current materials</CardDescription>
              <CardButton onClick={() => handleQuickAccess('study')}>Start Now</CardButton>
            </QuickAccessCard>
            
            <QuickAccessCard>
              <CardLabel>QUICK ACCESS</CardLabel>
              <CardTitle>Take a Quiz</CardTitle>
              <CardDescription>Test your knowledge with a quiz from your recent topics</CardDescription>
              <CardButton onClick={() => handleQuickAccess('quiz')}>Start Quiz</CardButton>
            </QuickAccessCard>
            
            <QuickAccessCard>
              <CardLabel>QUICK ACCESS</CardLabel>
              <CardTitle>Ask AI Assistant</CardTitle>
              <CardDescription>Get instant help with difficult concepts or homework</CardDescription>
              <CardButton onClick={() => handleQuickAccess('ai')}>Ask Question</CardButton>
            </QuickAccessCard>
          </QuickAccessGrid>
        </AnimatedContainer>
        <AnimatedContainer delay="0.15s">
          <SectionTitle>To-Do List</SectionTitle>
        </AnimatedContainer>
        <AnimatedContainer delay="0.2s">
          <TasksContainer>
            <TasksHeader>
              <div>
                <SectionTitle>Today's Tasks</SectionTitle>
                <TasksDescription>Manage your study tasks and track completion</TasksDescription>
              </div>
              <ButtonGroup>
                <AddTaskButton onClick={() => setIsTaskModalOpen(true)}>Add Task</AddTaskButton>
              </ButtonGroup>
            </TasksHeader>
            
            <SearchBar
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <FilterGroup>
              <FilterButton
                active={filter === 'all'}
                onClick={() => setFilter('all')}
              >
                All Tasks
              </FilterButton>
              <FilterButton
                active={filter === 'active'}
                onClick={() => setFilter('active')}
              >
                Active
              </FilterButton>
              <FilterButton
                active={filter === 'completed'}
                onClick={() => setFilter('completed')}
              >
                Completed
              </FilterButton>
            </FilterGroup>
            
            <TasksList>
              {sortedTasks.map(task => (
                <TaskItem key={task.id} style={{ opacity: task.completed ? 0.6 : 1 }}>
                  <TaskIcon>{task.icon}</TaskIcon>
                  <TaskContent>
                    <TaskTitle style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                      {task.title}
                      {task.priority && <PriorityBadge priority={task.priority}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </PriorityBadge>}
                    </TaskTitle>
                    <TaskDueDate>{task.dueDateLabel || task.dueDate}</TaskDueDate>
                  </TaskContent>
                  <TaskToggle>
                    <input 
                      type="checkbox" 
                      checked={task.completed}
                      onChange={() => handleToggleTask(task.id)}
                    />
                    <button 
                      onClick={() => handleDeleteTask(task.id)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#ff6b6b',
                        cursor: 'pointer',
                        marginLeft: '0.5rem'
                      }}
                    >
                      ×
                    </button>
                  </TaskToggle>
                </TaskItem>
              ))}
              
              {sortedTasks.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                  {searchQuery ? 'No tasks match your search.' : 'No tasks yet. Click "Add Task" to create your first task.'}
                </div>
              )}
            </TasksList>
          </TasksContainer>
        </AnimatedContainer>
        <AnimatedContainer delay="0.25s">
          <SectionTitle>Progress Tracker</SectionTitle>
        </AnimatedContainer>
        <AnimatedContainer delay="0.3s">
          <ProgressGrid>
            <ProgressCard>
              <ProgressIcon>📊</ProgressIcon>
              <ProgressTitle>Task Completion</ProgressTitle>
              <ProgressDescription>
                {progress.completionRate.toFixed(1)}% of all tasks completed
              </ProgressDescription>
              <ViewDetailsButton onClick={() => setDetailsModal('completion')}>View Details</ViewDetailsButton>
            </ProgressCard>
            
            <ProgressCard>
              <ProgressIcon>⏱️</ProgressIcon>
              <ProgressTitle>Weekly Progress</ProgressTitle>
              <ProgressDescription>
                {progress.completedWeeklyTasks} of {progress.weeklyTasks} tasks completed this week
              </ProgressDescription>
              <ViewDetailsButton onClick={() => setDetailsModal('weekly')}>View Details</ViewDetailsButton>
            </ProgressCard>
            
            <ProgressCard>
              <ProgressIcon>📈</ProgressIcon>
              <ProgressTitle>Productivity</ProgressTitle>
              <ProgressDescription>
                {progress.completedWeeklyTasks > 0 ? 'Great progress this week!' : 'Start completing tasks to see your progress'}
              </ProgressDescription>
              <ViewDetailsButton onClick={() => setDetailsModal('productivity')}>View Details</ViewDetailsButton>
            </ProgressCard>
          </ProgressGrid>
        </AnimatedContainer>
        <DetailsModal
          isOpen={!!detailsModal}
          onClose={() => setDetailsModal(null)}
          title={
            detailsModal === 'completion' ? 'Task Completion Details' :
            detailsModal === 'weekly' ? 'Weekly Progress Details' :
            detailsModal === 'productivity' ? 'Productivity Details' : ''
          }
        >
          {detailsModal === 'completion' && (
            <div>
              <p><b>Total Tasks:</b> {tasks.length}</p>
              <p><b>Completed Tasks:</b> {tasks.filter(t => t.completed).length}</p>
              <p><b>Completion Rate:</b> {progress.completionRate.toFixed(1)}%</p>
              <ul>
                {tasks.map(task => (
                  <li key={task.id} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                    {task.title} {task.completed ? '✅' : ''}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {detailsModal === 'weekly' && (
            <div>
              <p><b>Tasks Due This Week:</b> {progress.weeklyTasks}</p>
              <p><b>Completed This Week:</b> {progress.completedWeeklyTasks}</p>
              <ul>
                {tasks.filter(task => {
                  const today = new Date();
                  const weekStart = new Date(today);
                  weekStart.setDate(today.getDate() - today.getDay());
                  const weekEnd = new Date(weekStart);
                  weekEnd.setDate(weekStart.getDate() + 6);
                  const taskDate = new Date(task.dueDate);
                  return taskDate >= weekStart && taskDate <= weekEnd;
                }).map(task => (
                  <li key={task.id} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                    {task.title} {task.completed ? '✅' : ''}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {detailsModal === 'productivity' && (
            <div>
              <p><b>Productivity is measured by your weekly completions.</b></p>
              <p>{progress.completedWeeklyTasks > 0 ? 'Keep up the good work!' : 'Start completing tasks to boost your productivity.'}</p>
            </div>
          )}
        </DetailsModal>
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
