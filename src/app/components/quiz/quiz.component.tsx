// Imports
import { IPageComponentProps, IQuizState, IStep } from 'Interfaces';
import * as React from 'react';

// Styles
import './quiz.component.sass';

// Components
import { ImageComponent, QuizQuestionComponent, QuizScreenComponent } from 'Components';

export class QuizComponent extends React.Component<IPageComponentProps, IQuizState> {
    public onChangeStep: (result:boolean, question: boolean) => {} = this.changeStep.bind(this);
    constructor(props: any) {
        super(props);
        this.state = { step: 0, result: 0, questions: this.props.content.steps.filter((step: IStep) => step.type === "question").length };
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
          nextUrl={this.props.content.nextUrl}
          end={step.type === 'end'}
          chapter={{ chapter: this.props.content.chapter.chapter, name: this.props.content.chapter.name }}
          nextStep={this.onChangeStep}
          active={this.state.step === index ? true : false}
          result={this.state.result}
          total={this.state.questions}
      />
    };


    public render(): React.ReactElement<any> {
        return (
            <div className="page section_quiz" data-page="Common">
              <ImageComponent image={this.props.content.background} fullscreen={true} />
              <div className="container-fluid">
                {this.props.content.steps.map((step: IStep, index: number) =>
                    this.renderElements(step, index)
                )}
              </div>
            </div>
        );
    }
}
