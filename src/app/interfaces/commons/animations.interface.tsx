export interface IAnimation {
    duration: number,
    elements: any,
    enter: (node: any, duration: number, delay: number) => void,
    exit: (node: any, duration: number) => void,
    setElements: (node: any) => void
}

export interface IAnimArray {
    [key: string]: IAnimation
}
