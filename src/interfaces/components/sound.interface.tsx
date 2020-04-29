export interface ISoundProps {
  sound: any
  title: string
}

export interface ISoundState {
  current: string,
  percent: number,
  play: boolean,
  total: string
}

export interface ISoundAmbiantProps {
  sound: any
}

export interface ISoundAmbiantState {
  canChange: boolean
}
