import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import ConfigStore from './store/ConfigProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigStore>
    <App />
  </ConfigStore>

);

