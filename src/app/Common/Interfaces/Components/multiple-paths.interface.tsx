// tslint:disable-next-line:no-empty-interface
export interface IMultiplePathsProps {
    paths: IMultiplePath[]
}
// tslint:disable-next-line:no-empty-interface
export interface IMultiplePathsState {
    hover : number,
    toggleHover: boolean,
    windowWidth: number
}

export interface IMultiplePath {
    img: string,
    name: string,
    url: string
}
