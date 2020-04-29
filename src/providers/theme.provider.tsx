/* tslint:disable:no-empty */
import * as React from 'react';

export const ThemeContext = React.createContext({
  muted: false,
  page: {},
  routes: [],
  setPage: () => {},
  sound: true,
  toggleMute: () => {},
  toggleSound: () => {}
});
