import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import AIQnA from './components/AIQnA/AIQnA';
import StudyPlan from './components/StudyPlan/StudyPlan';
import Quizzes from './components/Quizzes/Quizzes';
import Flashcards from './components/Flashcards/Flashcards';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated on initial load
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/signin" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/ai-qna" element={
          <ProtectedRoute>
            <AIQnA />
          </ProtectedRoute>
        } />
        
        <Route path="/study-plan" element={
          <ProtectedRoute>
            <StudyPlan />
          </ProtectedRoute>
        } />
        
        <Route path="/quizzes" element={
          <ProtectedRoute>
            <Quizzes />
          </ProtectedRoute>
        } />
        
        <Route path="/flashcards" element={
          <ProtectedRoute>
            <Flashcards />
          </ProtectedRoute>
        } />
        
        <Route path="/pomodoro" element={
          <ProtectedRoute>
            <PomodoroTimer />
          </ProtectedRoute>
        } />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;