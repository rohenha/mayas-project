// Imports
import { IVideoProps, IVideoState } from 'Interfaces';
import * as React from 'react';

// Styles
import './video.component.sass';

// Components
import { ControlsComponent } from 'Components';

export class VideoComponent extends React.Component<IVideoProps, IVideoState> {
    public currentTime: () => void = this.getCurrentTime.bind(this);
    public toggleVideo: () => void = this.changeVideoState.bind(this);
    public setDuration: () => void = this.setTotalTime.bind(this);
    public setControls: () => void = this.activeControls.bind(this);
    public video: React.RefObject<HTMLVideoElement>;
    public controlsTimeout: any;

    constructor(props: any) {
        super(props);
        this.video = React.createRef();
        this.state= {
          controls: false,
          current: '0:00',
          percent: 0,
          total: '0:00'
        };
    }

    public activeControls(): void {
      this.toggleControls(true);
      clearTimeout(this.controlsTimeout);
      if (!this.video.current!.paused) {
        this.controlsTimeout = setTimeout(this.toggleControls.bind(this, false), 2000);
      }
    };

    public toggleControls(controls: boolean): void {
      this.setState({ controls });
    };

    public setPlayerBtnClass(): string {
      let className = "section_video__player";
      if (this.state.controls) {
        className += " active";
      }
      if (this.video.current! && this.video.current!.paused) {
          className += " pause";
      }
      return className;
    };

    public getCurrentTime(): void {
        const percent = this.video.current!.currentTime / this.video.current!.duration * 100;
        const current = this.setTime(this.video.current!.currentTime);
        this.setState({ percent, current });
    };

    public setTotalTime(): void {
      this.setState({
        total: this.setTime(this.video.current!.duration)
      });
      this.getCurrentTime();
      this.setControls();
    };

    public setTime(time: number): string {
      const minutes = Math.floor(time / 60);
      const seconds = this.setNumber(Math.floor(time - minutes * 60));
      return minutes + ':' + seconds;
    };

    public setNumber(time: number): string {
      return ('0' + time).slice(-2)
    };

    public changeVideoState(): void {
      const videoState = this.video.current!.paused ? 'play' : 'pause';
      this.video.current![videoState]();
      this.setControls();
    };

    public componentWillUnmount(): void {
      this.video.current!.removeEventListener('timeupdate', this.currentTime, false);
      this.video.current!.removeEventListener('click', this.toggleVideo, false);
      this.video.current!.removeEventListener('mousemove', this.setControls, false);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className={this.props.cover ? "section_video js-bg page__bg" : "section_video js-bg"}>
                <video
                    playsInline = {true}
                    controls={false}
                    autoPlay={this.props.autoplay}
                    loop={this.props.loop}
                    muted = {this.props.muted}
                    preload={"auto"}
                    poster={this.props.poster}
                    onLoadedMetadata={this.setDuration}
                    onTimeUpdate={this.currentTime}
                    onEnded={this.setControls}
                    onClick={this.toggleVideo}
                    onMouseMove={this.setControls}
                    ref={this.video}
                >
                  {this.props.sources.map( (source: any, index: number) =>
                    <source key={index} src={source.path} type={'video/' + source.type} />
                  )}
                  { this.props.subtitles ?
                    <track label="Français" kind="subtitles" srcLang="fr" src={this.props.subtitles} default={true} />
                    : null
                  }
                </video>
                { this.props.controls ?
                  <React.Fragment>
                    <button className={this.setPlayerBtnClass()} />
                    <ControlsComponent
                      videoState={this.state.percent}
                      history={this.props.history}
                      nextPage={this.props.nextPage}
                      duree={{ current: this.state.current, total: this.state.total }}
                      video={this.video}
                      fullscreen={!this.props.cover}
                    />
                  </React.Fragment>
                  : null
                }
            </div>
        );
    }
}
