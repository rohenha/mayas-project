import { IRoute } from 'Interfaces';

export interface ITheme {
  muted: boolean,
  page: IRoute,
  routes: IRoute[],
  setPage: (page: IRoute) => void,
  sound: boolean,
  toggleMute: (newValue: boolean) => void,
  toggleSound: (sound: boolean) => void
}
