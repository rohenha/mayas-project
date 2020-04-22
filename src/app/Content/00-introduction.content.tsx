export const PIntroductionContent: any = {
  animation: 'Common',
  chapter: 1,
  class: 'page_introduction',
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
        subtitle: "Chapitre 1<span>Mayas</span>",
        text: "Chapter",
        video: true
      }
    }
  ],
  exactUrl: true,
  hasParent: '',
  isExperience: true,
  isPage: true,
  nextChapter: 'PPaysContent',
  pageName: "introduction",
  title: "Introduction",
  url: "/exp/introduction"
};
