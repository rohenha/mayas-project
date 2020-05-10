import { IRoute } from 'Interfaces';
import Videos from 'Videos';

export const StyleguideHomeContent: IRoute = {
  ambiant: '',
  animation: 'Accueil',
  class: 'page_styleguide',
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
        interaction: 'Glisser pour débuter l\'expérience',
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
        start: 'PIntroductionContent',
        title: {
          subtitle: 'Sur les traces d\'une civilisation mystérieuse',
          title: 'Mayas'
        },
        video: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "home",
  title: "Home",
  url: "/styleguide/home"
};
