// Imports
import { IQuizProps, IQuizState, IStep } from 'Interfaces';
import * as React from 'react';

// Styles
import './quiz.component.sass';

// Components
import {
    QuizQuestionComponent,
    QuizScreenComponent
} from 'Components';

export class QuizComponent extends React.Component<IQuizProps, IQuizState> {
    public onChangeStep: (result:boolean, question: boolean) => {} = this.changeStep.bind(this);
    constructor(props: any) {
        super(props);
        this.state = { step: 0, result: 0, questions: this.props.steps.filter((step) => step.type === "question").length };
    }

    public changeStep(result: boolean, question: boolean): void {
        this.setState({
            result: question && result ? this.state.result + 1 : this.state.result,
            step: this.state.step + 1,
        });
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="page quiz-screen" data-page="Quiz">
                <img className="bg" src={this.props.img} />
                {this.props.steps[this.state.step].content.img !== undefined && this.props.steps[this.state.step].content.img !== null ? <img className="quiz-question__img"  src={this.props.steps[this.state.step].content.img} alt="" /> : null}
                <div className="container">
                    <div className="quiz-screen__title">
                        <h2>Mayas</h2>
                        <p className="quiz-screen__title--chapter"><span>Chapitre {this.props.chapter.chapter}</span> {this.props.chapter.name}</p>
                        <h1>Quiz</h1>
                    </div>
                    {this.props.steps.map((step: IStep, index: number) => {
                        switch (step.type) {
                            case "home":
                                return (
                                    <QuizScreenComponent
                                        key={index}
                                        {...this.props}
                                        desc={step.content}
                                        nextUrl={this.props.nextUrl}
                                        end={false}
                                        nextStep={this.onChangeStep}
                                        active={this.state.step === index ? true : false}
                                        result = {null}
                                        total = {null}
                                    />
                                );
                                break;
                            case "question":
                                step.content.number = index;
                                return (
                                    <QuizQuestionComponent
                                        key={index}
                                        {...this.props}
                                        question={step.content}
                                        totQuestions={this.state.questions}
                                        nextStep={this.onChangeStep}
                                        active={this.state.step === index ? true : false}
                                    />
                                );
                                break;
                            case "end":
                                return (
                                    <QuizScreenComponent
                                        key={index}
                                        {...this.props}
                                        desc={step.content}
                                        nextUrl={this.props.nextUrl}
                                        end={true}
                                        nextStep={this.onChangeStep}
                                        active={this.state.step === index ? true : false}
                                        result={this.state.result}
                                        total={this.state.questions}
                                    />
                                );
                                break;

                            default:
                                return null;
                                break;
                        }
                    })}
                </div>
            </div>
        );
    }
}
