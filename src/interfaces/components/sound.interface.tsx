// tslint:disable-next-line:no-empty-interface
export interface ISoundProps {
  autoplay: boolean,
  delay: number,
  sound: any
  title: string
}
// tslint:disable-next-line:no-empty-interface
export interface ISoundState {
  current: string,
  percent: number,
  play: boolean,
  total: string
}


// tslint:disable-next-line:no-empty-interface
export interface ISoundAmbiantProps {
  sound: any
}
// tslint:disable-next-line:no-empty-interface
export interface ISoundAmbiantState {
  canChange: boolean
}
