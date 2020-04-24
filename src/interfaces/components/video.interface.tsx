export interface IVideoProps {
    controls: boolean,
    autoplay: boolean,
    loop:boolean,
    muted: boolean,
    sources: any,
    poster: string,
    history: any,
    nextPage: string,
    cover: boolean
    subtitles: string
}
export interface IVideoState {
    controls: boolean,
    percent: number,
    current: any,
    total: any
}

// tslint:disable-next-line:no-empty-interface
export interface IControlsProps {
    history: any,
    videoState: number,
    nextPage: string,
    duree: {current: any, total: any},
    video: React.RefObject<HTMLVideoElement>,
    fullscreen: boolean
}
// tslint:disable-next-line:no-empty-interface
export interface IControlsState {
    videoDone: boolean
}
