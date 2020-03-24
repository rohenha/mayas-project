// tslint:disable-next-line:no-empty-interface
export interface IFooterExpProps {
    history: any,
    nextPage: string,
    codexDatas: Array<{ content: any[], title: string, type: string }>,
    footerText: { text1: string, text2: string }
}
// tslint:disable-next-line:no-empty-interface
export interface IFooterExpState {
    openCodex: boolean
}
