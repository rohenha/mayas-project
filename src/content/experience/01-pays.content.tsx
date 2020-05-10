import Images from 'Images';
import { IExperience } from 'Interfaces';
import Sounds from 'Sounds';


export const PPaysContent: IExperience = {
  ambiant: Sounds.bensound,
  animation: 'Common',
  chapter: 2,
  class: 'page_pays',
  codex: [
  ],
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
            url: '/exp/pays/mexique'
          },
          {
            image: {
              alt: '',
              path: Images.paysage,
              title: ''
            },
            name: 'Guatemala',
            url: '/exp/pays/mexique'
          },
          {
            image: {
              alt: '',
              path: Images.mer,
              title: ''
            },
            name: 'Bélize',
            url: '/exp/pays/mexique'
          }
        ]
      }
    }
  ],
  exactUrl: true,
  hasParent: '',
  isExperience: true,
  isPage: true,
  map: {
    x: '-10%',
    y: '-10%'
  },
  nextChapter: 'HomeContent',
  pageName: "pays",
  point: {
    path: 890,
    x: 245,
    y: 204.9
  },
  title: "Pays",
  url: "/exp/pays"
};
