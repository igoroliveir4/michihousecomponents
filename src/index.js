// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderComponentUsage = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

export { default as Button } from './components/atoms/Button';
export { default as GenericForm } from './components/molecules/GenericForm';

renderComponentUsage();
