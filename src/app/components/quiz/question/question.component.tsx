// Imports
import { IQuestionProposition, IQuestionQuizProps, IQuestionQuizState } from 'Interfaces';
import * as React from 'react';

// Styles
import './question.component.sass';

// Components
import { ImageComponent, QuizAnswerComponent } from 'Components';

export class QuizQuestionComponent extends React.Component<IQuestionQuizProps, IQuestionQuizState> {
    public validator: () => {} = this.validateQuestion.bind(this);
    public onChangeValue: () => {} = this.changeValue.bind(this);
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.state = {
          answered: true,
          good: false,
          numberAnswers: this.getNumberAnswers(),
          propositions: this.props.question.propositions,
          submitted: false,
        };
        this.node = React.createRef();
    }

    public getNumberAnswers(): number {
      let goodAnswers = 0;
      this.props.question.propositions.map((proposition: IQuestionProposition, index: number) => {
        if (proposition.good) {
          goodAnswers += 1;
        }
      });
      return goodAnswers;
    };

    public changeValue(event: any): void {
      const target = event.target;
      const newPropositions = this.state.propositions;
      if (this.state.numberAnswers === 1) {
        newPropositions.map((proposition: IQuestionProposition, index: number) => {
          proposition.checked = false;
        });
      }
      newPropositions[Number(target.value)].checked = target.checked;
      this.setState({ propositions: newPropositions });
    }

    public validateQuestion(e: Event): void {
      let result;
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
      let isAnswerGood = true;
      this.state.propositions.map((proposition: IQuestionProposition, index: number) => {
        if (proposition.checked !== proposition.good) {
          isAnswerGood = false;
        }
      });
      return isAnswerGood;
    };

    public setAnswer(answer: IQuestionProposition, index: number): any {
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

    public setExplication(): any {
      return this.state.submitted ? <p>{this.props.question.explication}</p> : null;
    };

    public setClass(base: string, active: string, condition: boolean): string {
      let className = base;
      if (condition) {
        className = className + ' ' + active;
      }
      return className;
    };

    public render(): React.ReactElement<any> {
        return (
            <div className={this.setClass('section_quiz__question', 'active', this.props.active)} ref={this.node}>
                <div className="section_quiz__question--container">
                  <div className="section_quiz__question--title">
                      <p className="text__subtitle">Question {this.props.question.number}/{this.props.totQuestions}</p>
                      <p className="text__question section_quiz__question--desc">{this.props.question.question}</p>
                  </div>
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
                {this.props.question.img &&
                  <div className="section_quiz__question--image">
                    <ImageComponent image={this.props.question.img} fullscreen={false} />
                  </div>
                }
            </div>
        );
    }
}
