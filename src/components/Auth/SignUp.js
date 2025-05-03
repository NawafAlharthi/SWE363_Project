import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import axios from 'axios';
import config from '../../config';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9ff;
  position: relative;
`;

const CenterWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 320px;
  margin: 0 auto;
  padding: 2.5rem 2rem 2rem 2rem;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(80, 80, 160, 0.10);
  border: 1.5px solid #f0f0fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: 700;
  color: #23223a;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 2.5rem 0.9rem 2.5rem;
  border: 1.5px solid #ececec;
  border-radius: 7px;
  font-size: 1rem;
  background: #f7f8fa;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const Button = styled.button`
  background-color: #6c5ce7;
  color: white;
  padding: 0.9rem 0;
  border: none;
  border-radius: 7px;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(108,92,231,0.08);
  transition: background-color 0.2s;
  &:hover {
    background-color: #5a4ad1;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4757;
  font-size: 0.95rem;
  margin-top: 0.2rem;
  text-align: center;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #b2b2b2;
  font-size: 1.1rem;
`;

const ShowPasswordToggle = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c5ce7;
  font-size: 0.98rem;
  cursor: pointer;
  user-select: none;
`;

const SignInLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #222;
  a {
    color: #6c5ce7;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${config.API_URL}${config.AUTH_ENDPOINTS.REGISTER}`, {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      // Store the token in localStorage
      localStorage.setItem(config.TOKEN_KEY, response.data.token);
      localStorage.setItem(config.USER_KEY, JSON.stringify(response.data.user));
      
      // Update authentication state
      setIsAuthenticated(true);
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Failed to sign up. Please try again.');
      } else if (err.request) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Navbar />
      <CenterWrapper>
        <FormContainer>
          <Title>Create Account</Title>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <InputIcon><FaUser /></InputIcon>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputIcon><FaEnvelope /></InputIcon>
            </InputWrapper>
            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <InputIcon><FaLock /></InputIcon>
              <ShowPasswordToggle onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? 'Hide' : 'Show'}
              </ShowPasswordToggle>
            </InputWrapper>
            <InputWrapper>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <InputIcon><FaLock /></InputIcon>
              <ShowPasswordToggle onClick={() => setShowConfirmPassword((v) => !v)}>
                {showConfirmPassword ? 'Hide' : 'Show'}
              </ShowPasswordToggle>
            </InputWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </Form>
          <SignInLink>
            Already have an account? <Link to="/signin">Sign in</Link>
          </SignInLink>
        </FormContainer>
      </CenterWrapper>
      <Footer />
    </Container>
  );
};

export default SignUp; 