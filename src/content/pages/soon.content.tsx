import { IRoute } from 'Interfaces';

export const SoonContent: IRoute = {
  ambiant: require('../../assets/sounds/carnival-daniel_simon.mp3'),
  animation: 'Accueil',
  class: 'page_home',
  container: false,
  content: [
    {
      component: 'HomeComponent',
      content: {
        authors: [
          {
            name: 'Romain Breton',
            poste: 'Réalisateur'
          },
          {
            name: 'Elise Fouillade',
            poste: 'Narratrice'
          },
          {
            name: 'Guillaume Cabarrou',
            poste: 'Compositeur'
          }
        ],
        interaction: 'Bientôt sur vos écrans',
        introduce: {
          subtitle: 'présente',
          title: 'Voyage en terres d\'histoire'
        },
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
        title: {
          subtitle: 'Sur les traces d\'une civilisation mystérieuse',
          title: 'Mayas'
        },
        url: '',
        video: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "soon",
  title: "Soon",
  url: "/soon"
};
