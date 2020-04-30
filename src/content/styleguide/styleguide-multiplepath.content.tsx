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
              path: require('../../assets/images/jezael-melgoza-551505-unsplash.jpg'),
              title: ''
            },
            name: 'Mexique',
            url: '/realisation'
          },
          {
            image: {
              alt: '',
              path: require('../../assets/images/landscape-2389023_1920.jpg'),
              title: ''
            },
            name: 'Guatemala',
            url: '/realisation'
          },
          {
            image: {
              alt: '',
              path: require('../../assets/images/earth-608344-unsplash.jpg'),
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
