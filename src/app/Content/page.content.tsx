export const PageContent: any = {
  animation: 'Common',
  chapter: 3,
  class: 'page_page',
  codex: [
    {
      content: [
        {
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
          type: 'text'
        }
      ],
      title: 'Toto Jean',
      type: 'Personnalité',
    },
    {
      content: [
        {
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
          type: 'text'
        }
      ],
      title: 'Lorem Ipsum',
      type: 'Définition',
    }
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
        video: false
      }
    }
  ],
  exactUrl: true,
  pageName: "page",
  title: "Page",
  type: "page",
  url: "/page"
};
