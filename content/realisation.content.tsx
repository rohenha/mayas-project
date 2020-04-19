export const RealisationContent: any =  {
    background: {
      image: require('../assets/videos/Breezy/Breezy.jpg'),
      isVideo: true,
      video: [
        { type: 'mp4', path: require('../assets/videos/Breezy/Breezy.mp4') },
        { type: 'webm', path: require('../assets/videos/Breezy/Breezy.webm') },
        { type: 'ogv', path: require('../assets/videos/Breezy/Breezy.ogv') }
      ]
    },
    text: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut amet at praesentium, libero, voluptatibus, maiores quas suscipit nostrum assumenda vitae. Commodi tempora numquam obcaecati assumenda nostrum quod',
      realisateurs: [
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut amet at praesentium, libero, voluptatibus, maiores quas suscipit nostrum assumenda vitae. Commodi tempora numquam obcaecati assumenda nostrum quod",
          image: require('../assets/images/john-salzarulo-37827-unsplash.jpg')
        },
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut amet at praesentium, libero, voluptatibus, maiores quas suscipit nostrum assumenda vitae. Commodi tempora numquam obcaecati assumenda nostrum quod",
          image: require('../assets/images/john-salzarulo-37827-unsplash.jpg')
        },
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut amet at praesentium, libero, voluptatibus, maiores quas suscipit nostrum assumenda vitae. Commodi tempora numquam obcaecati assumenda nostrum quod",
          image: require('../assets/images/john-salzarulo-37827-unsplash.jpg')
        }
      ],
      title: {
        subtitle: 'l\'équipe de',
        title: 'Réalisation'
      }
    }
};
