import { IRoute } from 'Interfaces';

export const StyleguideQuoteContent: IRoute = {
  ambiant: '',
  animation: 'Common',
  class: 'page_styleguide',
  container: true,
  content: [
    {
      component: 'QuoteComponent',
      content: {
        citation: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        image: {
          alt: '',
          path: '',
          title: ''
        },
        name: 'John Doe'
      }
    }
  ],
  exactUrl: true,
  isExperience: false,
  isPage: true,
  pageName: "quote",
  title: "Quote",
  url: "/styleguide/quote"
};
