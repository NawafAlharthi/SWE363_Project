import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import { 
  AddSubjectModal, 
  EditSubjectModal, 
  DeleteSubjectModal, 
  WeeklyProgressModal 
} from './StudyPlanModals';
import StudyTimeDistributionChart from './StudyTimeDistributionChart';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const BreadcrumbLink = styled.a`
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #6c5ce7;
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 0.5rem;
  color: #666;
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const FeatureCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`;

const FeatureIcon = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Button = styled.button`
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

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SubjectTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  
  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

const SubjectTab = styled.button`
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

const SubjectCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  opacity: ${props => props.inactive ? 0.6 : 1};
`;

const SubjectIcon = styled.div`
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

const SubjectContent = styled.div`
  flex: 1;
`;

const SubjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
`;

const SubjectSessions = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const SubjectActions = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6c5ce7;
  cursor: pointer;
  margin-right: 1rem;
  
  &:hover {
    color: #5a4ad1;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + & {
    background-color: #6c5ce7;
  }
  
  input:checked + &:before {
    transform: translateX(24px);
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const ScheduleSection = styled.div`
  margin-top: 3rem;
`;

const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ScheduleTable = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const DaySection = styled.div`
  margin-bottom: 0.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const DaySectionHeader = styled.div`
  background-color: #f8f9ff;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    background-color: #f0f0ff;
  }
`;

const DaySectionTitle = styled.div`
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
`;

const ConflictWarning = styled.span`
  color: #e74c3c;
  margin-left: 1rem;
  font-size: 0.9rem;
`;

const DaySectionContent = styled.div`
  padding: 0.5rem 1rem;
  background-color: white;
`;

const SessionRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SessionCheckbox = styled.input`
  margin-right: 1rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #6c5ce7;
`;

const SessionSubject = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
`;

const PriorityIndicator = styled.span`
  margin-left: 0.5rem;
  color: ${props => 
    props.priority === 'High' ? '#e74c3c' : 
    props.priority === 'Medium' ? '#f39c12' : 
    '#27ae60'};
  font-weight: 500;
`;

const EmptySchedule = styled.div`
  padding: 2rem;
  text-align: center;
  color: #666;
  font-style: italic;
`;

const RecommendationsSection = styled.div`
  margin-top: 3rem;
`;

const RecommendationCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const RecommendationIcon = styled.div`
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

const RecommendationContent = styled.div`
  flex: 1;
`;

const RecommendationTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const RecommendationDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

// Progress panel components
const ProgressPanel = styled.div`
  margin-top: 1.5rem;
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  display: ${props => props.expanded ? 'block' : 'none'};
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: #e6e6ff;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: #6c5ce7;
  border-radius: 5px;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ProgressCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ProgressCardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const ProgressList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProgressListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProgressItemIcon = styled.span`
  margin-right: 0.5rem;
  color: ${props => props.completed ? '#6c5ce7' : '#ffa502'};
`;

const ProgressItemText = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

// Session card components
const SessionCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0ff;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0 0.5rem 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SessionContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const SessionDay = styled.div`
  font-weight: 600;
  color: #6c5ce7;
  margin-right: 1rem;
  width: 100px;
`;

const SessionDetails = styled.div`
  flex: 1;
`;

const SessionTopic = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const SessionInfo = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

const SessionActions = styled.div`
  display: flex;
  align-items: center;
`;

const StudyPlan = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // State for modals
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
  const [isEditSubjectModalOpen, setIsEditSubjectModalOpen] = useState(false);
  const [isDeleteSubjectModalOpen, setIsDeleteSubjectModalOpen] = useState(false);
  const [isWeeklyProgressModalOpen, setIsWeeklyProgressModalOpen] = useState(false);
  const [expandedProgress, setExpandedProgress] = useState(false);
  
  // State for expanded day sections
  const [expandedDays, setExpandedDays] = useState({
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
    Sunday: true
  });
  
  // State for subject being edited or deleted
  const [currentSubject, setCurrentSubject] = useState(null);
  
  // Sample data for subjects
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: 'Mathematics',
      icon: '∑',
      active: true,
      sessions: [
        { id: 1, day: 'Monday', duration: '2', topic: 'Calculus Ch. 5-6', priority: 'High', completed: true },
        { id: 2, day: 'Friday', duration: '1.5', topic: 'Practice Problems', priority: 'Medium', completed: false }
      ]
    },
    {
      id: 2,
      name: 'Physics',
      icon: '⚛️',
      active: true,
      sessions: [
        { id: 3, day: 'Wednesday', duration: '2', topic: 'Mechanics', priority: 'High', completed: true }
      ]
    },
    {
      id: 3,
      name: 'Computer Science',
      icon: '💻',
      active: true,
      sessions: [
        { id: 4, day: 'Tuesday', duration: '1.5', topic: 'Algorithms', priority: 'Medium', completed: false }
      ]
    },
    {
      id: 4,
      name: 'Literature',
      icon: '📚',
      active: true,
      sessions: [
        { id: 5, day: 'Thursday', duration: '1', topic: 'Essay Preparation', priority: 'Medium', completed: false }
      ]
    }
  ]);
  
  // Sample data for weekly progress
  const [progressData, setProgressData] = useState({
    completionPercentage: 68,
    dailyBreakdown: [
      { day: 'Monday', completed: 2, total: 2 },
      { day: 'Tuesday', completed: 1, total: 2 },
      { day: 'Wednesday', completed: 1, total: 1 },
      { day: 'Thursday', completed: 0, total: 1 },
      { day: 'Friday', completed: 1, total: 2 }
    ],
    subjectSummary: [
      { name: 'Mathematics', completed: 2, total: 2 },
      { name: 'Physics', completed: 1, total: 1 },
      { name: 'Computer Science', completed: 1, total: 2 },
      { name: 'Literature', completed: 0, total: 1 }
    ],
    missedSessions: [
      { day: 'Thursday', subject: 'Literature', topic: 'Essay Preparation', duration: '1' },
      { day: 'Friday', subject: 'Computer Science', topic: 'Data Structures', duration: '1.5' }
    ]
  });
  
  // Filtered subjects based on active tab
  const filteredSubjects = activeTab === 'all' 
    ? subjects 
    : subjects.filter(subject => subject.name.toLowerCase() === activeTab);
  
  // Function to handle adding a new subject
  const handleAddSubject = (newSubject) => {
    const subjectWithId = {
      id: Date.now(),
      icon: getSubjectIcon(newSubject.name),
      active: true,
      ...newSubject
    };
    
    setSubjects([...subjects, subjectWithId]);
    
    // Update schedule with new sessions
    updateSchedule([...subjects, subjectWithId]);
  };
  
  // Function to handle editing a subject
  const handleEditSubject = (updatedSubject) => {
    const updatedSubjects = subjects.map(subject => 
      subject.id === updatedSubject.id ? { ...subject, ...updatedSubject } : subject
    );
    
    setSubjects(updatedSubjects);
    
    // Update schedule with updated sessions
    updateSchedule(updatedSubjects);
  };
  
  // Function to handle deleting a subject
  const handleDeleteSubject = (subjectId) => {
    const updatedSubjects = subjects.filter(subject => subject.id !== subjectId);
    setSubjects(updatedSubjects);
    
    // Update schedule with remaining subjects
    updateSchedule(updatedSubjects);
  };
  
  // Function to handle toggling subject active state
  const handleToggleSubject = (subjectId) => {
    const updatedSubjects = subjects.map(subject => 
      subject.id === subjectId ? { ...subject, active: !subject.active } : subject
    );
    
    setSubjects(updatedSubjects);
    
    // Update schedule with updated active states
    updateSchedule(updatedSubjects);
  };
  
  // Function to handle toggling session completion status
  const handleToggleSession = (subjectId, sessionId) => {
    const updatedSubjects = subjects.map(subject => {
      if (subject.id === subjectId) {
        const updatedSessions = subject.sessions.map(session => 
          session.id === sessionId ? { ...session, completed: !session.completed } : session
        );
        return { ...subject, sessions: updatedSessions };
      }
      return subject;
    });
    
    setSubjects(updatedSubjects);
    
    // Update schedule with updated completion status
    updateSchedule(updatedSubjects);
  };
  
  // Function to update schedule based on subjects
  const updateSchedule = (updatedSubjects) => {
    // Get all active subjects
    const activeSubjects = updatedSubjects.filter(subject => subject.active);
    
    // Count total and completed sessions
    const allSessions = [];
    let completedSessions = 0;
    
    activeSubjects.forEach(subject => {
      subject.sessions.forEach(session => {
        allSessions.push({
          ...session,
          subject: subject.name
        });
        
        if (session.completed) {
          completedSessions++;
        }
      });
    });
    
    const totalSessions = allSessions.length;
    
    // Group sessions by day for daily breakdown
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dailyBreakdown = days.map(day => {
      const daySessions = allSessions.filter(session => session.day === day);
      const dayCompleted = daySessions.filter(session => session.completed).length;
      
      return {
        day,
        completed: dayCompleted,
        total: daySessions.length
      };
    }).filter(day => day.total > 0); // Only include days with sessions
    
    // Group sessions by subject for subject summary
    const subjectSummary = [];
    activeSubjects.forEach(subject => {
      const subjectSessions = subject.sessions;
      const subjectCompleted = subjectSessions.filter(session => session.completed).length;
      
      subjectSummary.push({
        name: subject.name,
        completed: subjectCompleted,
        total: subjectSessions.length
      });
    });
    
    // Find missed/pending sessions
    const missedSessions = allSessions
      .filter(session => !session.completed)
      .map(session => ({
        day: session.day,
        subject: session.subject,
        topic: session.topic,
        duration: session.duration
      }));
    
    // Update progress data
    setProgressData({
      completionPercentage: totalSessions > 0 ? Math.floor((completedSessions / totalSessions) * 100) : 0,
      dailyBreakdown,
      subjectSummary,
      missedSessions
    });
  };
  
  // Function to get an icon for a subject based on its name
  const getSubjectIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('math')) return '∑';
    if (lowerName.includes('physics')) return '⚛️';
    if (lowerName.includes('computer') || lowerName.includes('programming')) return '💻';
    if (lowerName.includes('literature') || lowerName.includes('english')) return '📚';
    if (lowerName.includes('history')) return '🏛️';
    if (lowerName.includes('chemistry')) return '🧪';
    if (lowerName.includes('biology')) return '🧬';
    return '📘';
  };
  
  // Function to check for schedule conflicts
  const checkForConflicts = (day, sessions) => {
    const daySessions = sessions.filter(session => session.day === day);
    
    // Check for conflicts (simplified version)
    return daySessions.length > 1;
  };
  
  // Generate schedule data grouped by day
  const generateScheduleData = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const scheduleData = {};
    
    days.forEach(day => {
      const daySessions = [];
      
      // Collect all sessions for this day from active subjects
      subjects.forEach(subject => {
        if (subject.active) {
          subject.sessions.forEach(session => {
            if (session.day === day) {
              daySessions.push({
                ...session,
                subject: subject.name,
                subjectId: subject.id,
                icon: subject.icon
              });
            }
          });
        }
      });
      
      // Only add days that have sessions
      if (daySessions.length > 0) {
        scheduleData[day] = {
          sessions: daySessions,
          hasConflict: checkForConflicts(day, daySessions)
        };
      }
    });
    
    return scheduleData;
  };
  
  // Functions for day section expansion
  const toggleDayExpanded = (day) => {
    setExpandedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };
  
  const isDayExpanded = (day) => {
    return expandedDays[day] === true;
  };
  
  // Get schedule data
  const scheduleData = generateScheduleData();
  
  return (
    <>
      <Navbar isLoggedIn={true} />
      <Container>
        <Breadcrumbs>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          <BreadcrumbSeparator>›</BreadcrumbSeparator>
          <BreadcrumbLink href="/study-plan">Study Plan</BreadcrumbLink>
        </Breadcrumbs>
        
        <PageTitle>Your Study Plan</PageTitle>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>📋</FeatureIcon>
            <FeatureTitle>Subject Selection</FeatureTitle>
            <FeatureDescription>Choose subjects to include in your study plan</FeatureDescription>
            <Button onClick={() => setIsAddSubjectModalOpen(true)}>Add Subject</Button>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📈</FeatureIcon>
            <FeatureTitle>Weekly Progress</FeatureTitle>
            <FeatureDescription>You've completed {progressData.completionPercentage}% of your planned sessions this week</FeatureDescription>
            <Button onClick={() => setExpandedProgress(!expandedProgress)}>
              {expandedProgress ? 'Hide Details' : 'View Details'}
            </Button>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Study Time Distribution</FeatureTitle>
            <FeatureDescription>View how your study time is distributed across subjects</FeatureDescription>
            <div style={{ width: '100%', height: '220px', marginTop: '10px' }}>
              <StudyTimeDistributionChart subjects={subjects} />
            </div>
          </FeatureCard>
        </FeaturesGrid>
        
        {/* Expandable Progress Panel */}
        <ProgressPanel expanded={expandedProgress}>
          <ProgressBar>
            <ProgressFill percentage={progressData.completionPercentage} />
          </ProgressBar>
          
          <ProgressGrid>
            <ProgressCard>
              <ProgressCardTitle>Daily Breakdown</ProgressCardTitle>
              <ProgressList>
                {progressData.dailyBreakdown.map((day, index) => (
                  <ProgressListItem key={index}>
                    <ProgressItemIcon completed={day.completed === day.total}>
                      {day.completed === day.total ? '✅' : '⏳'}
                    </ProgressItemIcon>
                    <ProgressItemText>
                      {day.day}: {day.completed}/{day.total} sessions completed
                    </ProgressItemText>
                  </ProgressListItem>
                ))}
              </ProgressList>
            </ProgressCard>
            
            <ProgressCard>
              <ProgressCardTitle>Subject Summary</ProgressCardTitle>
              <ProgressList>
                {progressData.subjectSummary.map((subject, index) => (
                  <ProgressListItem key={index}>
                    <ProgressItemIcon completed={subject.completed === subject.total}>
                      {subject.completed === subject.total ? '✅' : '⏳'}
                    </ProgressItemIcon>
                    <ProgressItemText>
                      {subject.name}: {subject.completed}/{subject.total} sessions
                    </ProgressItemText>
                  </ProgressListItem>
                ))}
              </ProgressList>
            </ProgressCard>
            
            <ProgressCard>
              <ProgressCardTitle>Missed/Pending Sessions</ProgressCardTitle>
              <ProgressList>
                {progressData.missedSessions.map((session, index) => (
                  <ProgressListItem key={index}>
                    <ProgressItemIcon completed={false}>⏳</ProgressItemIcon>
                    <ProgressItemText>
                      {session.day}'s {session.subject} - {session.topic}
                    </ProgressItemText>
                  </ProgressListItem>
                ))}
              </ProgressList>
            </ProgressCard>
          </ProgressGrid>
        </ProgressPanel>
        
        <SectionTitle>Active Subjects</SectionTitle>
        
        <SubjectTabs>
          <SubjectTab 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All Subjects
          </SubjectTab>
          {subjects.map(subject => (
            <SubjectTab 
              key={subject.id}
              active={activeTab === subject.name.toLowerCase()} 
              onClick={() => setActiveTab(subject.name.toLowerCase())}
            >
              {subject.name}
            </SubjectTab>
          ))}
        </SubjectTabs>
        
        {filteredSubjects.map(subject => (
          <div key={subject.id}>
            <SubjectCard inactive={!subject.active}>
              <SubjectIcon>{subject.icon}</SubjectIcon>
              <SubjectContent>
                <SubjectTitle>{subject.name}</SubjectTitle>
                <SubjectSessions>
                  {subject.sessions.length} session{subject.sessions.length !== 1 ? 's' : ''} scheduled this week
                </SubjectSessions>
              </SubjectContent>
              <SubjectActions>
                <ActionButton 
                  onClick={() => {
                    setCurrentSubject(subject);
                    setIsEditSubjectModalOpen(true);
                  }}
                  title="Edit Subject"
                >
                  ✏️
                </ActionButton>
                <ActionButton 
                  onClick={() => {
                    setCurrentSubject(subject);
                    setIsDeleteSubjectModalOpen(true);
                  }}
                  title="Delete Subject"
                >
                  🗑️
                </ActionButton>
                <Tooltip>
                  <ToggleSwitch>
                    <input 
                      type="checkbox" 
                      checked={subject.active} 
                      onChange={() => handleToggleSubject(subject.id)} 
                    />
                    <Slider />
                  </ToggleSwitch>
                  <TooltipText className="tooltiptext">
                    Toggle to {subject.active ? 'exclude' : 'include'} this subject from your schedule
                  </TooltipText>
                </Tooltip>
              </SubjectActions>
            </SubjectCard>
            
            {/* Show individual sessions when a specific subject is selected */}
            {activeTab !== 'all' && subject.sessions.map(session => (
              <SessionCard key={session.id}>
                <SessionContent>
                  <SessionDay>{session.day}</SessionDay>
                  <SessionDetails>
                    <SessionTopic>{session.topic}</SessionTopic>
                    <SessionInfo>
                      {session.duration} hours • {session.priority} Priority
                    </SessionInfo>
                  </SessionDetails>
                </SessionContent>
                <SessionActions>
                  <Tooltip>
                    <ToggleSwitch>
                      <input 
                        type="checkbox" 
                        checked={session.completed} 
                        onChange={() => handleToggleSession(subject.id, session.id)} 
                      />
                      <Slider />
                    </ToggleSwitch>
                    <TooltipText className="tooltiptext">
                      Mark as {session.completed ? 'incomplete' : 'completed'}
                    </TooltipText>
                  </Tooltip>
                </SessionActions>
              </SessionCard>
            ))}
          </div>
        ))}
        
        <ScheduleSection>
          <ScheduleHeader>
            <SectionTitle>Weekly Study Schedule</SectionTitle>
          </ScheduleHeader>
          
          <ScheduleTable>
            {Object.entries(scheduleData).map(([day, data]) => (
              <DaySection key={day}>
                <DaySectionHeader onClick={() => toggleDayExpanded(day)}>
                  <DaySectionTitle>
                    {isDayExpanded(day) ? '▼' : '►'} {day} ({data.sessions.length} sessions)
                    {data.hasConflict && <ConflictWarning>⚠️ Conflict</ConflictWarning>}
                  </DaySectionTitle>
                </DaySectionHeader>
                
                {isDayExpanded(day) && (
                  <DaySectionContent>
                    {data.sessions.map((session) => (
                      <SessionRow key={session.id}>
                        <SessionCheckbox 
                          type="checkbox" 
                          checked={session.completed}
                          onChange={() => handleToggleSession(session.subjectId, session.id)}
                        />
                        <SessionSubject>
                          {session.subject} | {session.duration}h | {session.topic} | 
                          <PriorityIndicator priority={session.priority}>
                            {session.priority === 'High' ? '🔴' : 
                             session.priority === 'Medium' ? '🟡' : '🟢'} {session.priority}
                          </PriorityIndicator>
                        </SessionSubject>
                      </SessionRow>
                    ))}
                  </DaySectionContent>
                )}
              </DaySection>
            ))}
            
            {Object.keys(scheduleData).length === 0 && (
              <EmptySchedule>
                No sessions scheduled. Add subjects and sessions to see your schedule.
              </EmptySchedule>
            )}
          </ScheduleTable>
        </ScheduleSection>
        
        <RecommendationsSection>
          <SectionTitle>AI Study Recommendations</SectionTitle>
          
          <RecommendationCard>
            <RecommendationIcon>🔄</RecommendationIcon>
            <RecommendationContent>
              <RecommendationTitle>Spaced Repetition</RecommendationTitle>
              <RecommendationDescription>
                Based on your learning patterns, we recommend reviewing calculus concepts every 3 days to improve retention.
              </RecommendationDescription>
            </RecommendationContent>
          </RecommendationCard>
          
          <RecommendationCard>
            <RecommendationIcon>⏱️</RecommendationIcon>
            <RecommendationContent>
              <RecommendationTitle>Focus Time</RecommendationTitle>
              <RecommendationDescription>
                Your productivity peaks in the morning. Consider scheduling difficult subjects like Physics before noon.
              </RecommendationDescription>
            </RecommendationContent>
          </RecommendationCard>
        </RecommendationsSection>
      </Container>
      
      {/* Modals */}
      <AddSubjectModal 
        isOpen={isAddSubjectModalOpen} 
        onClose={() => setIsAddSubjectModalOpen(false)} 
        onSubmit={handleAddSubject}
        existingSubjects={subjects}
      />
      
      <EditSubjectModal 
        isOpen={isEditSubjectModalOpen} 
        onClose={() => setIsEditSubjectModalOpen(false)} 
        subject={currentSubject} 
        onSubmit={handleEditSubject} 
      />
      
      <DeleteSubjectModal 
        isOpen={isDeleteSubjectModalOpen} 
        onClose={() => setIsDeleteSubjectModalOpen(false)} 
        subject={currentSubject} 
        onConfirm={handleDeleteSubject} 
      />
      
      <WeeklyProgressModal 
        isOpen={isWeeklyProgressModalOpen} 
        onClose={() => setIsWeeklyProgressModalOpen(false)} 
        progressData={progressData} 
      />
    </>
  );
};

export default StudyPlan;

