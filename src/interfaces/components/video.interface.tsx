export interface IVideoState {
    controls: boolean,
    percent: number,
    current: any,
    total: any
}

export interface IControlsProps {
    history: any,
    videoState: number,
    nextPage: string,
    duree: {current: any, total: any},
    video: React.RefObject<HTMLVideoElement>,
    fullscreen: boolean
}

export interface IControlsState {
    videoDone: boolean
}
