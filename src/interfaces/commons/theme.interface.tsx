import { IRoute } from 'Interfaces';

export interface ITheme {
  muted: boolean,
  page: IRoute,
  routes: IRoute[],
  setPage: () => any,
  sound: boolean,
  toggleMute: () => any,
  toggleSound: () => any
}
