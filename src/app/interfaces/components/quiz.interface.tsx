export interface IQuestion {
    active: boolean,
    name: string,
    number: number | null,
    propositions: string[],
    question: string,
    reponse: number,
    img: any | null
}

export interface IStep {
    type: string,
    content: any
}

export interface IPageQuizProps {
    history: any
}
export interface IPageQuizState {
    // questions: IQuestion[],
    steps: IStep[]
}

export interface IQuizProps {
    history: any,
    img: any,
    chapter: { chapter: number, name: string},
    nextUrl: string,
    steps: IStep[],
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
    nextStep: (result: false, question: false) => {},
    active: boolean,
    result: number | null,
    total: number | null
}
// tslint:disable-next-line:no-empty-interface
export interface IScreenQuizState {
    page: any
}

export interface IQuestionQuizProps {
    history: any,
    question: IQuestion,
    nextStep: (result: boolean, question: boolean) => {},
    active: boolean,
    totQuestions: number
}

export interface IQuestionQuizState {
    response: number | null,
    goodResponse: boolean,
    answered: boolean
}