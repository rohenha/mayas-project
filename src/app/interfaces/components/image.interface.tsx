// tslint:disable-next-line:no-empty-interface
export interface IGalerieProps {
}
// tslint:disable-next-line:no-empty-interface
export interface IGalerieState {
    imageOpen: number
}

// tslint:disable-next-line:no-empty-interface
export interface IImageProps {
    toggleImage: (element:number) => any,
    image: string,
    open: boolean,
    index: number,
    portrait: boolean
}
// tslint:disable-next-line:no-empty-interface
export interface IImageState {
    transform: {
        transform: string,
        MozTransform: string,
        msTransform: string,
        OTransform: string,
        WebkitTransform: string,
    }
}

// tslint:disable-next-line:no-empty-interface
export interface IITitleProps {
    title: string
}
// tslint:disable-next-line:no-empty-interface
export interface IITitleState {
}