import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Content from './Components/Content/Content';
import DarkMode from './Components/DarkMode/DarkMode';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Components/WindowSizeListener/store'; // Correct store import
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Content />
      <DarkMode />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
