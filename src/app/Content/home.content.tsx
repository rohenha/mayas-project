export const HomeContent: any = {
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
            require('../assets/videos/Breezy/Breezy.jpg'),
            [
                { type: 'mp4', path: require('../assets/videos/Breezy/Breezy.mp4') },
                { type: 'webm', path: require('../assets/videos/Breezy/Breezy.webm') },
                { type: 'ogv', path: require('../assets/videos/Breezy/Breezy.ogv') }
            ]
        ],
        interaction: 'Glisser pour commencer l\'expérience',
        introduce: {
          subtitle: 'présente',
          title: 'Voyage en terres d\'histoire'
        },
        title: {
          subtitle: 'Sur les traces d\'une civilisation mystérieuse',
          title: 'Mayas'
        },
        url: '/',
        video: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "home",
  title: "Accueil",
  url: "/"
};
