import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  background: transparent;
  padding: 0;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(108, 101, 231, 0.08);
  height: 220px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const StudyTimeDistributionChart = ({ subjects }) => {
  // Calculate total study time for each subject
  const data = subjects.map(subject => ({
    name: subject.name,
    time: subject.topics.reduce((sum, topic) => sum + topic.allocatedTime, 0)
  }));

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} style={{ background: 'transparent' }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ef" />
          <XAxis dataKey="name" stroke="#888" tick={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', fontSize: 14 }} />
          <YAxis 
            label={{ value: 'Hours', angle: -90, position: 'insideLeft', offset: 10, dy: 10, style: { fill: '#888', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', fontSize: 14 } }} 
            tick={{ dx: -2, fill: '#888', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', fontSize: 14 }}
            stroke="#888"
            axisLine={{ stroke: '#e0e7ef' }}
          />
          <Tooltip 
            contentStyle={{ borderRadius: 8, fontFamily: 'Inter, Segoe UI, Arial, sans-serif', fontSize: 14 }}
            formatter={(value) => [`${value} hours`, 'Study Time']}
            labelFormatter={(label) => `Subject: ${label}`}
          />
          <Bar dataKey="time" fill="#6c5ce7" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StudyTimeDistributionChart;