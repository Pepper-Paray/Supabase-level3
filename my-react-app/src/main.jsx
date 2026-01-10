import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import '@styles/main.scss';
import App from '@/App.jsx';

import { ThemeProvider } from '@/providers/themeProvider';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component inside StrictMode
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark'>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

// The above code initializes the React application by rendering the App component wrapped 
// in a ThemeProvider for theme management and StrictMode for highlighting potential issues in the application.
// The ThemeProvider is set with a default theme of 'dark', allowing the app to manage and switch themes effectively.
