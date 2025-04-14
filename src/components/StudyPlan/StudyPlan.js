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

const StudyPlan = () => {
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
        </Container>
      </>
    );
  };
  
  export default StudyPlan;