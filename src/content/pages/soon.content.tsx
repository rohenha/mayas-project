export const SoonContent: any = {
  animation: 'Accueil',
  chapter: 1,
  class: 'page_home',
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
        interaction: 'Bientôt sur vos écrans',
        introduce: {
          subtitle: 'présente',
          title: 'Voyage en terres d\'histoire'
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
  hasParent: '',
  isExperience: false,
  isPage: true,
  pageName: "soon",
  title: "Soon",
  url: "/soon"
};
