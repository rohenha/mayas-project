import { IRoute } from 'Interfaces';
import Sounds from 'Sounds';

export const StyleguideVideoYoutubeContent: IRoute = {
  ambiant: Sounds.carnival,
  animation: 'Common',
  class: 'page_styleguide',
  container: true,
  content: [
    {
      component: 'VideoYoutubeComponent',
      content: {
        allowFullscreen: false,
        annotations: false,
        autoplay: false,
        controls: true,
        id: 'O2FQuz8CtHo',
        nextPage: 'StyleguideVideoContent'
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "videoYoutube",
  title: "Video Youtube",
  url: "/styleguide/video-youtube"
};
