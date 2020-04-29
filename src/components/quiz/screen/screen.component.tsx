// Imports
import { IScreenQuizProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './screen.component.sass';

// Content
import { QuizContent } from 'Content';

export class QuizScreenComponent extends React.Component<IScreenQuizProps, ISimpleState> {
  public node: React.RefObject<HTMLDivElement>;
  public onNextStep: () => {}= this.nextStep.bind(this);

  private constructor(props: IScreenQuizProps) {
    super(props);
    this.node = React.createRef();
  };

  public nextStep(): void {
    this.props.nextStep(false, false);
  };

  public setContent(): React.ReactElement<any> {
    if (this.props.end) {
      return (
        <div className="section_quiz__screen--result">
          <h4 className="text__subtitle">{QuizContent.text.result}</h4>
          <p className="text__title-page"><span>{this.props.result}</span><span className="section_quiz__screen--total">/{this.props.total}</span></p>
        </div>
      );
    } else {
      return <button className="button__base" onClick={this.onNextStep} >{QuizContent.text.start}</button>;
    }
  };

  public render(): React.ReactElement<any> {
    return (
      <div className={this.props.active ? "section_quiz__screen active" : "section_quiz__screen"} ref={this.node}>
        <div className="section_quiz__title">
          <h3 className="text__subtitle">
            Chapitre {this.props.chapter.chapter}
            <span>{this.props.chapter.name}</span>
          </h3>
          <h1>{QuizContent.text.title}</h1>
        </div>
        <p className="section_quiz__screen--desc">{this.props.desc.desc}</p>
        {this.setContent()}
      </div>
    );
  };
}
