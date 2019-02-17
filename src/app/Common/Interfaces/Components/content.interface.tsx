// tslint:disable-next-line:no-empty-interface
export interface IQuoteImgProps {
    imgs: string[],
    top: boolean,
    title: string
}
// tslint:disable-next-line:no-empty-interface
export interface IQuoteImgState {
}

export interface IChapter {
    number: number,
    name: string
}
// tslint:disable-next-line:no-empty-interface
export interface IEntryChapterProps {
    imgs: string[],
    text: string,
    video: boolean,
    chapter: IChapter,
    introduction: string,
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

export interface ITextInteractive {
    content: [],
    file: string[],
    title: string,
    type: string
}

// tslint:disable-next-line:no-empty-interface
export interface IInteractivePhotoProps {
    img: string,
    points: any[]
}
// tslint:disable-next-line:no-empty-interface
export interface IInteractivePhotoState {
    play: boolean,
    sound: any,
    soundOpen: boolean,
    text: ITextInteractive,
    textOpen: boolean
}

// tslint:disable-next-line:no-empty-interface
export interface IContentInteractiveProps {
    open: boolean,
    text: ITextInteractive,
    closeFunction: any
}
// tslint:disable-next-line:no-empty-interface
export interface IContentInteractiveState {
    index: number
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

// tslint:disable-next-line:no-empty-interface
export interface ITextImgProps {
    img: any,
}
// tslint:disable-next-line:no-empty-interface
export interface ITextImgState {
}

// tslint:disable-next-line:no-empty-interface
export interface INextStepProps {
    history: any,
    chapter: IChapter,
    url: string
}
// tslint:disable-next-line:no-empty-interface
export interface INextStepState {
}

// tslint:disable-next-line:no-empty-interface
export interface ITextProps {
}
// tslint:disable-next-line:no-empty-interface
export interface ITextState {
}

// tslint:disable-next-line:no-empty-interface
export interface IImageSliderProps {
    imgs: string[]
}
// tslint:disable-next-line:no-empty-interface
export interface IImageSliderState {
    index: number
}