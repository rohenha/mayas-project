import { IRoute } from 'Interfaces';

export const RealisationContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_realisation',
  container: true,
  content: [
    {
      component: 'EntryChapterComponent',
      content: {
        imgs: [
            {
              alt: '',
              path: require('../../assets/videos/Breezy/Breezy.jpg'),
              title: ''
            },
            [
                { type: 'mp4', path: require('../../assets/videos/Breezy/Breezy.mp4') },
                { type: 'webm', path: require('../../assets/videos/Breezy/Breezy.webm') },
                { type: 'ogv', path: require('../../assets/videos/Breezy/Breezy.ogv') }
            ]
        ],
        introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores provident minus.",
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
