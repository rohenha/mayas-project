// Imports
import { IPageQuizProps, IPageQuizState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quiz.styleguide.sass';

// Components
import { QuizComponent } from 'Components';

export class StyleGuideQuiz extends React.Component<IPageQuizProps, IPageQuizState> {
    constructor(props: any) {
        super(props);
        this.state = {
            steps: [
                {
                    content: {
                        desc: "Maintenant que vous avez terminé le chapitre sur le pays d'origine des mayas, vouyons, ce que tu e as retenu !! "
                    },
                    type: "home",
                },
                {
                    content: {
                        img: require('../../../assets/images/jimmy-baum-346127-unsplash.jpg'),
                        name: "question1",
                        number: null,
                        propositions: [
                            "Réponse 1",
                            "Réponse 2",
                            "Réponse 3"
                        ],
                        question: "Question n°1 djnjdsnjkfndjkfnjkdnsjfjk",
                        reponse: 1,
                    },
                    type: "question",
                },
                {
                    content: {
                        img: null,
                        name: "question1",
                        number: null,
                        propositions: [
                            "Réponse 1",
                            "Réponse 2",
                            "Réponse 3"
                        ],
                        question: "Question n°2 djnjdsnjkfndjkfnjkdnsjfjk",
                        reponse: 3
                    },
                    type: "question",
                },
                {
                    content: {
                        desc: "Fin du quiz "
                    },
                    type: "end",
                },
            ]
        };
    }


    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <QuizComponent
                    {...this.props}
                    img={require('../../../assets/images/john-salzarulo-78830-unsplash.jpg')}
                    chapter= {{ chapter: 2, name: "Le Mexique"} }
                    nextUrl = '/realisation'
                    steps = { this.state.steps }
                />
            </React.Fragment>
        );
    }
}
