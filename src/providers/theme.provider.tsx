/* tslint:disable:no-empty */
import { IRoute, ITheme } from 'Interfaces';
import * as React from 'react';

export const PageBase: IRoute = {
  ambiant: '',
  animation: '',
  class: '',
  container: false,
  content: [],
  exactUrl: false,
  isExperience: false,
  isPage: false,
  pageName: '',
  title: '',
  url: ''
};

export const ThemeContext = React.createContext<ITheme>({
  muted: false,
  page: PageBase,
  routes: [],
  setPage: () => {},
  sound: true,
  toggleMute: () => {},
  toggleSound: () => {}
});
