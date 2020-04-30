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
  element: IGalerieElement,
  open: boolean
}

export interface IImageProps {
  image: IImage,
  fullscreen: boolean
}

export interface IGalerieDetailsProps {
  content: IGalerieElement,
  closeDetails: (element: IGalerieElement) => void,
  open: boolean
}

export interface IImageGalerieProps {
  toggleImage: (element: IGalerieElement) => void,
  open: boolean,
  index: number,
  element: IGalerieElement
  delayClose: number
}

export interface IITitleProps {
    title: string
}
