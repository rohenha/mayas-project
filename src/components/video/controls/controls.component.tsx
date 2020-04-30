// Imports
import { IControlsProps, IControlsState } from 'Interfaces';
import * as React from 'react';

// Styles
import './controls.component.sass';

// Content
import { ControlsContent } from 'Content';

export class ControlsComponent extends React.Component<IControlsProps, IControlsState> {
  public onChangePage: () => void = this.changePage.bind(this);
  public onChangeSound: () => void = this.toggleSound.bind(this);
  public onChangeSubtitles: () => void = this.toggleSubtitles.bind(this);
  public onSetFullsreen: () => void = this.setFullscreen.bind(this);
  public track: any = null;

  private constructor(props: IControlsProps) {
    super(props);
    this.state = {
      videoDone: false
    };
  };

  public componentDidMount(): void {
    console.log(this.props.video.current!.textTracks.length > 0);
    if (this.props.video.current!.textTracks.length > 0) {
      console.log(this.props.video.current!, this.props.video.current!.textTracks[0]);
      this.track = this.props.video.current!.textTracks[0];
    }
  };

  public toggleSound(): void {
    this.props.video.current!.muted = !this.props.video.current!.muted;
  };

  public toggleSubtitles(): void {
    this.track.mode = this.track.mode === 'showing' ? 'hidden' : 'showing';
  };

  public setFullscreen(): void {
    const fullScreenValues: string[] = ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen', 'webkitEnterFullScreen'];
    let i: number = 0;
    let value: string;
    const length = fullScreenValues.length;
    for (i; i < length; i += 1) {
        value = fullScreenValues[i];
        if (this.props.video.current![value]) {
            this.props.video.current![value]();
        }
    }
  };

  public changePage(): void {
    if (this.props.nextPage === '') {
      return;
    }
    setTimeout(() => {
        this.props.history.push(this.props.nextPage);
    }, 1000);
  };

  public componentWillReceiveProps(nextProps: IControlsProps): void {
    if(nextProps.videoState === 100 && this.state.videoDone === false) {
      this.setState({ videoDone: true }, this.changePage.bind(this));
    }
  };

  public initFullscreen(): React.ReactElement<any> {
    if (this.props.fullscreen) {
      return (
        <button
        className="section_video__fullscreen"
        onClick={this.onSetFullsreen}
        >{ControlsContent.text.fullscreen}</button>
      );
    } else {
      return <React.Fragment />;
    }
  };

  public setProgress(): React.ReactElement<any> {
    return (
      <div className="section_video__progress--container">
        <div className="section_video__progress" style={ {width: this.props.videoState + '%'} }/>
      </div>
    );
  };

  public setSound(): React.ReactElement<any> {
    return (
      <button
      className={this.props.video.current! && this.props.video.current!.muted ? "section_video__sound": "section_video__sound active"}
      onClick={this.onChangeSound}
      >{ControlsContent.text.sound}</button>
    );
  };

  public setSubtitles(): React.ReactElement<any> {
    return (
      <button
      className={this.track && this.track.mode === 'showing' ? "section_video__subtitles active": "section_video__subtitles"}
      onClick={this.onChangeSubtitles}
      >{ControlsContent.text.subtitles}</button>
    );
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="section_video__status">
        <div className="section_video__controls">
          <div className="section_video__controls--left">
            {this.setSound()}
            {this.track && this.setSubtitles() }
          </div>
          <p><span>{this.props.duree.current}</span> / <span>{this.props.duree.total}</span></p>
          <div className="section_video__controls--right">
            {this.initFullscreen()}
          </div>
        </div>
        {this.setProgress()}
      </div>
    );
  };
}
