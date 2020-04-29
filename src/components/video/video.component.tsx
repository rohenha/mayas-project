// Imports
import { IPageComponentProps, IVideoState } from 'Interfaces';
import * as React from 'react';
import { VideoService } from 'Services';


// Styles
import './video.component.sass';

// Components
import { ControlsComponent } from 'Components';
import Providers from 'Providers';

export class VideoComponent extends React.Component<IPageComponentProps, IVideoState> {
    public static contextType = Providers['ThemeContext'];
    public currentTime: () => void = this.getCurrentTime.bind(this);
    public toggleVideo: () => void = this.changeVideoState.bind(this);
    public setDuration: () => void = this.setTotalTime.bind(this);
    public setControls: () => void = this.activeControls.bind(this);
    public onVideoEnded: () => void = this.videoEnded.bind(this);
    public videoService: VideoService = new VideoService();
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
        const current = this.videoService.setTime(this.video.current!.currentTime);
        this.setState({ percent, current });
    };

    public setTotalTime(): void {
      this.setState({
        total: this.videoService.setTime(this.video.current!.duration)
      });
      this.getCurrentTime();
      this.setControls();
    };

    public changeVideoState(): void {
      const videoState = this.video.current!.paused ? 'play' : 'pause';
      this.context.toggleSound(!this.video.current!.paused);
      this.video.current![videoState]();
      this.setControls();
    };

    public componentWillUnmount(): void {
      this.video.current!.removeEventListener('timeupdate', this.currentTime, false);
      this.video.current!.removeEventListener('click', this.toggleVideo, false);
      this.video.current!.removeEventListener('mousemove', this.setControls, false);
    }

    public videoEnded(): void {
      this.setControls();
      this.context.toggleSound(true);
    };

    public renderVideo(): any {
      return <video
          playsInline = {true}
          controls={false}
          autoPlay={this.props.content.autoplay}
          loop={this.props.content.loop}
          muted = {this.props.content.muted}
          preload={"auto"}
          poster={this.props.content.poster}
          onLoadedMetadata={this.setDuration}
          onTimeUpdate={this.currentTime}
          onEnded={this.onVideoEnded}
          onClick={this.toggleVideo}
          onMouseMove={this.setControls}
          ref={this.video}
      >
        {this.props.content.sources.map( (source: any, index: number) =>
          <source key={index} src={source.path} type={'video/' + source.type} />
        )}
        { this.props.content.subtitles &&
          <track label="Français" kind="subtitles" srcLang="fr" src={this.props.content.subtitles} default={true} />
        }
      </video>;
    };

    public render(): React.ReactElement<any> {
        return (
          <div className={this.props.content.cover ? "section_video js-bg page__bg" : "section_video js-bg"}>
            {this.renderVideo()}
            { this.props.content.controls &&
              <React.Fragment>
                <button className={this.setPlayerBtnClass()} />
                <ControlsComponent
                  videoState={this.state.percent}
                  history={this.props.history}
                  nextPage={this.props.content.nextPage}
                  duree={{ current: this.state.current, total: this.state.total }}
                  video={this.video}
                  fullscreen={!this.props.content.cover}
                />
              </React.Fragment>
            }
          </div>
        );
    }
}
