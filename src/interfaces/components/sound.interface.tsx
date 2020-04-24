// tslint:disable-next-line:no-empty-interface
export interface ISoundProps {
  autoplay: boolean,
  delay: number,
  sound: any
  title: string
}
// tslint:disable-next-line:no-empty-interface
export interface ISoundState {
    percent: number,
    current: string,
    total: string
}