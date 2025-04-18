import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import * as S from './Flashcards.styles';

const SUBJECTS = {
  biology: [
    {
      question: "What is photosynthesis?",
      answer: "Process by which plants convert light energy to chemical energy.",
      hint: "Think about chloroplasts"
    },
    {
      question: "What is mitosis?",
      answer: "Cell division process resulting in two identical daughter cells.",
      hint: "Cell reproduction"
    }
  ],
  chemistry: [
    {
      question: "What is Avogadro's number?",
      answer: "6.022 × 10²³ particles/mole",
      hint: "Mole concept"
    }
  ],
  physics: [
    {
      question: "Newton's first law?",
      answer: "An object at rest stays at rest unless acted upon.",
      hint: "Inertia"
    }
  ]
};

const Flashcards = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [assessment, setAssessment] = useState(null);
  const [flashcards, setFlashcards] = useState(SUBJECTS.biology);
  const [selectedSubject, setSelectedSubject] = useState('biology');

  const totalCards = flashcards.length;

  const handleFlip = () => setFlipped(!flipped);
  
  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false);
      setAssessment(null);
    }
  };
  
  const handleNext = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFlipped(false);
      setAssessment(null);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentCardIndex(0);
    // alert('Cards shuffled!');
  };

  const handleCreateFlashcard = () => {
    const question = prompt('Enter question:');
    if (!question) return;
    
    const answer = prompt('Enter answer:');
    if (!answer) return;
    
    const hint = prompt('Enter hint (optional):') || 'Tap to reveal answer';
    
    const newCard = { question, answer, hint };
    setFlashcards([...flashcards, newCard]);
    setCurrentCardIndex(flashcards.length);
    // alert('New flashcard added!');
  };

  const handleStudySubject = (subject) => {
    const confirm = window.confirm(`Load ${subject} flashcards?`);
    if (confirm) {
      setSelectedSubject(subject);
      setFlashcards(SUBJECTS[subject]);
      setCurrentCardIndex(0);
      // alert(`Loaded ${subject} cards!`);
    }
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <S.Breadcrumbs>
          <S.BreadcrumbLink href="/home">Home</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/flashcards">Flashcards</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/flashcards/biology">Biology</S.BreadcrumbLink>
        </S.Breadcrumbs>

        <S.PageTitle>{selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)} Flashcards</S.PageTitle>
        <S.FlashcardProgress>Progress: 12/{totalCards} mastered</S.FlashcardProgress>

        <S.FlashcardControls>
          <S.ControlButton onClick={shuffleCards}>Shuffle</S.ControlButton>
          {/* <S.ControlButton>Filter</S.ControlButton> */}
        </S.FlashcardControls>

        <S.FlashcardContainer onClick={handleFlip}>
          <S.FlashcardInner flipped={flipped}>
            <S.FlashcardFront>
              <S.FlashcardQuestion>
                {flashcards[currentCardIndex]?.question}
              </S.FlashcardQuestion>
              <S.FlashcardHint>
                {flashcards[currentCardIndex]?.hint}
              </S.FlashcardHint>
            </S.FlashcardFront>
            <S.FlashcardBack>
              <S.FlashcardAnswer>
                {flashcards[currentCardIndex]?.answer}
              </S.FlashcardAnswer>
            </S.FlashcardBack>
          </S.FlashcardInner>
        </S.FlashcardContainer>

        <S.FlashcardNavigation>
          <S.NavButton onClick={handlePrevious} disabled={currentCardIndex === 0}>
            Previous
          </S.NavButton>
          <S.CardCounter>
            Card {currentCardIndex + 1} of {totalCards}
          </S.CardCounter>
          <S.NavButton primary onClick={handleNext} disabled={currentCardIndex === totalCards - 1}>
            Next
          </S.NavButton>
        </S.FlashcardNavigation>

        <S.SelfAssessmentSection>
          <S.SectionTitle>Self-Assessment</S.SectionTitle>
          <S.AssessmentButtons>
            <S.AssessmentButton 
              type="need-review" 
              active={assessment === 'need-review'}
              onClick={() => setAssessment('need-review')}
            >
              Need Review
            </S.AssessmentButton>
            <S.AssessmentButton 
              type="almost" 
              active={assessment === 'almost'}
              onClick={() => setAssessment('almost')}
            >
              Almost There
            </S.AssessmentButton>
            <S.AssessmentButton 
              type="known" 
              active={assessment === 'known'}
              onClick={() => setAssessment('known')}
            >
              Known
            </S.AssessmentButton>
          </S.AssessmentButtons>
        </S.SelfAssessmentSection>

        <S.SubjectSelectionSection>
          <S.SectionTitle>Subject Selection</S.SectionTitle>
          <S.SubjectsGrid>
            {Object.keys(SUBJECTS).map((subject) => (
              <S.SubjectCard key={subject}>
                <S.SubjectIcon>
                  {subject === 'biology' && '🧬'}
                  {subject === 'chemistry' && '⚗️'}
                  {subject === 'physics' && '⚛️'}
                </S.SubjectIcon>
                <S.SubjectTitle>
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </S.SubjectTitle>
                <S.SubjectCount>{SUBJECTS[subject].length} cards</S.SubjectCount>
                <S.NavButton primary onClick={() => handleStudySubject(subject)}>
                  Study
                </S.NavButton>
              </S.SubjectCard>
            ))}

            <S.CreateCustomSection>
              <S.CreateIcon>+</S.CreateIcon>
              <S.CreateTitle>Create Custom</S.CreateTitle>
              <S.CreateDescription>Make your own flashcards</S.CreateDescription>
              <S.CreateButton onClick={handleCreateFlashcard}>
                Create
              </S.CreateButton>
            </S.CreateCustomSection>
          </S.SubjectsGrid>
        </S.SubjectSelectionSection>
      </S.Container>
    </>
  );
};

export default Flashcards;