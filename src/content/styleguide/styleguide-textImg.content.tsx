import Images from 'Images';
import { IRoute } from 'Interfaces';

export const StyleguideTextImgContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_styleguide',
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
  isExperience: false,
  isPage: true,
  pageName: "textimg",
  title: "TextImg",
  url: "/styleguide/textimg"
};
