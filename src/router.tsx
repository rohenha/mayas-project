// Imports
import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Styles

// Components
import { ContainerComponent } from 'Components';
import Layout from './layout';


export default class Router extends React.Component {

  public render(): React.ReactElement<any> {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ContainerComponent>
          <Route path="/" component={Layout}  />
        </ContainerComponent>
      </BrowserRouter>
    );
  }
}
