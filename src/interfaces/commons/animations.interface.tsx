export interface IAnimation {
  duration: { enter: number, leave: number },
  elements: any,
  enter: (node: HTMLElement, delay: number) => void,
  exit: (node: HTMLElement) => void,
  setElements: (node: HTMLElement) => any
}

export interface IAnimArray {
  [key: string]: IAnimation
}
