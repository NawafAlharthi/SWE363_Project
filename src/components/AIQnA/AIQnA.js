import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../common/Navbar';
import axios from 'axios';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
`;

const QuestionSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const QuestionInput = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1.2rem;
  border: 2px solid #e1e1e1;
  border-radius: 12px;
  font-size: 1.1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 4px rgba(108, 92, 231, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SubjectSelect = styled.select`
  width: 200px;
  padding: 0.8rem;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const Button = styled.button`
  background: ${props => props.loading ? '#8b7fef' : '#6c5ce7'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.loading ? '#8b7fef' : '#5a4ad1'};
    transform: ${props => props.loading ? 'none' : 'translateY(-2px)'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ConversationSection = styled.div`
  margin-top: 3rem;
`;

const QnACard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.5s ease;
  
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Question = styled.div`
  margin-bottom: 1.5rem;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${props => props.type === 'user' ? '#e6e6ff' : '#f0f0f0'};
  color: ${props => props.type === 'user' ? '#6c5ce7' : '#1a1a1a'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
`;

const Answer = styled.div`
  background: #f8f9ff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-left: 3.5rem;
`;

const FeedbackSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const FeedbackButton = styled.button`
  background: ${props => props.active ? '#e6e6ff' : 'transparent'};
  color: ${props => props.active ? '#6c5ce7' : '#666'};
  border: 1px solid ${props => props.active ? '#6c5ce7' : '#e1e1e1'};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.active ? '#e6e6ff' : '#f8f9ff'};
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  background: #fde8e7;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AIQnA = () => {
  const [question, setQuestion] = useState('');
  const [subject, setSubject] = useState('General');
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQnAs();
  }, []);

  const fetchQnAs = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/aiqna');
      setConversations(response.data);
    } catch (err) {
      setError('Failed to load previous conversations');
      console.error('Error fetching QnAs:', err);
    }
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      setError('Please enter a question');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5001/api/aiqna/add', {
        question: question.trim(),
        subject
      });

      setConversations(prev => [response.data, ...prev]);
      setQuestion('');
      setSubject('General');
    } catch (err) {
      setError('Failed to get an answer. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = async (id, isHelpful) => {
    try {
      const response = await axios.post(`http://localhost:5001/api/aiqna/${id}/feedback`, {
        isHelpful
      });

      setConversations(prev =>
        prev.map(conv =>
          conv._id === id ? { ...conv, feedback: response.data.feedback } : conv
        )
      );
    } catch (err) {
      console.error('Error updating feedback:', err);
    }
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Container>
        <Header>
          <Title>AI Academic Assistant</Title>
          <Subtitle>Ask any academic question and get instant, accurate answers powered by AI.</Subtitle>
        </Header>

        <QuestionSection>
          {error && (
            <ErrorMessage>
              <span>⚠️</span>
              {error}
            </ErrorMessage>
          )}
          
          <InputWrapper>
            <QuestionInput
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your academic question here..."
              disabled={loading}
            />
          </InputWrapper>

          <SubjectSelect
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={loading}
          >
            <option value="General">General</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="History">History</option>
            <option value="Literature">Literature</option>
          </SubjectSelect>

          <Button onClick={handleAskQuestion} loading={loading} disabled={loading}>
            {loading ? (
              'Thinking...'
            ) : (
              'Ask Question'
            )}
          </Button>
        </QuestionSection>

        <ConversationSection>
          {loading && conversations.length === 0 ? (
            <Text>Loading conversations...</Text>
          ) : conversations.length > 0 ? (
            conversations.map((conv) => (
              <QnACard key={conv._id}>
                <Question>
                  <QuestionHeader>
                    <Icon type="user">Q</Icon>
                    <Text>{conv.question}</Text>
                  </QuestionHeader>
                </Question>
                <Answer>
                  <QuestionHeader>
                    <Icon type="ai">A</Icon>
                    <Text>{conv.answer}</Text>
                  </QuestionHeader>
                </Answer>
                <FeedbackSection>
                  <FeedbackButton
                    active={conv.feedback === true}
                    onClick={() => handleFeedback(conv._id, true)}
                  >
                    Helpful
                  </FeedbackButton>
                  <FeedbackButton
                    active={conv.feedback === false}
                    onClick={() => handleFeedback(conv._id, false)}
                  >
                    Not Helpful
                  </FeedbackButton>
                </FeedbackSection>
              </QnACard>
            ))
          ) : (
            <Text>No conversations yet. Ask a question to get started!</Text>
          )}
        </ConversationSection>
      </Container>
    </>
  );
};

export default AIQnA;