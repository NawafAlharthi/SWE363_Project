import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  background: white;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChartTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: #333;
  text-align: center;
`;

const StudyTimeDistributionChart = ({ subjects }) => {
  // Calculate total study time for each subject
  const data = subjects.map(subject => ({
    name: subject.name,
    time: subject.topics.reduce((sum, topic) => sum + topic.allocatedTime, 0)
  }));

  return (
    <ChartContainer>
      <ChartTitle>Study Time Distribution</ChartTitle>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            label={{ value: 'Hours', angle: -90, position: 'insideLeft', offset: 10, dy: 10 }} 
            tick={{ dx: -2 }}
          />
          <Tooltip 
            formatter={(value) => [`${value} hours`, 'Study Time']}
            labelFormatter={(label) => `Subject: ${label}`}
          />
          <Bar dataKey="time" fill="#4a90e2" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StudyTimeDistributionChart;