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
  class: string,
  container: boolean,
  content: any[],
  exactUrl: boolean,
  isExperience: boolean,
  isPage: boolean,
  pageName: string,
  title: string,
  url: string
}

export interface IExperience extends IRoute {
  chapter: number,
  codex: ICodexData[],
  hasParent: string,
  map: IMapPosition,
  nextChapter: string,
  point: IPoint,
}

export interface IContainerState {
  muted: boolean,
  page: IRoute | IExperience,
  routes: IRoute | IExperience[],
  sound: boolean
}
