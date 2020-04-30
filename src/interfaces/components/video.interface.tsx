export interface IVideoState {
  controls: boolean,
  percent: number,
  current: string,
  total: string
}

export interface ISource {
  path: string,
  type: string
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
