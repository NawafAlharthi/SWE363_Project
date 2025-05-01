import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
  
  @media (max-width: 768px) {
    display: none;
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

const Navbar = ({ isLoggedIn = false }) => {
  const location = useLocation();
  
  return (
    <NavbarContainer>
      <Logo to={isLoggedIn ? "/dashboard" : "/"}>StudyBuddy</Logo>
      
      {isLoggedIn ? (
        <>
          <NavLinks>
            <NavLink to="/dashboard" active={location.pathname === "/dashboard"}>Dashboard</NavLink>
            <NavLink to="/ai-qna" active={location.pathname === "/ai-qna"}>AI-Powered Q&A</NavLink>
            <NavLink to="/study-plan" active={location.pathname === "/study-plan"}>Study Plan</NavLink>
            <NavLink to="/quizzes" active={location.pathname === "/quizzes"}>Quizzes</NavLink>
            <NavLink to="/flashcards" active={location.pathname === "/flashcards"}>Flashcards</NavLink>
            <NavLink to="/pomodoro" active={location.pathname === "/pomodoro"}>Pomodoro Timer</NavLink>
          </NavLinks>
          <ProfileButton>
            <ProfileImage src="https://media.licdn.com/dms/image/v2/D4D03AQEiOknesJ1i7A/profile-displayphoto-shrink_400_400/B4DZSjWEz7GcAg-/0/1737907261223?e=1750291200&v=beta&t=3oGMZLUrSn3v5fOg6FapKZ04ykHIb649vU7n76b3C_M" alt="Profile" />
          </ProfileButton>
        </>
      ) : (
        <>
          <NavLinks>
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/features" active={location.pathname === "/features"}>Features</NavLink>
            <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
            <NavLink to="/contact" active={location.pathname === "/contact"}>Contact</NavLink>
          </NavLinks>
          <AuthButtons>
            <LoginButton to="/login">Login</LoginButton>
            <SignUpButton to="/signup">Sign Up</SignUpButton>
          </AuthButtons>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
