import { IImage } from 'Interfaces';

export interface IMultiplePathsState {
  hover: string,
  screenSize: number
}

export interface IMultiplePath {
  image: IImage,
  name: string,
  url: string
}
