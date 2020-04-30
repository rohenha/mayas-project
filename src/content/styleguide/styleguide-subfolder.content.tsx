import { IRoute } from 'Interfaces';

export const StyleguideSubfolderContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_styleguide',
  container: false,
  content: [
    {
      component: 'SubFolderComponent',
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
  pageName: "subfolder",
  title: "Subfolder",
  url: "/styleguide/subfolder"
};
