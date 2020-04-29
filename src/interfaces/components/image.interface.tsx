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

export interface IGalerieState {
    imageOpen: number
}

export interface IImageProps {
  image: IImage,
  fullscreen: boolean
}

export interface IGalerieDetailsProps {
  content: IGalerieElement,
  closeDetails: (element:number) => any
}

// tslint:disable-next-line:no-empty-interface
export interface IImageGalerieProps {
    toggleImage: (element: number) => void,
    open: boolean,
    index: number,
    element: IGalerieElement
    delayClose: number
}

export interface IITitleProps {
    title: string
}
