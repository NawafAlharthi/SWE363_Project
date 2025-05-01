import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import api from '../../config/api';
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
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAddQuizModalOpen, setIsAddQuizModalOpen] = useState(false);

  // Fetch quizzes when component mounts
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      setLoading(true);
      const response = await api.get('/quizzes');
      setQuizzes(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load quizzes');
      console.error('Error fetching quizzes:', err);
      setLoading(false);
    }
  };

  const handleAddQuiz = async (quizData) => {
    try {
      setLoading(true);
      const response = await api.post('/quizzes/add', quizData);
      setQuizzes(prev => [...prev, response.data]);
      setIsAddQuizModalOpen(false);
      setLoading(false);
    } catch (err) {
      setError('Failed to create quiz');
      console.error('Error creating quiz:', err);
      setLoading(false);
    }
  };

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(null);
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    const totalQuestions = selectedQuiz.questions.length;
    let correctAnswers = 0;

    selectedQuiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = (correctAnswers / totalQuestions) * 100;
    setScore(finalScore);
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <S.Breadcrumbs>
          <S.BreadcrumbLink href="/dashboard">Dashboard</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/quizzes">Quizzes</S.BreadcrumbLink>
        </S.Breadcrumbs>

        <S.PageTitle>
          {selectedQuiz ? selectedQuiz.title : 'Available Quizzes'}
        </S.PageTitle>

        {error && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
        )}

        {!selectedQuiz ? (
          // Quiz List View
          <>
            <S.Button onClick={() => setIsAddQuizModalOpen(true)}>
              Create New Quiz
            </S.Button>
            
            {loading ? (
              <p>Loading quizzes...</p>
            ) : quizzes.length === 0 ? (
              <p>No quizzes available. Create your first quiz!</p>
            ) : (
              <S.QuizGrid>
                {quizzes.map((quiz) => (
                  <S.QuizCard key={quiz._id}>
                    <S.QuizTitle>{quiz.title}</S.QuizTitle>
                    <S.QuizDescription>{quiz.description}</S.QuizDescription>
                    <S.QuizInfo>
                      {quiz.questions.length} questions
                    </S.QuizInfo>
                    <S.Button onClick={() => handleStartQuiz(quiz)}>
                      Start Quiz
                    </S.Button>
                  </S.QuizCard>
                ))}
              </S.QuizGrid>
            )}
          </>
        ) : (
          // Quiz Taking View
          <>
            <S.Button onClick={() => setSelectedQuiz(null)}>
              Back to Quizzes
            </S.Button>

            {score !== null ? (
              // Quiz Results View
              <S.ResultsContainer>
                <S.ResultsTitle>Quiz Complete!</S.ResultsTitle>
                <S.Score>Your Score: {score.toFixed(1)}%</S.Score>
                <S.Button onClick={() => {
                  setSelectedQuiz(null);
                  setScore(null);
                }}>
                  Return to Quizzes
                </S.Button>
              </S.ResultsContainer>
            ) : (
              // Quiz Question View
              <>
                <S.QuestionContainer>
                  <S.QuestionNumber>
                    Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
                  </S.QuestionNumber>
                  <S.QuestionText>
                    {selectedQuiz.questions[currentQuestionIndex].question}
                  </S.QuestionText>
                  <S.AnswersList>
                    {selectedQuiz.questions[currentQuestionIndex].options.map((option, index) => (
                      <S.AnswerOption
                        key={index}
                        selected={userAnswers[currentQuestionIndex] === index}
                        onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
                      >
                        {option}
                      </S.AnswerOption>
                    ))}
                  </S.AnswersList>
                </S.QuestionContainer>

                <S.NavigationButtons>
                  <S.Button
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </S.Button>
                  {currentQuestionIndex === selectedQuiz.questions.length - 1 ? (
                    <S.Button onClick={handleSubmitQuiz}>
                      Submit Quiz
                    </S.Button>
                  ) : (
                    <S.Button onClick={handleNextQuestion}>
                      Next
                    </S.Button>
                  )}
                </S.NavigationButtons>
              </>
            )}
          </>
        )}

        {/* Add Quiz Modal */}
        {isAddQuizModalOpen && (
          <S.Modal>
            <S.ModalContent>
              <h2>Create New Quiz</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                const questions = [{
                  question: e.target.question.value,
                  options: [
                    e.target.option1.value,
                    e.target.option2.value,
                    e.target.option3.value,
                    e.target.option4.value
                  ],
                  correctAnswer: parseInt(e.target.correctAnswer.value)
                }];
                
                handleAddQuiz({
                  title: e.target.title.value,
                  description: e.target.description.value,
                  questions: questions
                });
              }}>
                <S.Input
                  name="title"
                  placeholder="Quiz Title"
                  required
                />
                <S.TextArea
                  name="description"
                  placeholder="Quiz Description"
                  required
                />
                <S.Input
                  name="question"
                  placeholder="Question"
                  required
                />
                <S.Input
                  name="option1"
                  placeholder="Option 1"
                  required
                />
                <S.Input
                  name="option2"
                  placeholder="Option 2"
                  required
                />
                <S.Input
                  name="option3"
                  placeholder="Option 3"
                  required
                />
                <S.Input
                  name="option4"
                  placeholder="Option 4"
                  required
                />
                <S.Input
                  name="correctAnswer"
                  type="number"
                  min="0"
                  max="3"
                  placeholder="Correct Answer (0-3)"
                  required
                />
                <S.Button type="submit" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Quiz'}
                </S.Button>
                <S.Button 
                  type="button" 
                  onClick={() => setIsAddQuizModalOpen(false)}
                >
                  Cancel
                </S.Button>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}
      </S.Container>
    </>
  );
};

export default Quizzes;