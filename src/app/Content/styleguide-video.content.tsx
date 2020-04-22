export const StyleguideVideoContent: any = {
  animation: 'Common',
  chapter: 1,
  class: 'page_styleguide',
  codex: [
  ],
  container: true,
  content: [
    {
      component: 'VideoComponent',
      content: {
        autoplay: true,
        controls: true,
        cover: false,
        loop: false,
        muted: false,
        nextPage: '',
        poster: {
          alt: '',
          path: require('../assets/videos/Breezy/Breezy.jpg'),
          title: ''
        },
        sources: [
            { type: 'mp4', path: require('../assets/videos/Breezy/Breezy.mp4') },
            { type: 'webm', path: require('../assets/videos/Breezy/Breezy.webm') },
            { type: 'ogv', path: require('../assets/videos/Breezy/Breezy.ogv') }
        ],
        subtitles: ''
      }
    }
  ],
  exactUrl: true,
  hasParent: '',
  isExperience: false,
  isPage: true,
  pageName: "video",
  title: "Video",
  url: "/styleguide/video"
};
