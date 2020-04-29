import { ICodexData } from 'Interfaces';

export interface IComponent {
  component: string,
  content: any
}

export interface IContent {
    content: any,
    type: string
}

export interface IMapPosition {
  x: string,
  y: string
}

export interface IPoint {
  path: number,
  x: number,
  y: number
}

export interface IRoute {
  ambiant: string,
  animation: string,
  chapter: number,
  class: string,
  codex: ICodexData[],
  container: boolean,
  content: any[],
  exactUrl: boolean,
  hasParent: '',
  isExperience: boolean,
  isPage: boolean,
  map: IMapPosition,
  nextChapter: string,
  pageName: string,
  point: IPoint,
  title: string,
  url: string
}

export interface IContainerState {
  muted: boolean,
  page: IRoute,
  routes: IRoute[],
  sound: boolean
}
