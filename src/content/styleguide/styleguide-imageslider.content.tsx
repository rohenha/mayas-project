import Images from 'Images';
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
            path: Images.chichenItzaLarge,
            title: ''
          },
          {
            alt: '',
            path: Images.portraitStatue,
            title: ''
          },
          {
            alt: '',
            path: Images.foretCanyon,
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
