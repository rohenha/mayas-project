export interface ISoundState {
  current: string,
  percent: number,
  play: boolean,
  total: string
}

export interface ISoundAmbiantProps {
  sound: string
}

export interface ISoundAmbiantState {
  canChange: boolean
}
