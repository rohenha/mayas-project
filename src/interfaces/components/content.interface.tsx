export interface IChapter {
    number: number,
    name: string
}

export interface ITextInteractive {
    content: any,
    file: any,
    title: string,
    type: string,
    x: string,
    y: string
}

export interface IInteractivePhotoState {
    active: ITextInteractive
}

export interface IContentInteractiveProps {
    content: ITextInteractive,
    closeFunction: any,
    history: any
}

export interface IVideoInteractiveProps {
    content: any,
    closeFunction: any,
    history: any
}

export interface IInteractive360Props {
    img: string,
    points: any[]
}
export interface IInteractive360State {
    sound: any,
    play: boolean,
    mousePos: { x: number, y: number },
    rot: { x: number, y: number},
}

export interface IImageSliderState {
    height: number,
    index: number
}
