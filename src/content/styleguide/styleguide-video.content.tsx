import { IRoute } from 'Interfaces';

export const StyleguideVideoContent: IRoute = {
  ambiant: require('../../assets/sounds/carnival-daniel_simon.mp3'),
  animation: 'Common',
  class: 'page_styleguide',
  container: true,
  content: [
    {
      component: 'VideoComponent',
      content: {
        autoplay: true,
        controls: true,
        cover: false,
        loop: false,
        muted: false,
        nextPage: '',
        poster: {
          alt: '',
          path: require('../../assets/videos/Semaine/semaine.jpg'),
          title: ''
        },
        sources: [
            { type: 'mp4', path: require('../../assets/videos/Semaine/semaine.mp4') }
        ],
        subtitles: require('../../assets/videos/Semaine/sous-titres.vtt')
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "video",
  title: "Video",
  url: "/styleguide/video"
};
