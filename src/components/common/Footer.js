import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f8f9ff;
  color: #666;
  padding: 2rem 0 1rem 0;
  text-align: center;
  border-top: 1px solid #ececec;
  margin-top: 3rem;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const FooterLink = styled.a`
  color: #6c5ce7;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #5a4ad1;
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #6c5ce7;
  font-size: 1.3rem;
  transition: color 0.2s;
  &:hover {
    color: #5a4ad1;
  }
`;

const Copyright = styled.div`
  font-size: 0.95rem;
  color: #999;
`;

const Footer = () => (
  <FooterContainer>
    <Copyright>
      &copy; {new Date().getFullYear()} StudyBuddy. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer; 