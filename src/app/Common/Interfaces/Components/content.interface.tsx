// tslint:disable-next-line:no-empty-interface
export interface IQuoteImgProps {
    imgs: string[],
    top: boolean
}
// tslint:disable-next-line:no-empty-interface
export interface IQuoteImgState {
}

// tslint:disable-next-line:no-empty-interface
export interface IEntryChapterProps {
    imgs: string[],
    text: string,
    video: boolean,
    history: any
}
// tslint:disable-next-line:no-empty-interface
export interface IEntryChapterState {
}

// tslint:disable-next-line:no-empty-interface
export interface IContentPartProps {
    img: string
}
// tslint:disable-next-line:no-empty-interface
export interface IContentPartState {
}

// tslint:disable-next-line:no-empty-interface
export interface IInteractivePhotoProps {
    img: string,
    points: any[]
}
// tslint:disable-next-line:no-empty-interface
export interface IInteractivePhotoState {
    sound: any,
    play: boolean
}

// tslint:disable-next-line:no-empty-interface
export interface IInteractive360Props {
    img: string,
    points: any[]
}
// tslint:disable-next-line:no-empty-interface
export interface IInteractive360State {
    sound: any,
    play: boolean,
    mousePos: { x: number, y: number },
    rot: { x: number, y: number},
}