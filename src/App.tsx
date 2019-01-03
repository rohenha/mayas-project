// Imports
import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './App.scss';

// Components
// import { Footer } from 'Components';
import Base from './app/Base';

export default class App extends React.Component {
  public render(): React.ReactElement<any> {
    return (
      <BrowserRouter>
        <React.Fragment>
          {/* <Header /> */}
          <Route path="/" component={Base}  />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}