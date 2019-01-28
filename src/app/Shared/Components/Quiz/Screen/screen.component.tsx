// Imports
import { TweenMax } from 'gsap';
import { IScreenQuizProps, IScreenQuizState } from 'Interfaces';
import * as React from 'react';
import { PagesService } from 'Services';


// Styles
import './screen.component.scss';

// Components
import Animations from 'Animations';
import { ButtonExpComponent } from 'Components';
import Routes from 'Routes';


export class QuizScreenComponent extends React.Component<IScreenQuizProps, IScreenQuizState> {
    public node: React.RefObject<HTMLDivElement>;
    public onNextStep: () => {}= this.nextStep.bind(this);
    public pagesService: PagesService = new PagesService();
    constructor(props: any) {
        super(props);
        this.state = {
            page: { chapter: undefined, name: undefined },
        };
        this.node = React.createRef();
    }

    public componentDidMount(): void {
        this.setState({
            page: Routes.ExpRoutes.find((route: any) => route.content.url === this.props.history.location.pathname)
        });
        if( this.props.active) {
            this.enterScreen(this.node.current);
        }
    }

    public nextStep(): void {
        this.props.nextStep(false, false);
    }

    public componentDidUpdate(prevProps: any): void {
        if (this.props.active !== prevProps.active && this.props.active === true) {
            this.enterScreen(this.node.current);
        }
        if (this.props.active !== prevProps.active && this.props.active === false) {
            this.exitScreen(this.node.current);
        }
    }

    public enterScreen(node: any): void {
        TweenMax.killTweensOf(node);
        Animations.QuestionAnimation.enter(
            node,
            Animations.QuestionAnimation.duration,
            Animations.QuestionAnimation.duration
        );
    }

    public exitScreen(node: any): void {
        TweenMax.killTweensOf(node);
        Animations.QuestionAnimation.exit(node, Animations.QuestionAnimation.duration);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="quiz-screen-content" ref={this.node}>
                <p className="quiz-screen-content__desc">{this.props.desc.desc}</p>
                <div className="quiz-screen-content__buttons">
                        { !this.props.end ? 
                        <button className="button__base" onClick={this.onNextStep} >
                                Commencer le quiz 
                            </button>
                        : <p className="quiz-screen-content__result-title">Résultat : <span>{this.props.result}/{this.props.total}</span></p>

                        }
                    {this.state.page ?
                        <ButtonExpComponent
                            text={this.pagesService.getTextButtonNextPage(Routes, this.state.page)}
                            redirection={this.pagesService.getNextPage(Routes, this.state.page)}
                            back={false}
                            {...this.props}
                        />
                    :
                        <ButtonExpComponent
                            text={{ text1: "Terminer", text2: "l'expérience" }}
                            redirection="/"
                            back={false}
                            {...this.props}
                        /> 
                    }
                </div>
            </div>
        );
    }
}