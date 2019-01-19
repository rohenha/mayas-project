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

// tslint:disable-next-line:no-empty-interface
export interface ISubFolderProps {
    paths: IMultiplePath[]
}
// tslint:disable-next-line:no-empty-interface
export interface ISubFolderState {
}

export interface IMultiplePath {
    img: string,
    name: string,
    url: string
}
