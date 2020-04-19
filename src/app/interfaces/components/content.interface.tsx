export interface IChapter {
    number: number,
    name: string
}

// tslint:disable-next-line:no-empty-interface
export interface IContentPartProps {
    img: string
}
// tslint:disable-next-line:no-empty-interface
export interface IContentPartState {
}

export interface ITextInteractive {
    content: any[],
    file: string[],
    title: string,
    type: string,
    x: string,
    y: string
}

// tslint:disable-next-line:no-empty-interface
export interface IInteractivePhotoState {
    active: ITextInteractive
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
    sens: boolean
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
export interface IImageSliderProps {
    imgs: string[]
}
// tslint:disable-next-line:no-empty-interface
export interface IImageSliderState {
    height: number,
    index: number
}
