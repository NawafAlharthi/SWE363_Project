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

export default Dashboard;
