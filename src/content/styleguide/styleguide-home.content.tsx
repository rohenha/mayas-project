export const StyleguideHomeContent: any = {
  animation: 'Accueil',
  chapter: 1,
  class: 'page_styleguide',
  codex: [
  ],
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
        interaction: 'Glisser pour débuter l\'expérience',
        introduce: {
          subtitle: 'présente',
          title: 'Voyage en terres d\'histoire'
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
  hasParent: '',
  isExperience: false,
  isPage: true,
  pageName: "home",
  title: "Home",
  url: "/styleguide/home"
};
