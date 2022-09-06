import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import("vivid-studio").then((v) => v.run());
import("vivid-studio/style");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
