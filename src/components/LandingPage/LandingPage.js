import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 6rem;
  background-color: #f8f9ff;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 500px;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const GetStartedButton = styled(Link)`
  display: inline-block;
  background-color: #6c5ce7;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`;

const HeroImage = styled.div`
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 6rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #f8f9ff;
  padding: 2rem;
  border-radius: 8px;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  color: #6c5ce7;
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection>
        <HeroContent>
          <HeroTitle>Study Smarter, Not Harder!</HeroTitle>
          <HeroSubtitle>
            Your AI-powered study companion that adapts to your learning style and helps you achieve academic success.
          </HeroSubtitle>
          <GetStartedButton to="/signup">Get Started Free</GetStartedButton>
        </HeroContent>
        <HeroImage>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-big-books-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--boy-learning-online-education-using-study-attending-class-back-to-school-pack-illustrations-4779537.png" alt="Student studying with laptop" />
        </HeroImage>
      </HeroSection>
      
      <FeaturesSection id="features-section">
        <SectionTitle>Key Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🤖</FeatureIcon>
            <FeatureTitle>AI-powered Q&A</FeatureTitle>
            <FeatureDescription>
              Get instant answers to your study questions with our advanced AI assistant.
            </FeatureDescription>
            <LearnMoreButton to="/ai-qna">Learn More</LearnMoreButton>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📝</FeatureIcon>
            <FeatureTitle>Personalized Study Plans</FeatureTitle>
            <FeatureDescription>
              Custom learning paths based on your goals, schedule, and learning style.
            </FeatureDescription>
            <LearnMoreButton to="/study-plan">Learn More</LearnMoreButton>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Interactive Quizzes</FeatureTitle>
            <FeatureDescription>
              Test your knowledge with adaptive quizzes that focus on your weak areas.
            </FeatureDescription>
            <LearnMoreButton to="/quizzes">Learn More</LearnMoreButton>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🔄</FeatureIcon>
            <FeatureTitle>Flashcards</FeatureTitle>
            <FeatureDescription>
              Create and study digital flashcards with spaced repetition technology.
            </FeatureDescription>
            <LearnMoreButton to="/flashcards">Learn More</LearnMoreButton>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>⏱️</FeatureIcon>
            <FeatureTitle>Pomodoro Timer</FeatureTitle>
            <FeatureDescription>
              Stay focused with our built-in study timer based on the Pomodoro technique.
            </FeatureDescription>
            <LearnMoreButton to="/pomodoro">Learn More</LearnMoreButton>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      <Footer />
    </Container>
  );
};

export default LandingPage;
