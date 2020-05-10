import Images from 'Images';
import { IRoute } from 'Interfaces';
import Sounds from 'Sounds';
import Videos from 'Videos';

export const StyleguideInteractiveImageContent: IRoute = {
  ambiant: require('../../assets/sounds/bensound-hey.mp3'),
  animation: 'Common',
  class: 'page_styleguide',
  container: true,
  content: [
    {
      component: 'InteractivePhotoComponent',
      content: {
        image: {
          alt: '',
          path: Images.foret,
          title: ''
        },
        points: [
          {
            content: {
              poster: {
                alt: '',
                path: Videos.breezy.poster,
                title: ''
              },
              sources: [
                { type: 'mp4', path: Videos.breezy.mp4 },
                { type: 'webm', path: Videos.breezy.webm },
                { type: 'ogv', path: Videos.breezy.ogv }
              ]
            },
            file: 'video',
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            type: "video",
            x: "20%",
            y: "20%"
          },
          {
            content: {
              allowFullscreen: true,
              annotations: false,
              autoplay: false,
              controls: true,
              id: 'O2FQuz8CtHo',
              nextPage: ''
            },
            file: 'youtube',
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            type: "video",
            x: "20%",
            y: "50%"
          },
          {
            content: {},
            file: Sounds.carnival,
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            type: "audio",
            x: "40%",
            y: "20%"
          },
          {
            content: {},
            file: Sounds.bensound,
            title:"Lorem ipsum",
            type: "audio",
            x: "50%",
            y: "50%"
          },
          {
            content: [
              {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
                type: 'text'
              },
              {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
                type: 'text'
              },
              {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
                type: 'text'
              },
              {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
                type: 'text'
              },
              {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
                type: 'text'
              },
              {
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
                type: 'text'
              }
            ],
            file: [
              {
                alt: '',
                path: Images.foret,
                title: ''
              },
              {
                alt: '',
                path: Images.portraitStatue,
                title: ''
              }
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
