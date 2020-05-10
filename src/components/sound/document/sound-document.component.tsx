// Imports
import { Howl } from 'howler';
import { IContentInteractiveProps, ISoundState } from 'Interfaces';
import * as React from 'react';
import { VideoService } from 'Services';

// Styles
import './sound-document.component.sass';

// Components
import Providers from 'Providers';

export class SoundDocComponent extends React.Component<IContentInteractiveProps, ISoundState> {
  public static contextType = Providers['ThemeContext'];
  public sound: Howl;
  public playpauseSound: () => void = this.toggleSound.bind(this);
  public onCanPlay: () => void = this.canPlay.bind(this);
  public animationFrame: number;
  public videoService: VideoService = new VideoService();
  public nodeTitle: React.RefObject<HTMLDivElement>;

  private constructor(props: IContentInteractiveProps) {
    super(props);
    this.state = {
      current: '0:0',
      percent: 0,
      play: false,
      total: '0:0'
    };
    this.nodeTitle = React.createRef();
  };

  public componentDidMount(): void {
    this.setSound();
  };

  public componentWillUnmount(): void {
    this.onUpdateComponent(false);
  };

  public componentDidUpdate(prevProps: IContentInteractiveProps): void {
    if (this.props.content.file !== prevProps.content.file) {
      this.onUpdateComponent(true);
    }
  };

  public onUpdateComponent(setNewSound: boolean): void {
    if (this.sound && this.sound.playing()) {
      this.toggleSound();
    }
    window.cancelAnimationFrame(this.animationFrame);
    this.sound.unload();
    if (this.props.content.file && setNewSound) {
      this.setSound();
    }
  };

  public setSound(): void {
    if (this.props.content.file !== '') {
      this.sound = new Howl({
        autoplay: false,
        loop: false,
        onload: this.onCanPlay,
        src: [this.props.content.file],
        volume: 1
      });
      this.toggleSound();
    }
  };

  public toggleSound(): void {
    const functionName: string = this.sound.playing() ? 'pause' : 'play';
    this.context.toggleSound(this.sound.playing());
    this.setState({ play: !this.sound.playing() })
    this.sound[functionName]();
  };

  public canPlay(): void {
    this.setState({
      current: '0:0',
      total: this.videoService.setTime(this.sound.duration())
    });
    this.updateSound();
  };

  public updateSound(): void {
    const currentTime: number = Number(this.sound.seek());
    const current: string = this.videoService.setTime(currentTime);
    this.setState({
      current,
      percent: Math.round(currentTime / this.sound.duration() * 100)
    });
    this.animationFrame = window.requestAnimationFrame(this.updateSound.bind(this));
  };

  public setTitleAnimated(): string {
    let className = 'section_sound-document__title';
    if (this.nodeTitle.current! !== null) {
      const span = this.nodeTitle.current.querySelector('span');
      if (span!.getBoundingClientRect().width > this.nodeTitle.current.getBoundingClientRect().width) {
        className += ' animated';
      }
    }
    return className;
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="section_sound-document">
        <button className={this.state.play ? "section_sound-document__player pause" : "section_sound-document__player play"} onClick={this.playpauseSound} />
        <svg viewBox="0 0 36 36" >
          <path
              className="section_sound-document__player--back"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
              className="section_sound-document__player--front"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{ strokeDasharray: this.state.percent + ", 100" }}
          />
        </svg>
        <div className={this.props.content.file ? "section_sound-document__details active" : "section_sound-document__details"}>
          <p ref={this.nodeTitle} className={this.setTitleAnimated()}><span>{this.props.content.title}</span></p>
          <p className="section_sound-document__time"><span>{this.state.current}</span> / <span>{this.state.total}</span></p>
        </div>
      </div>
    );
  };
}
