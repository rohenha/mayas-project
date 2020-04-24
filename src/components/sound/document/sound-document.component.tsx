// Imports
import { ISoundProps, ISoundState } from 'Interfaces';
import * as React from 'react';
import { VideoService } from 'Services';

// Styles
import './sound-document.component.sass';

// Components

export class SoundDocComponent extends React.Component<ISoundProps, ISoundState> {
    public sound: HTMLAudioElement = new Audio(this.props.sound);
    public playpauseSound: () => void = this.toggleSound.bind(this);
    public videoService: VideoService = new VideoService();
    public nodeTitle: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
      super(props);
      this.state = {
        current: '0:0',
        percent: 0,
        total: '0:0'
      };
      this.nodeTitle = React.createRef();
    }

    public componentWillUnmount(): void {
      this.sound.ontimeupdate = null;
      this.sound.pause();
    };

    public componentDidMount(): void {
      this.sound.onloadedmetadata = this.setTotalTime.bind(this);
      this.sound.ontimeupdate = this.updateSound.bind(this);
      if (this.props.autoplay) {
          setTimeout(this.toggleSound.bind(this), this.props.delay);
      }
    }

    public componentDidUpdate(prevProps: any): void {
        if (this.props.sound !== prevProps.sound && this.props.sound) {
            this.sound.pause();
            this.sound = new Audio(this.props.sound);
            this.componentDidMount();
        }
    }

    public toggleSound(): void {
        if (this.sound.duration > 0 && !this.sound.paused) {
            this.sound.pause();
        } else {
            this.sound.play();
        }
    }

    public setTotalTime(): void {
      this.setState({
        current: '0:0',
        total: this.videoService.setTime(this.sound.duration)
      });
    };

    public updateSound(): void {
        const current = this.videoService.setTime(this.sound.currentTime);
        this.setState({ percent: Math.round(this.sound.currentTime / this.sound.duration * 100), current });
    }

    public getSound(time: number) : string {
        return Math.floor(time / 60) + ':' + Math.floor(time);
    }

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
                <button className={this.sound.paused === true ? "section_sound-document__player play" : "section_sound-document__player pause"} onClick={this.playpauseSound}/>
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
                <div className={this.props.sound ? "section_sound-document__details active" : "section_sound-document__details"}>
                  <p ref={this.nodeTitle} className={this.setTitleAnimated()}><span>{this.props.title}</span></p>
                  <p className="section_sound-document__time"><span>{this.state.current}</span> / <span>{this.state.total}</span></p>
                </div>
            </div>
        );
    }
}
