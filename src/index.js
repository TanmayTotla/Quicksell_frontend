import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing React DOM for rendering
import './index.css'; // Importing global CSS styles
import App from './App'; // Importing main App component
import reportWebVitals from './reportWebVitals'; // Importing performance measurement function

// Create a root for the React application
const appRoot = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component inside the root element
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure app performance by logging or sending metrics to an endpoint
reportWebVitals();
