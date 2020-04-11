export const QuizContent: any =  {
  background: require('../assets/images/jimmy-baum-346127-unsplash.jpg'),
  chapter: 4,
  exactUrl: true,
  nextUrl: '/realisation',
  pageName: "Quiz",
  steps: [
      {
          content: {
              desc: "Maintenant que vous avez terminé le chapitre sur le pays d'origine des mayas, vouyons, ce que tu e as retenu !! "
          },
          type: "home",
      },
      {
          content: {
              explication: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: require('../assets/images/bernard-hermant-669688-unsplash.jpg'),
              name: "question1",
              propositions: [
                {
                  answer: "Réponse 1",
                  checked: false,
                  good: true
                },
                {
                  answer: "Réponse 2",
                  checked: false,
                  good: true
                },
                {
                  answer: "Réponse 3",
                  checked: false,
                  good: false
                }
              ],
              question: "Quelle est la couleur du cheval blanc d'Henri IV ?"
          },
          type: "question",
      },
      {
          content: {
              explication: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: null,
              name: "question1",
              propositions: [
                {
                  answer: "Réponse 1",
                  checked: false,
                  good: true
                },
                {
                  answer: "Réponse 2",
                  checked: false,
                  good: false
                },
                {
                  answer: "Réponse 3",
                  checked: false,
                  good: false
                }
              ],
              question: "Ou est passé casimir dans la sage star wars ?",
          },
          type: "question",
      },
      {
          content: {
              desc: "Fin du quiz "
          },
          type: "end",
      },
  ],
  title: "Quiz",
  type: "page",
  url: "/quiz"
};