import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 6rem;
  background-color: #f8f9ff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const HeroImage = styled.div`
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection>
        <HeroContent>
          <HeroTitle>Study Smarter, Not Harder!</HeroTitle>
          <HeroSubtitle>
            Your AI-powered study companion that adapts to your learning style and helps you achieve academic success.
          </HeroSubtitle>
        </HeroContent>
        <HeroImage>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-big-books-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--boy-learning-online-education-using-study-attending-class-back-to-school-pack-illustrations-4779537.png"
            alt="Student studying with laptop"
          />
        </HeroImage>
      </HeroSection>
    </Container>
  );
};
