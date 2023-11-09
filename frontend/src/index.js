// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App'; // Import the App component

// Find the root element in your HTML
const container = document.getElementById('root');

// Create a root.
const root = createRoot(container); // Create a root for your application

// Initial render: Render the App component to the root.
root.render(
  <React.StrictMode>
    <App /> {/* Render App component */}
  </React.StrictMode>
);
