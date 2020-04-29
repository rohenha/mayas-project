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
    closeFunction: () => void,
    history: any
}

export interface IVideoInteractiveProps {
    content: any,
    closeFunction: () => void,
    history: any
}

export interface IImageSliderState {
    height: number,
    index: number
}
