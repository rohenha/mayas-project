export class PartenairesContent {
    public static background: any = {
      image: require('../assets/videos/Breezy/Breezy.jpg'),
      isVideo: true,
      video: [
        { type: 'mp4', path: require('../assets/videos/Breezy/Breezy.mp4') },
        { type: 'webm', path: require('../assets/videos/Breezy/Breezy.webm') },
        { type: 'ogv', path: require('../assets/videos/Breezy/Breezy.ogv') }
      ]
    };
    public static text: any = {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut amet at praesentium, libero, voluptatibus, maiores quas suscipit nostrum assumenda vitae. Commodi tempora numquam obcaecati assumenda nostrum quod',
      title: {
        subtitle: 'Les personnes qui ont apportée leur',
        title: 'contribution'
      }
    };
}
