export const PartenairesContent: any = {
  animation: 'Common',
  chapter: 1,
  class: 'page_partenaires',
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
        subtitle: "Les personnes qui ont apportées leur",
        text: "contribution",
        video: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "partenaires",
  title: "Partenaires",
  url: "/partenaires"
};
