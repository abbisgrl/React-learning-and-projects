import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = document.getElementById('root');

// ReactDOM.render(App,root);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

