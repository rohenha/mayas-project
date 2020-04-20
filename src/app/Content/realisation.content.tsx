export const RealisationContent: any = {
  animation: 'Common',
  chapter: 1,
  class: 'page_realisation',
  codex: [
  ],
  container: true,
  content: [
    {
      component: 'EntryChapterComponent',
      content: {
        imgs: [
            require('../assets/videos/Breezy/Breezy.jpg'),
            [
                { type: 'mp4', path: require('../assets/videos/Breezy/Breezy.mp4') },
                { type: 'webm', path: require('../assets/videos/Breezy/Breezy.webm') },
                { type: 'ogv', path: require('../assets/videos/Breezy/Breezy.ogv') }
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
