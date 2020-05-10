import Images from 'Images';
import { IRoute } from 'Interfaces';

export const StyleguideQuoteImgContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_styleguide',
  container: true,
  content: [
    {
      component: 'QuoteImgComponent',
      content: {
        imgs: [
          {
            alt: '',
            path: Images.chichenItzaLarge,
            title: ''
          }
        ],
        text: [
          {
            content: 'Lorem ipsum dolor sit',
            type: 'h3'
          },
          {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.',
            type: 'text'
          }
        ],
        top: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "quoteimg",
  title: "Quote Img",
  url: "/styleguide/quoteimg"
};
