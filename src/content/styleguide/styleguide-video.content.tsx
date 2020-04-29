export const StyleguideVideoContent: any = {
  ambiant: require('../../assets/sounds/carnival-daniel_simon.mp3'),
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
          path: require('../../assets/videos/Semaine/semaine.jpg'),
          title: ''
        },
        sources: [
            { type: 'mp4', path: require('../../assets/videos/Semaine/semaine.mp4') }
        ],
        subtitles: require('../../assets/videos/Semaine/sous-titres.vtt')
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
