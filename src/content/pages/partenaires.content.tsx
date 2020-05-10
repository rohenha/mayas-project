import { IRoute } from 'Interfaces';
import Videos from 'Videos';

export const PartenairesContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_partenaires',
  container: true,
  content: [
    {
      component: 'EntryChapterComponent',
      content: {
        introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores provident minus.",
        media: {
          poster: {
            alt: '',
            path: Videos.breezy.poster,
            title: ''
          },
          sources: [
            { type: 'mp4', path: Videos.breezy.mp4 },
            { type: 'webm', path: Videos.breezy.webm },
            { type: 'ogv', path: Videos.breezy.ogv }
          ]
        },
        subtitle: "Les personnes qui ont apportées leur",
        text: "contribution",
        video: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "partenaires",
  title: "Partenaires",
  url: "/partenaires"
};
