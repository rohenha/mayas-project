export class P404Content {
  public static background: any = require('../assets/images/john-salzarulo-37827-unsplash.jpg');
  public static url: string = "/";
  public static text: any = {
    back: {
      text1: "Revenir",
      text2: "à l'accueil"
    },
    text: "Il semblerai que la page que vous cherchez n'existe pas",
    title: {
      subtitle: "Vous êtes vous perdu dans la",
      title: "foret ?"
    }
  };
  public static social: any = [
      {
        image: require('../assets/images/instagram.svg'),
        link: "https://www.instagram.com/voyageterreshistoire/"
      },
      {
        image: require('../assets/images/facebook.svg'),
        link: "https://www.facebook.com/voyageterreshistoire/"
      }
  ];
};
