import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import * as S from './Quizzes.styles';

// Temporary Data Storage
const QUIZZES = [
  {
    id: 1,
    title: "Mathematics",
    icon: "∑",
    description: "Test your algebra and calculus skills with 20 questions",
    subject: "math",
    difficulty: "beginner",
    questions: 20
  },
  {
    id: 2,
    title: "Biology",
    icon: "🧬",
    description: "Cell structure, genetics, and human anatomy questions",
    subject: "biology",
    difficulty: "intermediate",
    questions: 15
  },
  {
    id: 3,
    title: "History",
    icon: "🏛️",
    description: "World events, civilizations, and important figures",
    subject: "history",
    difficulty: "advanced",
    questions: 25
  }
];

const RECENT_QUIZZES = [
  {
    id: 1,
    title: "Physics: Forces and Motion",
    date: "May 15, 2023",
    score: "85%",
    icon: "⚛️",
    status: "completed"
  },
  {
    id: 2,
    title: "Chemistry: Periodic Table",
    date: "May 10, 2023",
    score: "92%",
    icon: "⚗️",
    status: "completed"
  }
];

const STATS = {
  completed: 12,
  averageScore: 87,
  strongestSubject: "Biology"
};

const Quizzes = () => {
  const [filters, setFilters] = useState({
    subject: '',
    difficulty: ''
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredQuizzes = QUIZZES.filter(quiz => {
    return (
      (!filters.subject || quiz.subject === filters.subject) &&
      (!filters.difficulty || quiz.difficulty === filters.difficulty)
    );
  });

  const handleQuizAction = (action, quizId) => {
    // Temporary demo for Phase 2
    if (action === 'Start') {
      alert(`DEMO: Would navigate to quiz ${quizId} page`);
    } else {
      alert(`DEMO: Would show preview for quiz ${quizId}`);
    }
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <S.Breadcrumbs>
          <S.BreadcrumbLink href="/dashboard">Dashboard</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/quizzes">Quizzes</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/quizzes/selection">Quiz Selection</S.BreadcrumbLink>
        </S.Breadcrumbs>

        <S.PageTitle>Quiz Selection</S.PageTitle>

        <S.SelectionContainer>
          <S.SelectionDescription>
            Choose a subject and difficulty level to begin your assessment
          </S.SelectionDescription>

          <S.SelectionForm>
            <S.SelectionGroup>
              <S.SelectionLabel>Subject</S.SelectionLabel>
              <S.SelectionDropdown
                name="subject"
                value={filters.subject}
                onChange={handleFilterChange}
              >
                <option value="">All Subjects</option>
                <option value="math">Mathematics</option>
                <option value="biology">Biology</option>
                <option value="history">History</option>
              </S.SelectionDropdown>
            </S.SelectionGroup>

            <S.SelectionGroup>
              <S.SelectionLabel>Difficulty</S.SelectionLabel>
              <S.SelectionDropdown
                name="difficulty"
                value={filters.difficulty}
                onChange={handleFilterChange}
              >
                <option value="">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </S.SelectionDropdown>
            </S.SelectionGroup>
          </S.SelectionForm>
        </S.SelectionContainer>

        <S.SectionTitle>Popular Quizzes</S.SectionTitle>
        <S.QuizzesGrid>
          {filteredQuizzes.map(quiz => (
            <S.QuizCard key={quiz.id}>
              <S.QuizIcon>{quiz.icon}</S.QuizIcon>
              <S.QuizTitle>{quiz.title}</S.QuizTitle>
              <S.QuizDescription>{quiz.description}</S.QuizDescription>
              <S.ButtonGroup>
                <S.Button onClick={() => handleQuizAction('Start', quiz.id)}>
                  Start
                </S.Button>
                <S.Button secondary onClick={() => handleQuizAction('Preview', quiz.id)}>
                  Preview
                </S.Button>
              </S.ButtonGroup>
            </S.QuizCard>
          ))}
        </S.QuizzesGrid>

        <S.RecentQuizzesSection>
          <S.SectionTitle>Recent Quizzes</S.SectionTitle>
          {RECENT_QUIZZES.map(quiz => (
            <S.QuizHistoryItem key={quiz.id}>
              <S.QuizHistoryIcon>{quiz.icon}</S.QuizHistoryIcon>
              <S.QuizHistoryContent>
                <S.QuizHistoryTitle>{quiz.title}</S.QuizHistoryTitle>
                <S.QuizHistoryMeta>
                  <S.QuizHistoryDate>{quiz.date}</S.QuizHistoryDate>
                  <S.QuizHistoryScore>Score: {quiz.score}</S.QuizHistoryScore>
                </S.QuizHistoryMeta>
              </S.QuizHistoryContent>
              <S.QuizHistoryActions>
                <S.Button secondary onClick={() => handleQuizAction('Retry', quiz.id)}>
                  Retry
                </S.Button>
                <S.Button onClick={() => handleQuizAction('Review', quiz.id)}>
                  Review
                </S.Button>
              </S.QuizHistoryActions>
            </S.QuizHistoryItem>
          ))}
        </S.RecentQuizzesSection>

        <S.StatisticsSection>
          <S.SectionTitle>Quiz Statistics</S.SectionTitle>
          <S.StatisticsGrid>
            <S.StatCard>
              <S.StatIcon>✓</S.StatIcon>
              <S.StatValue>{STATS.completed}</S.StatValue>
              <S.StatLabel>Quizzes completed this month</S.StatLabel>
            </S.StatCard>
            <S.StatCard>
              <S.StatIcon>📊</S.StatIcon>
              <S.StatValue>{STATS.averageScore}%</S.StatValue>
              <S.StatLabel>Average score</S.StatLabel>
            </S.StatCard>
            <S.StatCard>
              <S.StatIcon>🧪</S.StatIcon>
              <S.StatValue>{STATS.strongestSubject}</S.StatValue>
              <S.StatLabel>Strongest subject</S.StatLabel>
            </S.StatCard>
          </S.StatisticsGrid>
        </S.StatisticsSection>

        <S.RecommendedSection>
          <S.SectionTitle>Recommended for You</S.SectionTitle>
          <S.RecommendedQuiz>
            <S.RecommendedIcon>🔥</S.RecommendedIcon>
            <S.RecommendedContent>
              <S.RecommendedTitle>Physics: Thermodynamics</S.RecommendedTitle>
              <S.RecommendedMeta>
                <S.RecommendedDifficulty>Difficulty: Medium</S.RecommendedDifficulty>
                <S.RecommendedQuestions>20 Questions</S.RecommendedQuestions>
                <S.RecommendedTime>Estimated time: 25 min</S.RecommendedTime>
              </S.RecommendedMeta>
            </S.RecommendedContent>
            <S.RecommendedAction>
              <S.Button onClick={() => handleQuizAction('Start Recommended', 4)}>
                Start
              </S.Button>
            </S.RecommendedAction>
          </S.RecommendedQuiz>
        </S.RecommendedSection>
      </S.Container>
    </>
  );
};

export default Quizzes;