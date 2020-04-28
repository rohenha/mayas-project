/* tslint:disable:no-empty */
import * as React from 'react';

export const ThemeContext = React.createContext({
  page: {},
  routes: [],
  setPage: () => {},
  sound: true,
  toggleSound: () => {}
});
