import { IRoute } from 'Interfaces';
import Sounds from 'Sounds';
import Videos from 'Videos';

export const SoonContent: IRoute = {
  ambiant: Sounds.carnival,
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
            path: Videos.breezy.poster,
            title: ''
          },
          sources: [
            { type: 'mp4', path: Videos.breezy.mp4 },
            { type: 'webm', path: Videos.breezy.webm },
            { type: 'ogv', path: Videos.breezy.ogv }
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
