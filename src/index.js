import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';

// Theme configuration for styled-components
const theme = {
  primary: '#6c5ce7',
  secondary: '#a29bfe',
  success: '#00b894',
  warning: '#fdcb6e',
  danger: '#d63031',
  light: '#f8f9ff',
  dark: '#333333',
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#999999'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);