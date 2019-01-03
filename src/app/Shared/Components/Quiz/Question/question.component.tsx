// Imports
import { TweenMax } from 'gsap';
import { IQuestionQuizProps, IQuestionQuizState } from 'Interfaces';
import * as React from 'react';

// Styles
import './question.component.scss';

// Components
import Animations from 'Animations';

export class QuizQuestionComponent extends React.Component<IQuestionQuizProps, IQuestionQuizState> {
    public validator: () => {} = this.validateQuestion.bind(this);
    public onChangeValue: () => {} = this.changeValue.bind(this);
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.state = { response: null, goodResponse : false, answered: false };
        this.node = React.createRef();
    }

    public componentDidUpdate(prevProps: any): void {
        if (this.props.active !== prevProps.active && this.props.active === true) {
            this.enterQuestion(this.node.current);
        }
        if (this.props.active !== prevProps.active && this.props.active === false) {
            this.exitQuestion(this.node.current);
        }
    }

    public changeValue(event: any): void {
        this.setState({
            response: Number(event.target.value)
        });
    }

    public validateQuestion(e: Event): void {
        e.preventDefault();
        if( this.state.answered === false) {
            const response = this.state.response === this.props.question.reponse ? true : false;
            this.setState({
                answered: true,
                goodResponse: response
            });
        } else {
            this.props.nextStep(this.state.goodResponse, true);
        }
    }

    public enterQuestion(node: any): void {
        TweenMax.killTweensOf(node);
        Animations.QuestionAnimation.enter(
            node,
            Animations.QuestionAnimation.duration,
            Animations.QuestionAnimation.duration
        );
    }

    public exitQuestion(node: any): void {
        TweenMax.killTweensOf(node);
        Animations.QuestionAnimation.exit(node, Animations.QuestionAnimation.duration);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="quiz-question" ref={this.node}>
                <div className="quiz-question__question">
                    <p className="quiz-screen__number">Question n°{this.props.question.number} / {this.props.totQuestions}</p>
                    <p className="quiz-screen__desc">{this.props.question.question}</p>
                </div>
                <form onSubmit={this.validator}>
                    <ul className={
                        this.state.answered ? 
                            this.state.goodResponse ? 
                                "quiz-question__responses quiz-question__good"
                                : "quiz-question__responses quiz-question__bad" 
                        : "quiz-question__responses"
                    }>
                        {this.props.question.propositions.map((prop: string, index: number) =>
                            <li
                                key={index}
                                className={
                                    this.state.answered && this.props.question.reponse === index + 1 ? "quiz-question__good_Response" : ''
                            }>
                                <input 
                                    type="radio"
                                    name={this.props.question.name}
                                    value={index + 1}
                                    onChange={this.onChangeValue}
                                    disabled={this.state.answered}
                                />
                                <label htmlFor="data" data-response={index + 1}>{prop}</label>
                            </li>
                        )}
                    </ul>
                    <div className="quiz-screen__buttons">
                        {this.state.response !== undefined ?
                            <button className="button__base button__red">
                                {!this.state.answered ? "Valider" : "Suivant"}
                            </button>
                            : null}
                    </div>
                </form>
            </div>
        );
    }
}