import Images from 'Images';
import { IRoute } from 'Interfaces';
import Sounds from 'Sounds';

export const P404Content: IRoute = {
  ambiant: Sounds.carnival,
  animation: 'Common',
  class: 'page_404',
  container: false,
  content: [
    {
      component: 'P404Component',
      content: {
        back: {
          text1: "Revenir",
          text2: "à l'accueil"
        },
        background: {
          alt: '',
          path: Images.foret,
          title: ''
        },
        subtitle: "Vous êtes vous perdu dans la",
        text: "Il semblerai que la page que vous cherchez n'existe pas",
        title: "foret ?",
        url: '/'
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "404",
  title: "404",
  url: "/404"
};
