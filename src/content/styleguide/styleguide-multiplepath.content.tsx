import Images from 'Images';
import { IRoute } from 'Interfaces';

export const StyleguideMultiplepathContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_styleguide',
  container: false,
  content: [
    {
      component: 'MultiplePathComponent',
      content: {
        paths: [
          {
            image: {
              alt: '',
              path: Images.mexique,
              title: ''
            },
            name: 'Mexique',
            url: '/realisation'
          },
          {
            image: {
              alt: '',
              path: Images.paysage,
              title: ''
            },
            name: 'Guatemala',
            url: '/realisation'
          },
          {
            image: {
              alt: '',
              path: Images.mer,
              title: ''
            },
            name: 'Bélize',
            url: '/realisation'
          }
        ]
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "multiplepath",
  title: "Multiple path",
  url: "/styleguide/multiplepath"
};
