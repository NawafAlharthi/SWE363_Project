import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import axios from 'axios';
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
  const [subjects, setSubjects] = useState([]);
  const [activeSubject, setActiveSubject] = useState(null);
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
  const [isEditSubjectModalOpen, setIsEditSubjectModalOpen] = useState(false);
  const [isDeleteSubjectModalOpen, setIsDeleteSubjectModalOpen] = useState(false);
  const [isWeeklyProgressModalOpen, setIsWeeklyProgressModalOpen] = useState(false);
  const [selectedSubjectForEdit, setSelectedSubjectForEdit] = useState(null);
  const [selectedSubjectForDelete, setSelectedSubjectForDelete] = useState(null);
  const [expandedDays, setExpandedDays] = useState(new Set());
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProgress, setExpandedProgress] = useState(false);
  const [currentSubject, setCurrentSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5001/api/studyplans');
      setSubjects(response.data.subjects || []);
    } catch (err) {
      setError('Failed to load study plan');
      setSubjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSubject = async (subject) => {
    setError(null);
    try {
      const response = await axios.post('http://localhost:5001/api/studyplans/add', { subject });
      setSubjects(prev => [response.data, ...prev]);
    } catch (err) {
      setError('Failed to add subject');
    }
  };

  const handleEditSubject = async (updatedSubject) => {
    setError(null);
    try {
      const response = await axios.put(`http://localhost:5001/api/studyplans/${updatedSubject._id}`, { subject: updatedSubject });
      setSubjects(prev => prev.map(s => s._id === updatedSubject._id ? response.data : s));
    } catch (err) {
      setError('Failed to update subject');
    }
  };

  const handleDeleteSubject = async (subjectId) => {
    setError(null);
    try {
      await axios.delete(`http://localhost:5001/api/studyplans/${subjectId}`);
      setSubjects(prev => prev.filter(s => s._id !== subjectId));
    } catch (err) {
      setError('Failed to delete subject');
    }
  };

  // Filtered subjects based on active tab
  const filteredSubjects = activeTab === 'all' 
    ? subjects 
    : subjects.filter(subject => subject.name.toLowerCase() === activeTab);

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

  // Functions for day section expansion
  const toggleDayExpanded = (day) => {
    setExpandedDays(prev => {
      const newSet = new Set(prev);
      if (prev.has(day)) {
        newSet.delete(day);
      } else {
        newSet.add(day);
      }
      return newSet;
    });
  };

  const isDayExpanded = (day) => {
    return expandedDays.has(day);
  };

  // Group topics by day
  const getScheduleByDay = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const schedule = {};
    subjects.forEach(subject => {
      subject.topics.forEach(topic => {
        if (!schedule[topic.day]) schedule[topic.day] = [];
        schedule[topic.day].push({
          ...topic,
          subjectName: subject.name,
          subjectId: subject._id,
        });
      });
    });
    // Only include days with sessions
    return days.reduce((acc, day) => {
      if (schedule[day] && schedule[day].length > 0) acc[day] = schedule[day];
      return acc;
    }, {});
  };

  // Handler to toggle session completion
  const handleToggleSession = async (subjectId, topicId) => {
    setError(null);
    try {
      const response = await axios.patch(`http://localhost:5001/api/studyplans/${subjectId}/topics/${topicId}/toggle`);
      // Update local state
      setSubjects(prev => prev.map(subject =>
        subject._id === subjectId
          ? {
              ...subject,
              topics: subject.topics.map(topic =>
                topic._id === topicId ? { ...topic, completed: response.data.completed } : topic
              )
            }
          : subject
      ));
    } catch (err) {
      setError('Failed to toggle session completion');
    }
  };

  // UI for Weekly Study Schedule
  const scheduleByDay = getScheduleByDay();

  // Compute weekly progress stats
  const computeWeeklyProgress = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let totalSessions = 0;
    let completedSessions = 0;
    const dailyBreakdown = days.map(day => {
      let dayTotal = 0;
      let dayCompleted = 0;
      subjects.forEach(subject => {
        subject.topics.forEach(topic => {
          if (topic.day === day) {
            dayTotal++;
            if (topic.completed) dayCompleted++;
          }
        });
      });
      totalSessions += dayTotal;
      completedSessions += dayCompleted;
      return { day, completed: dayCompleted, total: dayTotal };
    }).filter(d => d.total > 0);

    const subjectSummary = subjects.map(subject => {
      const total = subject.topics.length;
      const completed = subject.topics.filter(t => t.completed).length;
      return { name: subject.name, completed, total };
    });

    const missedSessions = [];
    subjects.forEach(subject => {
      subject.topics.forEach(topic => {
        if (!topic.completed) {
          missedSessions.push({
            day: topic.day,
            subject: subject.name,
            topic: topic.name,
            duration: topic.allocatedTime,
            priority: topic.priority
          });
        }
      });
    });

    const completionPercentage = totalSessions > 0 ? Math.round((completedSessions / totalSessions) * 100) : 0;
    return { completionPercentage, dailyBreakdown, subjectSummary, missedSessions };
  };

  const progressData = computeWeeklyProgress();

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Container>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
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
                <FeatureDescription>Track your study progress and completion</FeatureDescription>
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
            
            {/* Expandable Weekly Progress Panel */}
            <ProgressPanel expanded={expandedProgress}>
              <ProgressBar>
                <ProgressFill percentage={progressData.completionPercentage} />
              </ProgressBar>
              <ProgressGrid>
                <ProgressCard>
                  <ProgressCardTitle>Daily Breakdown</ProgressCardTitle>
                  <ProgressList>
                    {progressData.dailyBreakdown.map((day, idx) => (
                      <ProgressListItem key={idx}>
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
                    {progressData.subjectSummary.map((subject, idx) => (
                      <ProgressListItem key={idx}>
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
                    {progressData.missedSessions.length === 0 && (
                      <ProgressListItem>
                        <ProgressItemText>🎉 No missed sessions!</ProgressItemText>
                      </ProgressListItem>
                    )}
                    {progressData.missedSessions.map((session, idx) => (
                      <ProgressListItem key={idx}>
                        <ProgressItemIcon completed={false}>⏳</ProgressItemIcon>
                        <ProgressItemText>
                          {session.day}'s {session.subject} - {session.topic} ({session.duration}h, {session.priority})
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
                  key={subject._id}
                  active={activeTab === subject.name.toLowerCase()} 
                  onClick={() => setActiveTab(subject.name.toLowerCase())}
                >
                  {subject.name}
                </SubjectTab>
              ))}
            </SubjectTabs>
            
            {filteredSubjects.map(subject => {
              return (
                <div key={subject._id}>
                  <SubjectCard inactive={!subject.active}>
                    <SubjectIcon>{getSubjectIcon(subject.name)}</SubjectIcon>
                    <SubjectContent>
                      <SubjectTitle>{subject.name}</SubjectTitle>
                      <SubjectSessions>
                        {subject.topics.length} topic{subject.topics.length !== 1 ? 's' : ''} scheduled
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
                    </SubjectActions>
                  </SubjectCard>
                </div>
              );
            })}
          </>
        )}
        <SectionTitle>Weekly Study Schedule</SectionTitle>
        {Object.keys(scheduleByDay).length === 0 && (
          <EmptySchedule>No sessions scheduled. Add subjects and topics to see your schedule.</EmptySchedule>
        )}
        {Object.entries(scheduleByDay).map(([day, sessions]) => (
          <DaySection key={day}>
            <DaySectionHeader onClick={() => toggleDayExpanded(day)}>
              <DaySectionTitle>
                {isDayExpanded(day) ? '▼' : '►'} {day} ({sessions.length} session{sessions.length !== 1 ? 's' : ''})
              </DaySectionTitle>
            </DaySectionHeader>
            {isDayExpanded(day) && (
              <DaySectionContent>
                {sessions.map(session => (
                  <SessionRow key={session._id}>
                    <SessionCheckbox
                      type="checkbox"
                      checked={session.completed}
                      onChange={() => handleToggleSession(session.subjectId, session._id)}
                    />
                    <SessionSubject>
                      {session.subjectName} | {session.allocatedTime}h | {session.name} |{' '}
                      <PriorityIndicator priority={session.priority}>
                        {session.priority === 'High' ? '🔴' : session.priority === 'Medium' ? '🟡' : '🟢'} {session.priority}
                      </PriorityIndicator>
                    </SessionSubject>
                  </SessionRow>
                ))}
              </DaySectionContent>
            )}
          </DaySection>
        ))}
      </Container>
      
      {/* Modals */}
      <AddSubjectModal 
        isOpen={isAddSubjectModalOpen} 
        onClose={() => setIsAddSubjectModalOpen(false)} 
        onAddSubject={handleAddSubject}
      />
      
      <EditSubjectModal 
        isOpen={isEditSubjectModalOpen} 
        onClose={() => setIsEditSubjectModalOpen(false)} 
        subject={currentSubject} 
        onEditSubject={handleEditSubject} 
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
        subjects={subjects}
      />
    </>
  );
};

export default StudyPlan;
