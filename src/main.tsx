import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Assuming you have Tailwind in this file
import './i18n'; // Import the i18n configuration to set up translations

// Create the root element and render the app inside it
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
