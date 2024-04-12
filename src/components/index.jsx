import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import components from './components';

const Component = components[window.initState.componentName];

ReactDOM.hydrate(
  <App {...window.initState}>
    <Component {...window.initState} />
  </App>,
  document.getElementById('root')
);

delete window.initState;
