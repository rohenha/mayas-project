import { IRoute } from 'Interfaces';
import Videos from 'Videos';


export const RealisationContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_realisation',
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
        subtitle: "L\'équipe de",
        text: "Réalisation",
        video: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "realisation",
  title: "Réalisation",
  url: "/realisation"
};
