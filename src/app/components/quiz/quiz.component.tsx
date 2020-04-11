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
    };

    public changeStep(result: boolean, question: boolean): void {
        this.setState({
            result: question && result ? this.state.result + 1 : this.state.result,
            step: this.state.step + 1,
        });
    };

    public renderElements(step:IStep, index: number): any {
      if (step.type === 'question') {
        return <QuizQuestionComponent
          key={index}
          {...this.props}
          question={step.content}
          totQuestions={this.state.questions}
          nextStep={this.onChangeStep}
          active={this.state.step === index ? true : false}
        />;
      }
      return <QuizScreenComponent
          key={index}
          {...this.props}
          desc={step.content}
          nextUrl={this.props.nextUrl}
          end={step.type === 'end'}
          chapter={{ chapter: this.props.chapter.chapter, name: this.props.chapter.name }}
          nextStep={this.onChangeStep}
          active={this.state.step === index ? true : false}
          result={this.state.result}
          total={this.state.questions}
      />
    };


    public render(): React.ReactElement<any> {
        return (
            <div className="page section_quiz" data-page="Common">
                <img className="page__bg" src={this.props.background} />
                <div className="container-fluid">
                    {this.props.steps.map((step: IStep, index: number) =>
                        this.renderElements(step, index)
                    )}
                </div>
            </div>
        );
    }
}
