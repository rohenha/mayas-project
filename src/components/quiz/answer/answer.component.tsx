// Imports
import { IAnswerQuizProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

export class QuizAnswerComponent extends React.Component<IAnswerQuizProps, ISimpleState> {
  constructor(props: any) {
      super(props);
  };

  public render(): React.ReactElement<any> {
    return (
      <li
        className={this.props.disable && this.props.answer.good ? "section_quiz__question--good-response" : ''}>
          <input
              type={this.props.type}
              name={this.props.questionName}
              value={this.props.index}
              onChange={this.props.functionUpdate}
              disabled={this.props.disable}
          />
          <label htmlFor="data" data-response={this.props.index + 1}>{this.props.answer.answer}</label>
      </li>
    );
  }
}
