import { IRoute } from 'Interfaces';

export const StyleguideImagesSliderContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_styleguide',
  container: true,
  content: [
    {
      component: 'ImageSliderComponent',
      content: {
        images: [
          {
            alt: '',
            path: require('../../assets/images/jimmy-baum-346127-unsplash.jpg'),
            title: ''
          },
          {
            alt: '',
            path: require('../../assets/images/bernard-hermant-669688-unsplash.jpg'),
            title: ''
          },
          {
            alt: '',
            path: require('../../assets/images/forest-hd-wallpaper-jungle-58557.jpg'),
            title: ''
          }
        ],
        vertical: true
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "imagesslider",
  title: "Image Slider",
  url: "/styleguide/imageslider"
};
