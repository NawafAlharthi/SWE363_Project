import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import AnimatedContainer from '../common/AnimatedContainer';
import axios from 'axios';
import { 
  AddSubjectModal, 
  EditSubjectModal, 
  DeleteSubjectModal, 
  WeeklyProgressModal 
} from './StudyPlanModals';
import StudyTimeDistributionChart from './StudyTimeDistributionChart';
import * as S from './StudyPlan.styles';
import api from '../../config/api';

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

const WeeklyProgressPanel = styled.div`
  margin-top: 1.5rem;
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const PanelTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

const ProgressTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const ProgressPercentage = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  text-align: center;
  margin-top: 2rem;
`;

const pastelColors = [
  '#A7C7E7', '#FFD6E0', '#C3FBD8', '#FFF5BA', '#FFDAC1', '#B5ead7', '#E2F0CB', '#FFB7B2', '#B5B9FF', '#F3C6E8'
];
const getPastelColor = (idx) => pastelColors[idx % pastelColors.length];

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
  const [newSubject, setNewSubject] = useState({
    name: '',
    description: '',
    topics: [{
      name: '',
      allocatedTime: 0,
      day: 'Monday',
      priority: 'Medium',
      completed: false
    }]
  });

  // Add refs for scrolling
  const activeSubjectsRef = useRef(null);
  const studyTimeChartRef = useRef(null);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get('/studyplans/');
      setSubjects(response.data.subjects || []);
    } catch (err) {
      setError('Failed to load subjects');
      setSubjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSubject = async (e) => {
    e.preventDefault();
    try {
      if (!newSubject.name.trim()) {
        setError('Subject name is required');
        return;
      }

      // Filter out topics with empty names
      const validTopics = newSubject.topics.filter(
        t => t.name && t.name.trim().length > 0
      );

      if (validTopics.length === 0) {
        setError('Please add at least one topic with a name.');
        return;
      }

      const subjectData = {
        name: newSubject.name.trim(),
        topics: validTopics.map(topic => ({
          name: topic.name.trim(),
          allocatedTime: Number(topic.allocatedTime) || 0,
          day: topic.day || 'Monday',
          priority: topic.priority || 'Medium',
          completed: false
        })),
        totalAllocatedTime: validTopics.reduce((sum, t) => sum + (Number(t.allocatedTime) || 0), 0)
      };

      const response = await api.post('/studyplans/add', { subject: subjectData });
      setSubjects(prev => [...prev, response.data]);
      setIsAddSubjectModalOpen(false);
      setNewSubject({
        name: '',
        description: '',
        topics: [{
          name: '',
          allocatedTime: 0,
          day: 'Monday',
          priority: 'Medium',
          completed: false
        }]
      });
    } catch (err) {
      console.error('Add subject error:', err);
      setError('Failed to add subject: ' + (err.response?.data?.error || err.message));
    }
  };

  const handleEditSubject = async (updatedSubject) => {
    setError(null);
    try {
      const response = await api.put(`/studyplans/${updatedSubject._id}`, { subject: updatedSubject });
      setSubjects(prev => prev.map(s => s._id === updatedSubject._id ? response.data : s));
    } catch (err) {
      setError('Failed to update subject');
    }
  };

  const handleDeleteSubject = async (subjectId) => {
    if (window.confirm('Are you sure you want to delete this subject?')) {
      try {
        await api.delete(`/studyplans/${subjectId}`);
        setSubjects(prev => prev.filter(subject => subject._id !== subjectId));
      } catch (err) {
        setError('Failed to delete subject');
      }
    }
  };

  const handleAddTopic = async (subjectId, topic) => {
    try {
      const response = await api.post(`/studyplans/${subjectId}/topics`, { topic });
      setSubjects(prev => prev.map(subject => 
        subject._id === subjectId ? response.data : subject
      ));
    } catch (err) {
      setError('Failed to add topic');
    }
  };

  const handleDeleteTopic = async (subjectId, topicIndex) => {
    try {
      const response = await api.delete(`/studyplans/${subjectId}/topics/${topicIndex}`);
      setSubjects(prev => prev.map(subject => 
        subject._id === subjectId ? response.data : subject
      ));
    } catch (err) {
      setError('Failed to delete topic');
    }
  };

  const handleUpdateProgress = async (subjectId, topicIndex, progress) => {
    setError(null);
    try {
      // Find the topic's _id
      const subject = subjects.find(s => s._id === subjectId);
      if (!subject) throw new Error('Subject not found');
      const topic = subject.topics[topicIndex];
      if (!topic) throw new Error('Topic not found');
      const topicId = topic._id;
      const response = await api.patch(`/studyplans/${subjectId}/topics/${topicId}/toggle`);
      setSubjects(prev => prev.map(subject =>
        subject._id === subjectId
          ? {
              ...subject,
              topics: subject.topics.map(t =>
                t._id === topicId ? { ...t, completed: response.data.completed } : t
              )
            }
          : subject
      ));
    } catch (err) {
      setError('Failed to update progress');
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
      const response = await api.patch(`/studyplans/${subjectId}/topics/${topicId}/toggle`);
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
          null
        ) : error ? (
          <AnimatedContainer>
            <ErrorMessage>{error}</ErrorMessage>
          </AnimatedContainer>
        ) : (
          <>
            <AnimatedContainer delay="0.05s">
              <Breadcrumbs>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                <BreadcrumbSeparator>›</BreadcrumbSeparator>
                <BreadcrumbLink href="/study-plan">Study Plan</BreadcrumbLink>
              </Breadcrumbs>
            </AnimatedContainer>
            <AnimatedContainer delay="0.1s">
              <PageTitle>Your Study Plan</PageTitle>
            </AnimatedContainer>
            <AnimatedContainer delay="0.15s">
              <FeaturesGrid>
                <FeatureCard
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (activeSubjectsRef.current) {
                      activeSubjectsRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <FeatureIcon>📋</FeatureIcon>
                  <FeatureTitle>Subject Selection</FeatureTitle>
                  <FeatureDescription>Choose subjects to include in your study plan</FeatureDescription>
                  <Button onClick={(e) => {
                    e.stopPropagation();
                    setIsAddSubjectModalOpen(true);
                  }}>Add Subject</Button>
                </FeatureCard>
                <FeatureCard
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsWeeklyProgressModalOpen(true)}
                >
                  <FeatureIcon>📈</FeatureIcon>
                  <FeatureTitle>Weekly Progress</FeatureTitle>
                  <FeatureDescription>Track your study progress and completion</FeatureDescription>
                  <Button onClick={(e) => {
                    e.stopPropagation();
                    setIsWeeklyProgressModalOpen(true);
                  }}>
                    View Details
                  </Button>
                </FeatureCard>
                <FeatureCard
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (studyTimeChartRef.current) {
                      studyTimeChartRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <FeatureIcon>📊</FeatureIcon>
                  <FeatureTitle>Study Time Distribution</FeatureTitle>
                  <FeatureDescription>View how your study time is distributed across subjects</FeatureDescription>
                  <div ref={studyTimeChartRef} style={{ width: '100%', height: '220px', marginTop: '10px' }}>
                    <StudyTimeDistributionChart subjects={subjects} />
                  </div>
                </FeatureCard>
              </FeaturesGrid>
            </AnimatedContainer>
            <ProgressPanel expanded={expandedProgress} style={{ display: 'none' }} />
            <AnimatedContainer delay="0.2s">
              <SectionTitle ref={activeSubjectsRef}>Active Subjects</SectionTitle>
            </AnimatedContainer>
            <AnimatedContainer delay="0.25s">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <button
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: activeTab === 'all' ? '#e6e6ff' : '#f8f9ff',
                    border: activeTab === 'all' ? '2px solid #6c5ce7' : '1px solid #ececff',
                    borderRadius: '999px',
                    boxShadow: activeTab === 'all' ? '0 2px 8px rgba(80,80,180,0.10)' : 'none',
                    color: '#333',
                    fontWeight: 600,
                    padding: '0.5rem 1.25rem',
                    cursor: 'pointer',
                    outline: 'none',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                  }}
                  onClick={() => setActiveTab('all')}
                >
                  <span style={{ fontSize: '1.2rem' }}>📚</span> All
                </button>
                {subjects.map((subject, idx) => (
                  <button
                    key={subject._id}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      background: activeTab === subject.name.toLowerCase() ? '#e6e6ff' : '#f8f9ff',
                      border: activeTab === subject.name.toLowerCase() ? '2px solid #6c5ce7' : '1px solid #ececff',
                      borderRadius: '999px',
                      boxShadow: activeTab === subject.name.toLowerCase() ? '0 2px 8px rgba(80,80,180,0.10)' : 'none',
                      color: '#333',
                      fontWeight: 600,
                      padding: '0.5rem 1.25rem',
                      cursor: 'pointer',
                      outline: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                    }}
                    onClick={() => setActiveTab(subject.name.toLowerCase())}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{getSubjectIcon(subject.name)}</span>
                    {subject.name}
                    <span
                      title="Delete Subject"
                      style={{ marginLeft: 8, color: '#dc3545', fontSize: '1.1rem', cursor: 'pointer' }}
                      onClick={e => { e.stopPropagation(); handleDeleteSubject(subject._id); }}
                    >🗑️</span>
                  </button>
                ))}
                <button
                  style={{
                    background: '#6c5ce7', color: 'white', border: 'none', borderRadius: '999px',
                    padding: '0.5rem 1.25rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(80,80,180,0.10)',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}
                  onClick={() => setIsAddSubjectModalOpen(true)}
                >
                  <span style={{ fontSize: '1.2rem' }}>＋</span> Add Subject
                </button>
              </div>
            </AnimatedContainer>
            
            {filteredSubjects.map((subject, idx) => (
              <AnimatedContainer delay={`${0.3 + idx * 0.05}s`} key={subject._id}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 2px 12px rgba(80,80,180,0.08)',
                    borderLeft: `8px solid ${getPastelColor(idx)}`,
                    marginBottom: 32,
                    padding: '2rem 2rem 1.5rem 2rem',
                    position: 'relative',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12, background: getPastelColor(idx),
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#6c5ce7', marginRight: 18
                    }}>{getSubjectIcon(subject.name)}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 20, color: '#333' }}>{subject.name}</div>
                      {subject.description && <div style={{ color: '#888', fontSize: 15, marginTop: 2 }}>{subject.description}</div>}
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span
                        title="Edit Subject"
                        style={{ color: '#6c5ce7', fontSize: 22, cursor: 'pointer', marginRight: 8 }}
                        onClick={() => { setCurrentSubject(subject); setIsEditSubjectModalOpen(true); }}
                      >✏️</span>
                      <span
                        title="Delete Subject"
                        style={{ color: '#dc3545', fontSize: 22, cursor: 'pointer' }}
                        onClick={() => { setCurrentSubject(subject); setIsDeleteSubjectModalOpen(true); }}
                      >🗑️</span>
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    {subject.topics.length === 0 && (
                      <div style={{ color: '#aaa', fontStyle: 'italic', marginBottom: 8 }}>No topics yet. Add one below!</div>
                    )}
                    {subject.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          display: 'flex', alignItems: 'center', background: topic.completed ? '#f3f8f3' : '#f8f9ff',
                          borderRadius: 10, padding: '0.75rem 1rem', marginBottom: 8,
                          boxShadow: topic.completed ? '0 1px 4px #b5ead7' : 'none',
                          border: topic.completed ? '1px solid #b5ead7' : '1px solid #ececff',
                          transition: 'background 0.2s, box-shadow 0.2s',
                          position: 'relative',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={topic.completed}
                          onChange={e => handleUpdateProgress(subject._id, tIdx, e.target.checked)}
                          style={{ width: 22, height: 22, accentColor: '#6c5ce7', marginRight: 16, cursor: 'pointer' }}
                        />
                        <div style={{ flex: 1 }}>
                          <span style={{
                            textDecoration: topic.completed ? 'line-through' : 'none',
                            color: topic.completed ? '#aaa' : '#333', fontWeight: 600, fontSize: 16
                          }}>{topic.name}</span>
                          <span style={{
                            marginLeft: 12, fontSize: 13, padding: '2px 10px', borderRadius: 12,
                            background: topic.completed ? '#b5ead7' : '#ffeaa7', color: topic.completed ? '#27ae60' : '#f39c12',
                            fontWeight: 600
                          }}>{topic.completed ? 'Completed' : 'In Progress'}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteTopic(subject._id, tIdx)}
                          style={{
                            background: '#ffeded', color: '#dc3545', border: 'none', borderRadius: 8,
                            padding: '0.3rem 0.8rem', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginLeft: 10
                          }}
                          title="Delete Topic"
                        >Delete</button>
                      </div>
                    ))}
                  </div>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      const topicInput = e.target.topic;
                      if (topicInput.value.trim()) {
                        handleAddTopic(subject._id, topicInput.value.trim());
                        topicInput.value = '';
                      }
                    }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}
                  >
                    <input
                      name="topic"
                      placeholder="Add new topic"
                      required
                      style={{
                        flex: 1, borderRadius: 999, border: '1px solid #ececff', padding: '0.6rem 1.2rem', fontSize: 15,
                        outline: 'none', background: '#f8f9ff', marginRight: 8
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        background: '#6c5ce7', color: 'white', border: 'none', borderRadius: 999,
                        padding: '0.6rem 1.4rem', fontWeight: 600, fontSize: 15, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: 6
                      }}
                    >
                      <span style={{ fontSize: 18 }}>＋</span> Add Topic
                    </button>
                  </form>
                </div>
              </AnimatedContainer>
            ))}
            <AnimatedContainer delay={`${0.3 + filteredSubjects.length * 0.05 + 0.05}s`}>
              <SectionTitle>Weekly Study Schedule</SectionTitle>
            </AnimatedContainer>
            {Object.keys(scheduleByDay).length === 0 ? (
              <AnimatedContainer delay={`${0.3 + filteredSubjects.length * 0.05 + 0.1}s`}>
                <S.EmptySchedule>No sessions scheduled. Add subjects and topics to see your schedule.</S.EmptySchedule>
              </AnimatedContainer>
            ) : (
              <AnimatedContainer delay={`${0.3 + filteredSubjects.length * 0.05 + 0.1}s`}>
                {Object.entries(scheduleByDay).map(([day, sessions], idx) => (
                  <AnimatedContainer delay={`${0.4 + idx * 0.05}s`} key={day}>
                    <S.DaySection>
                      <S.DaySectionHeader onClick={() => toggleDayExpanded(day)}>
                        <S.DaySectionTitle>
                          {isDayExpanded(day) ? '▼' : '►'} {day} ({sessions.length} session{sessions.length !== 1 ? 's' : ''})
                        </S.DaySectionTitle>
                      </S.DaySectionHeader>
                      {isDayExpanded(day) && (
                        <S.DaySectionContent>
                          {sessions.map(session => (
                            <S.SessionRow key={session._id}>
                              <S.SessionCheckbox
                                type="checkbox"
                                checked={session.completed}
                                onChange={() => handleToggleSession(session.subjectId, session._id)}
                              />
                              <S.SessionSubject>
                                <span style={{ fontWeight: 700, color: '#6c5ce7', marginRight: 8 }}>{session.subjectName}</span>
                                <span style={{ color: '#888', marginRight: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
                                  <span role="img" aria-label="time">⏰</span> {session.allocatedTime}h
                                </span>
                                <span style={{ color: '#888', marginRight: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
                                  <span role="img" aria-label="topic">📚</span> {session.name}
                                </span>
                                <S.PriorityIndicator priority={session.priority}>
                                  {session.priority === 'High' ? '🔴' : session.priority === 'Medium' ? '🟡' : '🟢'} {session.priority}
                                </S.PriorityIndicator>
                              </S.SessionSubject>
                            </S.SessionRow>
                          ))}
                        </S.DaySectionContent>
                      )}
                    </S.DaySection>
                  </AnimatedContainer>
                ))}
              </AnimatedContainer>
            )}
          </>
        )}
      </Container>
      
      {/* Modals */}
      {isAddSubjectModalOpen && (
        <S.Modal>
          <S.ModalContent>
            <h2>Add New Subject</h2>
            <form onSubmit={handleAddSubject}>
              <S.FormGroup>
                <label>Subject Name</label>
                <S.Input
                  value={newSubject.name}
                  onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                  required
                />
              </S.FormGroup>

              <S.FormGroup>
                <label>Description</label>
                <S.TextArea
                  value={newSubject.description}
                  onChange={(e) => setNewSubject({ ...newSubject, description: e.target.value })}
                />
              </S.FormGroup>

              <S.FormGroup>
                <label>Topics</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, fontWeight: 500, color: '#555', fontSize: 14 }}>
                  <span style={{ flex: 2 }}>Topic Name</span>
                  <span style={{ flex: 1 }}>Allocated Time (min)</span>
                  <span style={{ flex: 1 }}>Day</span>
                  <span style={{ flex: 1 }}>Priority</span>
                  <span style={{ width: 32 }}></span>
                </div>
                {newSubject.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 14,
                      background: '#f8f9ff',
                      borderRadius: 10,
                      padding: '14px 12px',
                      boxShadow: '0 1px 4px rgba(80,80,180,0.06)',
                      position: 'relative',
                      transition: 'box-shadow 0.2s',
                    }}
                  >
                    <S.Input
                      placeholder="e.g. Algebra, Reading, etc."
                      value={topic.name}
                      onChange={e => {
                        const updatedTopics = [...newSubject.topics];
                        updatedTopics[idx].name = e.target.value;
                        setNewSubject({ ...newSubject, topics: updatedTopics });
                      }}
                      required
                      style={{ flex: 2 }}
                    />
                    <S.Input
                      type="number"
                      min="0"
                      placeholder="Minutes"
                      value={topic.allocatedTime}
                      onChange={e => {
                        const updatedTopics = [...newSubject.topics];
                        updatedTopics[idx].allocatedTime = e.target.value;
                        setNewSubject({ ...newSubject, topics: updatedTopics });
                      }}
                      required
                      style={{ flex: 1 }}
                    />
                    <select
                      value={topic.day}
                      onChange={e => {
                        const updatedTopics = [...newSubject.topics];
                        updatedTopics[idx].day = e.target.value;
                        setNewSubject({ ...newSubject, topics: updatedTopics });
                      }}
                      style={{
                        flex: 1,
                        padding: '0.5rem 1rem',
                        borderRadius: 8,
                        border: '1.5px solid #d1d1f7',
                        background: '#f4f6ff',
                        fontSize: 15,
                        color: '#333',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        transition: 'border 0.2s, box-shadow 0.2s',
                        boxShadow: '0 1px 3px rgba(80,80,180,0.04)',
                      }}
                      onFocus={e => e.target.style.border = '1.5px solid #6c5ce7'}
                      onBlur={e => e.target.style.border = '1.5px solid #d1d1f7'}
                    >
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                    <select
                      value={topic.priority}
                      onChange={e => {
                        const updatedTopics = [...newSubject.topics];
                        updatedTopics[idx].priority = e.target.value;
                        setNewSubject({ ...newSubject, topics: updatedTopics });
                      }}
                      style={{
                        flex: 1,
                        padding: '0.5rem 1rem',
                        borderRadius: 8,
                        border: '1.5px solid #d1d1f7',
                        background: '#f4f6ff',
                        fontSize: 15,
                        color: '#333',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        transition: 'border 0.2s, box-shadow 0.2s',
                        boxShadow: '0 1px 3px rgba(80,80,180,0.04)',
                      }}
                      onFocus={e => e.target.style.border = '1.5px solid #6c5ce7'}
                      onBlur={e => e.target.style.border = '1.5px solid #d1d1f7'}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                    {newSubject.topics.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const updatedTopics = newSubject.topics.filter((_, i) => i !== idx);
                          setNewSubject({ ...newSubject, topics: updatedTopics });
                        }}
                        style={{
                          background: 'none',
                          color: '#dc3545',
                          border: 'none',
                          borderRadius: '50%',
                          width: 32,
                          height: 32,
                          fontWeight: 700,
                          fontSize: 20,
                          cursor: 'pointer',
                          marginLeft: 12,
                          transition: 'background 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        title="Remove Topic"
                        onMouseOver={e => e.currentTarget.style.background = '#ffeaea'}
                        onMouseOut={e => e.currentTarget.style.background = 'none'}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setNewSubject({
                    ...newSubject,
                    topics: [
                      ...newSubject.topics,
                      { name: '', allocatedTime: 0, day: 'Monday', priority: 'Medium', completed: false }
                    ]
                  })}
                  style={{
                    background: '#6c5ce7',
                    color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    padding: '0.7rem 0',
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: 'pointer',
                    marginTop: 8,
                    width: '100%',
                    boxShadow: '0 1px 4px rgba(80,80,180,0.06)',
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = '#5a4ad1'}
                  onMouseOut={e => e.currentTarget.style.background = '#6c5ce7'}
                >
                  + Add Topic
                </button>
              </S.FormGroup>

              <S.ButtonGroup>
                <S.Button type="submit">Add Subject</S.Button>
                <S.Button type="button" onClick={() => setIsAddSubjectModalOpen(false)}>
                  Cancel
                </S.Button>
              </S.ButtonGroup>
            </form>
          </S.ModalContent>
        </S.Modal>
      )}
      
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
