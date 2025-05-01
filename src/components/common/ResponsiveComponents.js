import React from 'react';
import styled from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`
};

const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  ${media.desktop} {
    max-width: 100%;
  }
  
  ${media.tablet} {
    padding: 0 1.5rem;
  }
  
  ${media.mobile} {
    padding: 0 1rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  gap: ${props => props.gap || '0'};
  
  ${media.tablet} {
    flex-direction: ${props => props.tabletColumn ? 'column' : props.column ? 'column' : 'row'};
  }
  
  ${media.mobile} {
    flex-direction: ${props => props.mobileColumn ? 'column' : props.tabletColumn ? 'column' : props.column ? 'column' : 'row'};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  gap: ${props => props.gap || '1rem'};
  
  ${media.tablet} {
    grid-template-columns: repeat(${props => props.tabletColumns || 6}, 1fr);
  }
  
  ${media.mobile} {
    grid-template-columns: repeat(${props => props.mobileColumns || 4}, 1fr);
  }
`;

const Button = styled.button`
  background-color: ${props => props.secondary ? 'transparent' : props.theme.primary || '#6c5ce7'};
  color: ${props => props.secondary ? props.theme.primary || '#6c5ce7' : 'white'};
  border: ${props => props.secondary ? `1px solid ${props.theme.primary || '#6c5ce7'}` : 'none'};
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? '#f0f0ff' : '#5a4ad1'};
  }
  
  ${media.mobile} {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const Card = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  ${media.mobile} {
    padding: 1rem;
  }
`;

const Typography = {
  H1: styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
    
    ${media.tablet} {
      font-size: 2rem;
    }
    
    ${media.mobile} {
      font-size: 1.8rem;
    }
  `,
  H2: styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #333;
    
    ${media.tablet} {
      font-size: 1.6rem;
    }
    
    ${media.mobile} {
      font-size: 1.4rem;
    }
  `,
  H3: styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
    
    ${media.tablet} {
      font-size: 1.3rem;
    }
    
    ${media.mobile} {
      font-size: 1.2rem;
    }
  `,
  Body: styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    
    ${media.mobile} {
      font-size: 0.9rem;
    }
  `,
  Small: styled.span`
    font-size: 0.9rem;
    color: #666;
    
    ${media.mobile} {
      font-size: 0.8rem;
    }
  `
};

export {
  ResponsiveContainer,
  FlexContainer,
  Grid,
  Button,
  Card,
  Typography,
  media,
  breakpoints
};
