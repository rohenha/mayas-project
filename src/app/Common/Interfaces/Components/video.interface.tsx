export interface IVideoProps { 
    controls: boolean,
    autoplay: boolean,
    loop:boolean,
    muted: boolean,
    sources: any,
    poster: string,
    history: any,
    nextPage: string
}
export interface IVideoState {
    percent: number,
    current: any,
    total: any
}

// tslint:disable-next-line:no-empty-interface
export interface IVideoFooterProps {
    history: any,
    videoState: number,
    nextPage: string,
    duree: {current: any, total: any}
}
// tslint:disable-next-line:no-empty-interface
export interface IVideoFooterState {
    videoDone: boolean
}