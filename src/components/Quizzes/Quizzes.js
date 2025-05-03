import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import api from '../../config/api';
import * as S from './Quizzes.styles';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastQuizStats, setLastQuizStats] = useState(null);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);
  const [aiParams, setAiParams] = useState({
    title: '',
    topic: '',
    numQuestions: 10
  });
  const [manualQuizData, setManualQuizData] = useState({
    title: '',
    description: '',
    numQuestions: 1,
    questions: [{
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    }]
  });

  // Fetch quizzes
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const response = await api.get('/quizzes');
        setQuizzes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load quizzes');
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  // AI Quiz Generation
  const handleGenerateAIQuiz = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post('/quizzes/generate', aiParams);
      setQuizzes(prev => [...prev, response.data]);
      setModalOpen(null);
      setError(null);
    } catch (err) {
      setError(err.response?.data || 'Failed to generate quiz');
    } finally {
      setLoading(false);
    }
  };

  // Manual Quiz Creation
  const handleAddManualQuiz = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post('/quizzes/add', {
        title: manualQuizData.title,
        description: manualQuizData.description,
        questions: manualQuizData.questions
      });
      setQuizzes(prev => [...prev, response.data]);
      setModalOpen(null);
      setError(null);
    } catch (err) {
      setError('Failed to create quiz');
    } finally {
      setLoading(false);
    }
  };

  // Quiz taking handlers
  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(null);
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setUserAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
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

    // Store last quiz stats
    setLastQuizStats({
      title: selectedQuiz.title,
      topic: selectedQuiz.description || 'General',
      numQuestions: totalQuestions,
      score: finalScore
    });
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <S.Breadcrumbs>
          <S.BreadcrumbLink href="/dashboard">Dashboard</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/quizzes">Quizzes</S.BreadcrumbLink>
          {!selectedQuiz && <>
            <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
            <S.BreadcrumbLink href="/quizzes/selection">Quiz Selection</S.BreadcrumbLink>
          </>}
        </S.Breadcrumbs>

        <S.PageTitle>
          {selectedQuiz ? selectedQuiz.title : 'Quiz Selection'}
        </S.PageTitle>

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

        {!selectedQuiz ? (
          // Quiz Selection View
          <>
            <S.ButtonGroup>
              <S.Button onClick={() => setModalOpen('manual')}>
                Create Manual Quiz
              </S.Button>
              <S.Button onClick={() => setModalOpen('ai')}>
                Generate AI Quiz
              </S.Button>
            </S.ButtonGroup>

            {loading ? (
              <S.LoadingMessage>Loading quizzes...</S.LoadingMessage>
            ) : quizzes.length === 0 ? (
              <S.InfoMessage>No quizzes available. Create one!</S.InfoMessage>
            ) : (
              <>
                <S.SectionTitle>Available Quizzes</S.SectionTitle>
                <S.QuizzesGrid>
                  {quizzes.map(quiz => (
                    <S.QuizCard key={quiz._id}>
                      <S.QuizIcon>📝</S.QuizIcon>
                      <S.QuizTitle>{quiz.title}</S.QuizTitle>
                      {quiz.description && (
                        <S.QuizDescription>{quiz.description}</S.QuizDescription>
                      )}
                      <S.QuizMeta>
                        <span>{quiz.questions.length} questions</span>
                        <span>Created: {new Date(quiz.createdAt).toLocaleDateString()}</span>
                      </S.QuizMeta>
                      <S.ButtonGroup>
                        <S.Button onClick={() => handleStartQuiz(quiz)}>
                          Start
                        </S.Button>
                      </S.ButtonGroup>
                    </S.QuizCard>
                  ))}
                </S.QuizzesGrid>
                {lastQuizStats && (
                  <>
                    <S.SectionTitle>Last Quiz Statistics</S.SectionTitle>
                    <S.StatisticsGrid>
                      <S.StatCard>
                        <S.StatTitle>Quiz Title</S.StatTitle>
                        <S.StatValue>{lastQuizStats.title}</S.StatValue>
                      </S.StatCard>

                      <S.StatCard>
                        <S.StatTitle>Topic</S.StatTitle>
                        <S.StatValue>{lastQuizStats.topic}</S.StatValue>
                      </S.StatCard>

                      <S.StatCard>
                        <S.StatTitle>Questions</S.StatTitle>
                        <S.StatValue>{lastQuizStats.numQuestions}</S.StatValue>
                      </S.StatCard>

                      <S.StatCard>
                        <S.StatTitle>Score</S.StatTitle>
                        <S.StatValue>{lastQuizStats.score.toFixed(1)}%</S.StatValue>
                      </S.StatCard>
                    </S.StatisticsGrid>
                  </>
                )}
              </>
            )}
          </>
        ) : (
          // Quiz Taking View
          <>
            <S.Button onClick={() => setSelectedQuiz(null)}>
              Back to Quizzes
            </S.Button>

            {score !== null ? (
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
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </S.Button>
                  {currentQuestionIndex === selectedQuiz.questions.length - 1 ? (
                    <S.Button onClick={handleSubmitQuiz}>
                      Submit Quiz
                    </S.Button>
                  ) : (
                    <S.Button onClick={() => setCurrentQuestionIndex(prev => prev + 1)}>
                      Next
                    </S.Button>
                  )}
                </S.NavigationButtons>
              </>
            )}
          </>
        )}

        {/* AI Generation Modal */}
        {modalOpen === 'ai' && (
          <S.Modal>
            <S.ModalContent>
              <h2>Generate AI Quiz</h2>
              <form onSubmit={handleGenerateAIQuiz}>
                <S.FormGroup>
                  <label>Quiz Title</label>
                  <S.Input
                    value={aiParams.title}
                    onChange={e => setAiParams({ ...aiParams, title: e.target.value })}
                    required
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Quiz Topic</label>
                  <S.Input
                    value={aiParams.topic}
                    onChange={e => setAiParams({ ...aiParams, topic: e.target.value })}
                    placeholder="e.g., Quantum Physics"
                    required
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Number of Questions (5-20)</label>
                  <S.Input
                    type="number"
                    min="5"
                    max="20"
                    value={aiParams.numQuestions}
                    onChange={e => setAiParams({
                      ...aiParams,
                      numQuestions: Math.min(20, Math.max(5, e.target.value))
                    })}
                    required
                  />
                </S.FormGroup>

                <S.ButtonGroup>
                  <S.Button type="submit" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Quiz'}
                  </S.Button>
                  <S.Button type="button" onClick={() => setModalOpen(null)}>
                    Cancel
                  </S.Button>
                </S.ButtonGroup>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}

        {/* Manual Creation Modal */}
        {modalOpen === 'manual' && (
          <S.Modal>
            <S.ModalContent>
              <h2>Create Manual Quiz</h2>
              <form onSubmit={handleAddManualQuiz}>
                <S.FormGroup>
                  <label>Quiz Title</label>
                  <S.Input
                    value={manualQuizData.title}
                    onChange={e => setManualQuizData({ ...manualQuizData, title: e.target.value })}
                    required
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Description</label>
                  <S.Input
                    value={manualQuizData.description}
                    onChange={e => setManualQuizData({ ...manualQuizData, description: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Number of Questions</label>
                  <S.Input
                    type="number"
                    min="1"
                    max="20"
                    value={manualQuizData.numQuestions}
                    onChange={e => {
                      const num = Math.max(1, Math.min(20, e.target.value));
                      const questions = [...manualQuizData.questions];
                      while (questions.length < num) questions.push({ question: '', options: ['', '', '', ''], correctAnswer: 0 });
                      while (questions.length > num) questions.pop();
                      setManualQuizData({ ...manualQuizData, numQuestions: num, questions });
                    }}
                    required
                  />
                </S.FormGroup>

                {manualQuizData.questions.map((q, qIndex) => (
                  <div key={qIndex} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <S.FormGroup>
                      <label>Question {qIndex + 1}</label>
                      <S.Input
                        value={q.question}
                        onChange={e => {
                          const newQuestions = [...manualQuizData.questions];
                          newQuestions[qIndex].question = e.target.value;
                          setManualQuizData({ ...manualQuizData, questions: newQuestions });
                        }}
                        required
                      />
                    </S.FormGroup>

                    {[0, 1, 2, 3].map((index) => (
                      <S.FormGroup key={index}>
                        <label>Option {index + 1}</label>
                        <S.Input
                          value={q.options[index]}
                          onChange={e => {
                            const newQuestions = [...manualQuizData.questions];
                            newQuestions[qIndex].options[index] = e.target.value;
                            setManualQuizData({ ...manualQuizData, questions: newQuestions });
                          }}
                          required
                        />
                      </S.FormGroup>
                    ))}

                    <S.FormGroup>
                      <label>Correct Answer (0-3)</label>
                      <S.Input
                        type="number"
                        min="0"
                        max="3"
                        value={q.correctAnswer}
                        onChange={e => {
                          const newQuestions = [...manualQuizData.questions];
                          newQuestions[qIndex].correctAnswer = parseInt(e.target.value);
                          setManualQuizData({ ...manualQuizData, questions: newQuestions });
                        }}
                        required
                      />
                    </S.FormGroup>
                  </div>
                ))}

                <S.ButtonGroup>
                  <S.Button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Quiz'}
                  </S.Button>
                  <S.Button type="button" onClick={() => setModalOpen(null)}>
                    Cancel
                  </S.Button>
                </S.ButtonGroup>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}
      </S.Container>
    </>
  );
};

export default Quizzes;