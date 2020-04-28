// Imports
import { Howl } from 'howler';
import { ISoundAmbiantProps, ISoundAmbiantState } from 'Interfaces';
import * as React from 'react';

// Styles
import './sound-ambiance.component.sass';

// Components

export class SoundAmbianceComponent extends React.Component<ISoundAmbiantProps, ISoundAmbiantState> {
    public sound: Howl;
    public playpauseSound: () => void = this.toggleSound.bind(this);
    public soundMax: number = 1;
    public fadeTiming: number = 500;
    constructor(props: any) {
        super(props);
        this.state = {
          canChange: true,
          muted: false,
          paused: false
        };
    }

    public componentDidMount(): void {
      this.setSound();
    };

    public componentWillUnmount(): void {
      this.onUpdateComponent(false);
    };

    public componentDidUpdate(prevProps: any): void {
        if (this.props.sound !== prevProps.sound) {
          this.onUpdateComponent(true);
        }
    };

    public onUpdateComponent(setNewSound: boolean): void {
      if (this.sound.playing()) {
        this.toggleSound();
        this.setState({ muted: false });
      }
      setTimeout(() => {
        this.sound.unload();
        if (this.props.sound && setNewSound) {
          this.setSound();
        }
      }, this.fadeTiming);
    };

    public setSound(): void {
      if (this.props.sound !== '') {
        this.sound = new Howl({
          autoplay: !this.state.muted,
          loop: true,
          src: [this.props.sound],
          volume: this.state.muted ? 0 : this.soundMax
        });
        this.sound.on('fade', this.toggleSoundFade.bind(this));
      }
    };

    public toggleSoundFade(): void {
      const functionName = this.sound.volume() === 0 ? 'pause' : 'play';
      this.sound[functionName]();
    };

    public toggleSound(): void {
      const isPlaying = this.sound.playing();
      if (!this.state.canChange) {
        return;
      }
      this.sound.fade(isPlaying ? this.soundMax : 0, isPlaying ? 0 : this.soundMax, this.fadeTiming);
      this.setState({ canChange: false, muted: isPlaying, paused: isPlaying });
      setTimeout(() => {
        this.setState({ canChange: true });
      }, this.fadeTiming);
    }

    public render(): React.ReactElement<any> {
        return (
          <button onClick={this.playpauseSound} className={this.state.muted ? 'section_sound-ambiant' : 'section_sound-ambiant active'}>Son</button>
        );
    }
}
