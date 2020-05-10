import { IRoute } from 'Interfaces';
import Sounds from 'Sounds';
import Videos from 'Videos';

export const StyleguideVideoContent: IRoute = {
  ambiant: Sounds.carnival,
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
          path: Videos.breezy.poster,
          title: ''
        },
        sources: [
          { type: 'mp4', path: Videos.breezy.mp4 },
          { type: 'webm', path: Videos.breezy.webm },
          { type: 'ogv', path: Videos.breezy.ogv }
        ],
        subtitles: Videos.semaine.subtitles
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
