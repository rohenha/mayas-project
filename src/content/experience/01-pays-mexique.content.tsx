import Images from 'Images';
import { IExperience } from 'Interfaces';

export const PPaysMexiqueContent: IExperience = {
  ambiant: '',
  animation: 'Common',
  chapter: 2,
  class: 'page_pays',
  codex: [
  ],
  container: true,
  content: [
    {
      component: 'TextImgComponent',
      content: {
        image: {
          alt: '',
          path: Images.chichenItzaLarge,
          title: ''
        },
        sens: true,
        text: [
          {
            content: 'Lorem ipsum dolor sit',
            type: 'h3'
          },
          {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
            type: 'text'
          },
          {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
            type: 'text'
          }
        ]
      }
    }
  ],
  exactUrl: true,
  hasParent: 'PPaysContent',
  isExperience: true,
  isPage: true,
  map: {
    x: '',
    y: ''
  },
  nextChapter: '',
  pageName: "pays-mexique",
  point: {
    path: 0,
    x: 0,
    y: 0
  },
  title: "Pays Mexique",
  url: "/exp/pays/mexique"
};
