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


