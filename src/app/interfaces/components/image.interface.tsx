export interface IImage {
  alt: string,
  path: string,
  title: string
}

export interface IGalerieElement {
  description: string,
  image: IImage,
  name: string,
  portrait: boolean,
  type: string
}

// tslint:disable-next-line:no-empty-interface
export interface IGalerieState {
    imageOpen: number
}

// tslint:disable-next-line:no-empty-interface
export interface IImageProps {
  image: IImage,
  fullscreen: boolean
}
// tslint:disable-next-line:no-empty-interface
export interface IImageState {
}

// tslint:disable-next-line:no-empty-interface
export interface IGalerieDetailsProps {
  content: IGalerieElement,
  closeDetails: (element:number) => any
}
// tslint:disable-next-line:no-empty-interface
export interface IGalerieDetailsState {
}

// tslint:disable-next-line:no-empty-interface
export interface IImageGalerieProps {
    toggleImage: (element:number) => any,
    open: boolean,
    index: number,
    element: IGalerieElement
    delayClose: number
}
// tslint:disable-next-line:no-empty-interface
export interface IImageGalerieState {
}

// tslint:disable-next-line:no-empty-interface
export interface IITitleProps {
    title: string
}
// tslint:disable-next-line:no-empty-interface
export interface IITitleState {
}
