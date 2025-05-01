import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import AIQnA from './components/AIQnA/AIQnA';
import StudyPlan from './components/StudyPlan/StudyPlan';
import Quizzes from './components/Quizzes/Quizzes';
import Flashcards from './components/Flashcards/Flashcards';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';
import './index.css';

// Mock authentication state (in a real app, this would be managed with context/redux)
const isAuthenticated = true;

// Protected route component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        
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