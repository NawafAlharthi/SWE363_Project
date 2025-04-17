import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
`;

const LandingPage = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default LandingPage;
