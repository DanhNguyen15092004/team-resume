import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Content from './Components/Content/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Content />
        <Info/>
  </React.StrictMode>
);
reportWebVitals();
