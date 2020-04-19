export const StyleguideInteractiveImageContent: any = {
  animation: 'Common',
  chapter: 1,
  class: 'page_styleguide',
  codex: [
  ],
  container: true,
  content: [
    {
      component: 'InteractivePhotoComponent',
      content: {
        img: require('../assets/images/john-salzarulo-37827-unsplash.jpg'),
        points: [
          {
            content: "",
            file: require('../assets/sounds/carnival-daniel_simon.mp3'),
            title:"Intitulé",
            type: "audio",
            x: "20%",
            y: "20%"
          },
          {
            content: "",
            file: require('../assets/sounds/bensound-hey.mp3'),
            title:"Intitulé 2",
            type: "audio",
            x: "50%",
            y: "50%"
          },
          {
            content: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure recusandae dolorum quibusdam nihil facilis, dolor exercitationem quia hic? Corrupti autem esse quis, similique dolores delectus. Aspernatur facilis itaque corporis!",
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure recusandae dolorum quibusdam nihil facilis, dolor exercitationem quia hic? Corrupti autem esse quis, similique dolores delectus. Aspernatur facilis itaque corporis!"
            ],
            file: [
              require('../assets/images/john-salzarulo-37827-unsplash.jpg'),
              require('../assets/images/john-salzarulo-37827-unsplash.jpg'),
              require('../assets/images/john-salzarulo-37827-unsplash.jpg')
            ],
            title:"Intitulé",
            type: "text",
            x: "80%",
            y: "80%"
          }
        ]
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "interactiveimage",
  title: "Interactive Image",
  url: "/styleguide/interactiveimage"
};
