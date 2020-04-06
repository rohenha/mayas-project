// Imports
import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Styles

// Components
import Layout from './app/layout';

export default class Router extends React.Component {

  public render(): React.ReactElement<any> {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Layout}  />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
