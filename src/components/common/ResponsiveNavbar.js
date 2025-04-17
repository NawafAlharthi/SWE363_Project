import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from './ResponsiveComponents';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  ${media.tablet} {
    padding: 0.75rem 1.5rem;
  }
  
  ${media.mobile} {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  ${media.tablet} {
    gap: 1rem;
  }
  
  ${media.mobile} {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  ${media.mobile} {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: white;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? '#6c5ce7' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  padding-bottom: 0.25rem;
  border-bottom: ${props => props.active ? '2px solid #6c5ce7' : 'none'};
  transition: all 0.2s ease;
  
  &:hover {
    color: #6c5ce7;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  ${media.mobile} {
    gap: 0.5rem;
  }
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  color: #6c5ce7;
  font-weight: 500;
`;

const SignUpButton = styled(Link)`
  text-decoration: none;
  background-color: #6c5ce7;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
  
  ${media.mobile} {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const ProfileButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ResponsiveNavbar = ({ isLoggedIn = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = window.location.pathname;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <NavbarContainer>
      <Logo to={isLoggedIn ? "/dashboard" : "/"}>StudyBuddy</Logo>
      
      {isLoggedIn ? (
        <>
          <NavLinks>
            <NavLink to="/dashboard" active={location === "/dashboard"}>Dashboard</NavLink>
            <NavLink to="/ai-qna" active={location === "/ai-qna"}>AI-Powered Q&A</NavLink>
            <NavLink to="/study-plan" active={location === "/study-plan"}>Study Plan</NavLink>
            <NavLink to="/quizzes" active={location === "/quizzes"}>Quizzes</NavLink>
            <NavLink to="/flashcards" active={location === "/flashcards"}>Flashcards</NavLink>
            <NavLink to="/pomodoro" active={location === "/pomodoro"}>Pomodoro Timer</NavLink>
          </NavLinks>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            ☰
          </MobileMenuButton>
          
          <MobileMenu isOpen={mobileMenuOpen}>
            <MobileNavLink to="/dashboard">Dashboard</MobileNavLink>
            <MobileNavLink to="/ai-qna">AI-Powered Q&A</MobileNavLink>
            <MobileNavLink to="/study-plan">Study Plan</MobileNavLink>
            <MobileNavLink to="/quizzes">Quizzes</MobileNavLink>
            <MobileNavLink to="/flashcards">Flashcards</MobileNavLink>
            <MobileNavLink to="/pomodoro">Pomodoro Timer</MobileNavLink>
          </MobileMenu>
          
          <ProfileButton>
            <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
          </ProfileButton>
        </>
      ) : (
        <>
          <NavLinks>
            <NavLink to="/" active={location === "/"}>Home</NavLink>
            <NavLink to="/features" active={location === "/features"}>Features</NavLink>
            <NavLink to="/about" active={location === "/about"}>About</NavLink>
            <NavLink to="/contact" active={location === "/contact"}>Contact</NavLink>
          </NavLinks>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            ☰
          </MobileMenuButton>
          
          <MobileMenu isOpen={mobileMenuOpen}>
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/features">Features</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </MobileMenu>
          
          <AuthButtons>
            <LoginButton to="/login">Login</LoginButton>
            <SignUpButton to="/signup">Sign Up</SignUpButton>
          </AuthButtons>
        </>
      )}
    </NavbarContainer>
  );
};

export default ResponsiveNavbar;
