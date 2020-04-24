export interface IAnimation {
    duration: { enter: number, leave: number },
    elements: any,
    enter: (node: any, delay: number) => void,
    exit: (node: any) => void,
    setElements: (node: any) => any
}

export interface IAnimArray {
    [key: string]: IAnimation
}