import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyle from './styles/globalStyles'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
