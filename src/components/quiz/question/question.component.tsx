// Imports
import { IQuestionProposition, IQuestionQuizProps, IQuestionQuizState } from 'Interfaces';
import * as React from 'react';

// Styles
import './question.component.sass';

// Components
import { ImageComponent, QuizAnswerComponent } from 'Components';

// Content
import { QuizContent } from 'Content';

export class QuizQuestionComponent extends React.Component<IQuestionQuizProps, IQuestionQuizState> {
  public validator: () => {} = this.validateQuestion.bind(this);
  public onChangeValue: () => {} = this.changeValue.bind(this);
  public node: React.RefObject<HTMLDivElement>;

  private constructor(props: IQuestionQuizProps) {
    super(props);
    this.state = {
      answered: true,
      good: false,
      numberAnswers: this.getNumberAnswers(),
      propositions: this.props.question.propositions,
      submitted: false,
    };
    this.node = React.createRef();
  };

  public getNumberAnswers(): number {
    let goodAnswers: number = 0;
    this.props.question.propositions.map((proposition: IQuestionProposition, index: number) => {
      if (proposition.good) {
        goodAnswers += 1;
      }
    });
    return goodAnswers;
  };

  public changeValue(event: Event): void {
    const target: any = event.target;
    const newPropositions: any = this.state.propositions;
    if (this.state.numberAnswers === 1) {
      newPropositions.map((proposition: IQuestionProposition, index: number) => {
        proposition.checked = false;
      });
    }
    newPropositions[Number(target.value)].checked = target.checked;
    this.setState({ propositions: newPropositions });
  };

  public validateQuestion(e: Event): void {
    let result: boolean;
    e.preventDefault();
    if (this.state.submitted) {
        this.props.nextStep(this.state.good, true);
    } else {
      result = this.checkAnswerIsGood();
      this.setState({
        good: result,
        submitted: true
      });
    }
  };

  public checkAnswerIsGood(): boolean {
    let isAnswerGood: boolean = true;
    this.state.propositions.map((proposition: IQuestionProposition, index: number) => {
      if (proposition.checked !== proposition.good) {
        isAnswerGood = false;
      }
    });
    return isAnswerGood;
  };

  public setAnswer(answer: IQuestionProposition, index: number): React.ReactElement<any> {
    return <QuizAnswerComponent
      disable={this.state.submitted}
      key={index}
      type={this.state.numberAnswers > 1 ? 'checkbox' : 'radio'}
      answer={answer}
      questionName={this.props.question.name}
      index={index}
      functionUpdate={this.onChangeValue}
    />;
  };

  public setExplication(): React.ReactElement<any> {
    return this.state.submitted ? <p>{this.props.question.explication}</p> : <React.Fragment />;
  };

  public setClass(base: string, active: string, condition: boolean): string {
    let className: string = base;
    if (condition) {
      className = className + ' ' + active;
    }
    return className;
  };

  public renderTitle(): React.ReactElement<any> {
    return (
      <div className="section_quiz__question--title">
          <p className="text__subtitle">{QuizContent.text.question} {this.props.question.number}/{this.props.totQuestions}</p>
          <p className="text__question section_quiz__question--desc">{this.props.question.question}</p>
      </div>
    );
  };

  public renderImage(): React.ReactElement<any> {
    if (this.props.question.image) {
      return (
        <div className="section_quiz__question--image">
          <ImageComponent image={this.props.question.image} fullscreen={false} />
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  };

  public render(): React.ReactElement<any> {
    return (
      <div className={this.setClass('section_quiz__question', 'active', this.props.active)} ref={this.node}>
        <div className="section_quiz__question--container">
          {this.renderTitle()}
          <form onSubmit={this.validator}>
            <ul className={this.setClass('section_quiz__question--responses', 'section_quiz__question--answered', this.state.submitted)}>
              {this.state.propositions.map((answer: IQuestionProposition, index: number) =>
                this.setAnswer(answer, index)
              )}
            </ul>
            {this.setExplication()}
            <div className="section_quiz__question--nav">
              <button className="button__base button__red" disabled={!this.state.answered}>
                {!this.state.submitted ? "Valider" : "Suivant"}
              </button>
              {this.state.submitted &&
                <p className="section_quiz__question--feedback">{this.state.good ? 'Bonne réponse' : 'Mauvaise réponse' }</p>
              }
            </div>
          </form>
        </div>
        {this.renderImage()}
      </div>
    );
  };
}
