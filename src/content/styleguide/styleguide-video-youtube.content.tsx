import { IRoute } from 'Interfaces';

export const StyleguideVideoYoutubeContent: IRoute = {
  ambiant: require('../../assets/sounds/carnival-daniel_simon.mp3'),
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
