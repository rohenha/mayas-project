export interface IButtonText {
  text1: string,
  text2: string
}

export interface IButtonExpProps {
    history: any,
    redirection: string,
    text: {text1: string, text2: string},
    back: boolean
};
export interface IButtonExpState {
    openCodex: boolean
}
