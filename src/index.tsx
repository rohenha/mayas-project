// Imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Styles
import './index.sass';

// Components
import registerServiceWorker from './registerServiceWorker';
import Router from './router';

ReactDOM.render(
  <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
