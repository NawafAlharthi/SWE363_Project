import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

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

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const CenteredNavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Navbar = ({ isLoggedIn = false }) => {
  const location = useLocation();
  const hideNavLinks = location.pathname === '/signin' || location.pathname === '/signup';
  
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo to={isLoggedIn ? "/dashboard" : "/"}>StudyBuddy</Logo>
        {isLoggedIn ? (
          <>
            <CenteredNavLinks>
              <NavLink to="/dashboard" active={location.pathname === "/dashboard"}>Dashboard</NavLink>
              <NavLink to="/ai-qna" active={location.pathname === "/ai-qna"}>AI-Powered Q&A</NavLink>
              <NavLink to="/study-plan" active={location.pathname === "/study-plan"}>Study Plan</NavLink>
              <NavLink to="/quizzes" active={location.pathname === "/quizzes"}>Quizzes</NavLink>
              <NavLink to="/flashcards" active={location.pathname === "/flashcards"}>Flashcards</NavLink>
              <NavLink to="/pomodoro" active={location.pathname === "/pomodoro"}>Pomodoro Timer</NavLink>
            </CenteredNavLinks>
            <ProfileButton>
              <ProfileImage src="https://media.licdn.com/dms/image/v2/D4D03AQEiOknesJ1i7A/profile-displayphoto-shrink_400_400/B4DZSjWEz7GcAg-/0/1737907261223?e=1750291200&v=beta&t=3oGMZLUrSn3v5fOg6FapKZ04ykHIb649vU7n76b3C_M" alt="Profile" />
            </ProfileButton>
          </>
        ) : (
          <>
            {!hideNavLinks && (
              <CenteredNavLinks>
                <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
                <NavLink as="a" href="#features-section" onClick={e => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    const el = document.getElementById('features-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>Features</NavLink>
              </CenteredNavLinks>
            )}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
              <Button as={Link} to="/signin" variant="text" size="medium">Login</Button>
              <Button as={Link} to="/signup" variant="primary" size="medium">Sign Up</Button>
            </div>
          </>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
