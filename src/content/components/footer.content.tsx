import Images from 'Images';

export const FooterContent: any =  {
  isPage: false,
  links: [
    {
      image: {
        alt: '',
        path: '',
        title: ''
      },
      link: '/realisation',
      name: 'Realisation',
      outside: false
    },
    {
      image: {
        alt: '',
        path: '',
        title: ''
      },
      link: '/partenaires',
      name: 'Partenaires',
      outside: false
    },
    {
      image: {
        alt: 'Logo Instagram',
        path: Images.instagram,
        title: 'instagram'
      },
      link: "https://www.instagram.com/voyageterreshistoire/",
      name: 'Instagram',
      outside: true
    },
    {
      image: {
        alt: 'Logo Facebook',
        path: Images.facebook,
        title: 'Facebook'
      },
      link: "https://www.facebook.com/voyageterreshistoire/",
      name: 'Facebook',
      outside: true
    }
  ]
};
