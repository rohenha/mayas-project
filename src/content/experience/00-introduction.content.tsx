export const PIntroductionContent: any = {
  animation: 'Common',
  chapter: 1,
  class: 'page_introduction',
  codex: [
    {
     content: [
       {
         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
         type: 'text'
       },
       {
         content: {
           alt: 'alt',
           path: require('../../assets/videos/Breezy/Breezy.jpg'),
           title: 'title'
         },
         type: 'img'
       },
       {
         content: {
           poster: {
             alt: '',
             path: require('../../assets/videos/Breezy/Breezy.jpg'),
             title: ''
           },
           sources: [
               { type: 'mp4', path: require('../../assets/videos/Breezy/Breezy.mp4') },
               { type: 'webm', path: require('../../assets/videos/Breezy/Breezy.webm') },
               { type: 'ogv', path: require('../../assets/videos/Breezy/Breezy.ogv') }
           ]
         },
         type: 'video'
       },
       {
         content: {
           allowFullscreen: true,
           annotations: true,
           autoplay: false,
           controls: true,
           id: 'O2FQuz8CtHo',
           nextPage: ''
         },
         type: 'youtube'
       }
     ],
     title: 'Toto Jean',
     type: 'Personnalité',
   },
  ],
  container: true,
  content: [
    {
      component: 'EntryChapterComponent',
      content: {
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