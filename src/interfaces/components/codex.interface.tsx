export interface ICodexProps {
  toggleCodex: boolean,
  closeCodex: () => void,
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
  changeDef: () => void,
  data: ICodexData
}

export interface ICodexDefProps {
  data: ICodexData,
  history: any
}
