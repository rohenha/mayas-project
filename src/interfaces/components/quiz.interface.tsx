import { IImage } from 'Interfaces';

export interface IQuestionProposition {
  answer: string,
  checked: boolean,
  good: boolean
}

export interface IQuestion {
    active: boolean,
    explication: string,
    name: string,
    number: number | null,
    propositions: IQuestionProposition[],
    question: string,
    reponse: number,
    image: IImage | null
}

export interface IStep {
    type: string,
    content: any
}

export interface IPageQuizProps {
    history: any
}

// tslint:disable-next-line:no-empty-interface
export interface IPageQuizState {
}

export interface IQuizState {
    step: number,
    result: number,
    questions: number
}

export interface IScreenQuizProps {
    history: any,
    desc: { active: boolean, desc: string },
    end: boolean,
    nextUrl: string,
    chapter: {chapter: number, name: string},
    nextStep: (result: false, question: false) => {},
    active: boolean,
    result: number | null,
    total: number | null
}
// tslint:disable-next-line:no-empty-interface
export interface IScreenQuizState {
}

export interface IQuestionQuizProps {
    history: any,
    question: IQuestion,
    nextStep: (result: boolean, question: boolean) => {},
    active: boolean,
    totQuestions: number
}

export interface IQuestionQuizState {
    answered: boolean,
    good: boolean,
    propositions: IQuestionProposition[],
    submitted: boolean,
    numberAnswers: number
}

export interface IAnswerQuizProps {
    answer: IQuestionProposition,
    disable: boolean,
    functionUpdate: () => any,
    index: number,
    questionName: string,
    type: string
}

// tslint:disable-next-line:no-empty-interface
export interface IAnswerQuizState {
}
