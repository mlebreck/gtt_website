import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import reportWebVitals from './reportWebVitals';

const Root = () => {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
