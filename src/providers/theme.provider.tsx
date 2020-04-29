/* tslint:disable:no-empty */
import { ITheme } from 'Interfaces';
import * as React from 'react';

export const ThemeContext = React.createContext<ITheme>({
  muted: false,
  page: {
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
  },
  routes: [],
  setPage: () => {},
  sound: true,
  toggleMute: () => {},
  toggleSound: () => {}
});
