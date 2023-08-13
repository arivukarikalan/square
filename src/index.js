import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* src/index.css */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import AOS from 'aos';
import 'aos/dist/aos.css';


// Initialize AOS
AOS.init({
  duration: 800,  // Duration of animations in milliseconds
  easing: 'ease-in-out',  // Easing for animations
  once: true
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

