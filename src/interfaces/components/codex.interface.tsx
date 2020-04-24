// tslint:disable-next-line:no-empty-interface
export interface ICodexProps {
    toggleCodex: boolean,
    closeCodex: () => any,
    datas: ICodexData[],
    history: any
}
// tslint:disable-next-line:no-empty-interface
export interface ICodexState {
    dataOpen: number
}

export interface ICodexData {
    content: any[],
    title: string,
    type: string
}

// tslint:disable-next-line:no-empty-interface
export interface ICodexListProps {
    index: number,
    dataOpen: number,
    changeDef: () => any,
    data: { content: any[], title: string, type: string }
}
// tslint:disable-next-line:no-empty-interface
export interface ICodexListState {}

// tslint:disable-next-line:no-empty-interface
export interface ICodexDefProps {
    data: { content: any[], title: string, type: string },
    history: any
}
// tslint:disable-next-line:no-empty-interface
export interface ICodexDefState { }
