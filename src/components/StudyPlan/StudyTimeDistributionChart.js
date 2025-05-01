import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f8f9ff;
  border-radius: 8px;
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DayLabel = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const BarContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Bar = styled.div`
  width: 80%;
  background-color: #6c5ce7;
  border-radius: 4px 4px 0 0;
  height: ${props => props.height}%;
  transition: height 0.3s ease;
`;

const HoursLabel = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
`;

const StudyTimeDistributionChart = ({ data = [] }) => {
  // Default data if none provided
  const chartData = data.length > 0 ? data : [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 1.5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 2 },
    { day: 'Fri', hours: 1 },
    { day: 'Sat', hours: 0.5 },
    { day: 'Sun', hours: 0 }
  ];
  
  // Find maximum hours for scaling
  const maxHours = Math.max(...chartData.map(item => item.hours));
  
  return (
    <ChartContainer>
      <ChartTitle>Weekly Study Time Distribution</ChartTitle>
      
      <ChartGrid>
        {chartData.map((item, index) => (
          <DayColumn key={index}>
            <DayLabel>{item.day}</DayLabel>
            <BarContainer>
              <Bar height={(item.hours / maxHours) * 100} />
            </BarContainer>
            <HoursLabel>{item.hours}h</HoursLabel>
          </DayColumn>
        ))}
      </ChartGrid>
    </ChartContainer>
  );
};

export default StudyTimeDistributionChart;