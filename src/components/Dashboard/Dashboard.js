import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';

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

const Dashboard = () => {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <DashboardContainer>
        <DashboardHeader>Dashboard</DashboardHeader>
      </DashboardContainer>
    </>
  );
};

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

const Dashboard = () => {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <DashboardContainer>
        <DashboardHeader>Dashboard</DashboardHeader>

        <QuickAccessGrid>
          <QuickAccessCard>
            <CardLabel>Quick Access</CardLabel>
            <CardTitle>Start Study Session</CardTitle>
            <CardDescription>Begin a focused study session with your current materials</CardDescription>
            <CardButton>Start Now</CardButton>
          </QuickAccessCard>
        </QuickAccessGrid>
      </DashboardContainer>
    </>
  );
};


export default Dashboard;
