// Imports
import { Howl } from 'howler';
import { ISoundAmbiantProps, ISoundAmbiantState } from 'Interfaces';
import * as React from 'react';

// Styles
import './sound-ambiance.component.sass';

// Components
import { ThemeContext } from 'Providers';

export class SoundAmbianceComponent extends React.Component<ISoundAmbiantProps, ISoundAmbiantState> {
    public static contextType = ThemeContext;
    public sound: Howl;
    public playpauseSound: () => void = this.toggleMute.bind(this);
    public soundMax: number = 1;
    public fadeTiming: number = 500;
    public play: boolean = true;
    constructor(props: any) {
        super(props);
        this.state = {
          canChange: true
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
        return;
      }
      if (this.play !== this.context.sound) {
        this.toggleSound();
        this.play = this.context.sound;
      }
    };

    public onUpdateComponent(setNewSound: boolean): void {
      if (this.sound && this.sound.playing()) {
        this.toggleSound();
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
          autoplay: this.context.sound,
          loop: true,
          src: [this.props.sound],
          volume: this.context.sound ? this.soundMax : 0
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
      setTimeout(() => {
        this.setState({ canChange: true });
      }, this.fadeTiming);
    };

    public toggleMute(): void {
      this.context.toggleMute(!this.context.sound);
    };

    public render(): React.ReactElement<any> {
        return (
          <button onClick={this.playpauseSound} className={this.context.muted ? 'section_sound-ambiant' : 'section_sound-ambiant active'}>Son</button>
        );
    }
}
