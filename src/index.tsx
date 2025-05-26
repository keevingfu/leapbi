import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthWrapper from './AuthWrapper';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthWrapper />
  </React.StrictMode>
);