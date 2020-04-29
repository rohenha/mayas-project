/* tslint:disable:no-empty */
import { IRoute, ITheme } from 'Interfaces';
import * as React from 'react';

export const PageBase: IRoute = {
  ambiant: '',
  animation: '',
  chapter: 0,
  class: '',
  codex: [],
  container: false,
  content: [],
  exactUrl: false,
  hasParent: '',
  isExperience: false,
  isPage: false,
  map: {
    x: '',
    y: ''
  },
  nextChapter: '',
  pageName: '',
  point: {
    path: 0,
    x: 0,
    y: 0
  },
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
