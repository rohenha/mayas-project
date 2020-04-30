import {
  IAuthor,
  IBackground,
  IContent,
  IGalerieElement,
  IImage,
  IMultiplePath,
  ISource,
  IStep,
  ITextInteractive,
  ITitle
} from 'Interfaces';

export interface IPageComponentProps {
  history: any,
  content: any
}

export interface IEntryChapterComponentContent {
  introduction: string,
  media: IBackground,
  subtitle: string,
  text: string,
  video: boolean
}

export interface IGalerieComponentContent {
  delayClose: number,
  images: IGalerieElement[]
}

export interface IHomeComponentContent {
  authors: IAuthor[],
  interaction: string,
  introduce: ITitle,
  media: IBackground,
  start: string,
  title: ITitle,
  video: boolean
}

export interface IImagesSliderComponentContent {
  images: IImage[],
  vertical: boolean
}

export interface IInteractiveImageComponentContent {
  image: IImage,
  points: ITextInteractive[]
}

export interface IQuizComponentContent {
  background: IImage,
  chapter: {
    chapter: number,
    name: string
  },
  steps: IStep[]
}

export interface IQuoteComponentContent {
  citation: string[],
  image: IImage,
  name: string
}

export interface IQuoteImgComponentContent {
  imgs: IImage[],
  text: IContent[],
  top: boolean
}

export interface ISubfolderComponentContent {
  paths: IMultiplePath[]
};

export interface ITextComponentContent {
  texts: IContent[]
};

export interface ITextImgComponentContent {
  image: IImage,
  sens: boolean,
  text: IContent[]
}

export interface IVideoYoutubeComponentContent {
  allowFullscreen: boolean,
  annotations: boolean,
  autoplay: boolean,
  controls: boolean,
  id: string,
  nextPage: string
}

export interface IVideoComponentContent {
  autoplay: boolean,
  controls: boolean,
  cover: boolean,
  loop: boolean,
  muted: boolean,
  nextPage: string,
  poster: IImage,
  sources: ISource[],
  subtitles: string
}
