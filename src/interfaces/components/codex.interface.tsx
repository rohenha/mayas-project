export interface ICodexProps {
    toggleCodex: boolean,
    closeCodex: () => any,
    history: any
}
export interface ICodexState {
    dataOpen: number
}

export interface ICodexData {
    content: any[],
    title: string,
    type: string
}

export interface ICodexListProps {
    index: number,
    dataOpen: number,
    changeDef: () => any,
    data: { content: any[], title: string, type: string }
}

export interface ICodexDefProps {
    data: { content: any[], title: string, type: string },
    history: any
}
