import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';

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

const AIAssistantCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const AIAssistantIcon = styled.div`
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

const AIAssistantContent = styled.div`
  flex: 1;
`;

const AIAssistantTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const AIAssistantDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const QuestionLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const QuestionTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const AskButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`;

const ConversationSection = styled.div`
  margin-top: 3rem;
`;

const ConversationTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ConversationCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const QuestionIcon = styled.div`
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

const QuestionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

const QuestionContent = styled.div`
  margin-bottom: 1.5rem;
`;

const AnswerContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const FeedbackButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FeedbackButton = styled.button`
  background-color: ${props => props.active ? '#e6e6ff' : '#f0f0f0'};
  color: ${props => props.active ? '#6c5ce7' : '#666'};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#e6e6ff' : '#e6e6e6'};
  }
`;

const FollowUpButton = styled.button`
  background-color: transparent;
  color: #6c5ce7;
  border: 1px solid #6c5ce7;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-left: auto;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f0f0ff;
  }
`;

const TopicsSection = styled.div`
  margin-top: 3rem;
`;

const TopicsTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

const TopicTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.5rem;
`;

const TopicTab = styled.button`
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
  
  &:hover {
    color: #6c5ce7;
  }
`;

const TopicCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const TopicCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

const TopicIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`;

const TopicTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const TopicDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const AIQnA = () => {
  const [activeTab, setActiveTab] = useState('popular');
  const [helpfulFeedback, setHelpfulFeedback] = useState(false);
  const [notHelpfulFeedback, setNotHelpfulFeedback] = useState(false);

  const handleHelpfulClick = () => {
    setHelpfulFeedback(!helpfulFeedback);
    setNotHelpfulFeedback(false);
  };

  const handleNotHelpfulClick = () => {
    setNotHelpfulFeedback(!notHelpfulFeedback);
    setHelpfulFeedback(false);
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Container>
        <Breadcrumbs>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          <BreadcrumbSeparator>›</BreadcrumbSeparator>
          <BreadcrumbLink href="/academic-tools">Academic Tools</BreadcrumbLink>
          <BreadcrumbSeparator>›</BreadcrumbSeparator>
          <BreadcrumbLink href="/ai-qna">Q&A</BreadcrumbLink>
        </Breadcrumbs>
        
        <PageTitle>Ask Your Academic Questions</PageTitle>
        
        <AIAssistantCard>
          <AIAssistantIcon>🤖</AIAssistantIcon>
          <AIAssistantContent>
            <AIAssistantTitle>AI Assistant</AIAssistantTitle>
            <AIAssistantDescription>
              Ask any academic question and get instant answers powered by AI.
            </AIAssistantDescription>
          </AIAssistantContent>
        </AIAssistantCard>
        
        <QuestionLabel>Your question</QuestionLabel>
        <QuestionTextarea placeholder="Type your academic question here..." />
        <AskButton>Ask Question</AskButton>
        
        <ConversationSection>
          <ConversationTitle>Recent Conversation</ConversationTitle>
          
          <ConversationCard>
            <QuestionHeader>
              <QuestionIcon>❓</QuestionIcon>
              <QuestionTitle>Your Question</QuestionTitle>
            </QuestionHeader>
            
            <QuestionContent>
              What is the difference between mitosis and meiosis?
            </QuestionContent>
            
            <AnswerContent>
              <p>Mitosis is cell division that results in two identical daughter cells with the same number of chromosomes as the parent cell, used for growth and repair. Meiosis is cell division that produces four genetically different cells with half the chromosomes, used in sexual reproduction to create gametes.</p>
              <p>Key differences:</p>
              <ul>
                <li>Mitosis creates 2 cells; meiosis creates 4 cells</li>
                <li>Mitosis produces identical cells; meiosis produces genetically diverse cells</li>
                <li>Mitosis maintains chromosome count; meiosis halves chromosome count</li>
                <li>Mitosis is used for growth/repair; meiosis is used for reproduction</li>
              </ul>
            </AnswerContent>
            
            <div style={{ display: 'flex' }}>
              <FeedbackButtons>
                <FeedbackButton 
                  active={helpfulFeedback} 
                  onClick={handleHelpfulClick}
                >
                  Helpful
                </FeedbackButton>
                <FeedbackButton 
                  active={notHelpfulFeedback} 
                  onClick={handleNotHelpfulClick}
                >
                  Not Helpful
                </FeedbackButton>
              </FeedbackButtons>
              
              <FollowUpButton>Ask Follow-up</FollowUpButton>
            </div>
          </ConversationCard>
        </ConversationSection>
        
        <TopicsSection>
          <TopicsTitle>Suggested Topics</TopicsTitle>
          
          <TopicTabs>
            <TopicTab 
              active={activeTab === 'popular'} 
              onClick={() => setActiveTab('popular')}
            >
              Popular
            </TopicTab>
            <TopicTab 
              active={activeTab === 'math'} 
              onClick={() => setActiveTab('math')}
            >
              Math
            </TopicTab>
            <TopicTab 
              active={activeTab === 'science'} 
              onClick={() => setActiveTab('science')}
            >
              Science
            </TopicTab>
            <TopicTab 
              active={activeTab === 'history'} 
              onClick={() => setActiveTab('history')}
            >
              History
            </TopicTab>
            <TopicTab 
              active={activeTab === 'literature'} 
              onClick={() => setActiveTab('literature')}
            >
              Literature
            </TopicTab>
          </TopicTabs>
          
          <TopicCardsGrid>
            <TopicCard>
              <TopicIcon>∑</TopicIcon>
              <TopicTitle>Calculus Basics</TopicTitle>
              <TopicDescription>Derivatives, integrals, and their applications</TopicDescription>
            </TopicCard>
            
            <TopicCard>
              <TopicIcon>⚗️</TopicIcon>
              <TopicTitle>Periodic Table</TopicTitle>
              <TopicDescription>Elements, properties, and chemical reactions</TopicDescription>
            </TopicCard>
            
            <TopicCard>
              <TopicIcon>🧬</TopicIcon>
              <TopicTitle>Cell Biology</TopicTitle>
              <TopicDescription>Structure, function, and cellular processes</TopicDescription>
            </TopicCard>
          </TopicCardsGrid>
        </TopicsSection>
      </Container>
    </>
  );
};

export default AIQnA;
