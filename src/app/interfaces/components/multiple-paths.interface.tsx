import { IImage } from 'Interfaces';
// tslint:disable-next-line:no-empty-interface
export interface IMultiplePathsState {
    hover : string,
    screenSize: number
}

export interface IMultiplePath {
    image: IImage,
    name: string,
    url: string
}
