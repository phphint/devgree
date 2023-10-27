 

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';  // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Render App component */}
  </React.StrictMode>,
  document.getElementById('root')
);
