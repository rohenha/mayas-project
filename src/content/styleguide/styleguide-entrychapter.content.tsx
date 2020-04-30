import { IRoute } from 'Interfaces';

export const StyleguideEntryChapterContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_styleguide',
  container: true,
  content: [
    {
      component: 'EntryChapterComponent',
      content: {
        introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores provident minus.",
        media: {
          poster: {
            alt: '',
            path: require('../../assets/videos/Breezy/Breezy.jpg'),
            title: ''
          },
          sources: [
            { type: 'mp4', path: require('../../assets/videos/Breezy/Breezy.mp4') },
            { type: 'webm', path: require('../../assets/videos/Breezy/Breezy.webm') },
            { type: 'ogv', path: require('../../assets/videos/Breezy/Breezy.ogv') }
          ]
        },
        subtitle: "Chapitre 1<span>Mayas</span>",
        text: "Chapter",
        video: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "page",
  title: "Page",
  url: "/styleguide/entrychapter"
};
