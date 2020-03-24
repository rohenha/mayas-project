export interface IAnimation {
    duration: number,
    enter: (node: any, duration: number, delay: number) => void,
    exit: (node: any, duration: number) => void
}

export interface IAnimArray {
    [key: string]: IAnimation
}