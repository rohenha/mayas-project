// Imports
import { IPageQuizProps, IPageQuizState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quiz.styleguide.sass';

// Components
import { QuizComponent } from 'Components';

// Content
import { QuizContent } from 'Content';

export class StyleGuideQuiz extends React.Component<IPageQuizProps, IPageQuizState> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
          <QuizComponent
              {...this.props}
              background={QuizContent.background}
              chapter={{ chapter: QuizContent.chapter, name: QuizContent.pageName }}
              nextUrl = {QuizContent.nextUrl}
              steps = { QuizContent.steps }
          />
        );
    }
}
