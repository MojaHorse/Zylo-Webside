import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary';
import { logError } from './utils/logger';

// Global error handlers
const originalConsoleError = console.error;
console.error = (...args) => {
  originalConsoleError(...args);
  if (args[0] && typeof args[0] === 'string' && args[0].includes('FATAL LOGGER ERROR')) return;
  const errorMsg = args.map(a => {
    try { return typeof a === 'object' ? JSON.stringify(a) : String(a); }
    catch(e) { return String(a); }
  }).join(' ');
  logError(new Error(errorMsg), 'Global console.error intercept', 'error');
};

window.addEventListener('error', (event) => {
  logError(event.error || new Error(event.message), 'Uncaught Window Error', 'critical');
});

window.addEventListener('unhandledrejection', (event) => {
  logError(event.reason || new Error('Unhandled Promise Rejection'), 'Unhandled Promise Rejection', 'critical');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
