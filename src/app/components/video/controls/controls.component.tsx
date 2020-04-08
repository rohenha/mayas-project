// Imports
import { IControlsProps, IControlsState } from 'Interfaces';
import * as React from 'react';

// Styles
import './controls.component.sass';

// Components
// import { ButtonExpComponent } from 'Components';

export class ControlsComponent extends React.Component<IControlsProps, IControlsState> {
    public onChangePage: () => void = this.changePage.bind(this);
    public onChangeSound: () => void = this.toggleSound.bind(this);
    public onChangeSubtitles: () => void = this.toggleSubtitles.bind(this);
    public onSetFullsreen: () => void = this.setFullscreen.bind(this);
    public track: any;
    private constructor(props: any) {
        super(props);
        this.state = {
            videoDone: false
        };
    };

    public componentDidMount(): void {
      this.track = this.props.video.current!.textTracks[0];
    };

    public toggleSound(): any {
      this.props.video.current!.muted = !this.props.video.current!.muted;
    };

    public toggleSubtitles(): any {
      this.track.mode = this.track.mode === 'showing' ? 'hidden' : 'showing';
    };

    public setFullscreen(): any {
      const fullScreenValues = ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen', 'webkitEnterFullScreen'];
      let i = 0;
      let value;
      const length = fullScreenValues.length;
      for (i; i < length; i += 1) {
          value = fullScreenValues[i];
          if (this.props.video.current![value]) {
              this.props.video.current![value]();
          }
      }
    };

    public changePage(): any {
      if (this.props.nextPage === '') {
        return null;
      }
      setTimeout(() => {
          this.props.history.push(this.props.nextPage);
      }, 1000);
    };

    public componentWillReceiveProps(nextProps: any): any {
        if(nextProps.videoState === 100 && this.state.videoDone === false) {
            this.setState({ videoDone: true }, this.changePage.bind(this));
        }
    };

    public initFullscreen(): any {
      if (this.props.fullscreen) {
        return (
          <button
          className="section_video__fullscreen"
          onClick={this.onSetFullsreen}
          >fullscreen</button>
        );
      }
    };

    public render(): React.ReactElement<any> {
        return (
          <div className="section_video__status">
              <div className="section_video__controls">
                <div className="section_video__controls--left">
                  <button
                  className={this.props.video.current! && this.props.video.current!.muted ? "section_video__sound": "section_video__sound active"}
                  onClick={this.onChangeSound}
                  >sound</button>
                  {this.track ?
                    <button
                    className={this.track && this.track.mode === 'showing' ? "section_video__subtitles active": "section_video__subtitles"}
                    onClick={this.onChangeSubtitles}
                    >subtitles</button>
                    : null
                  }
                </div>
                <p><span>{this.props.duree.current}</span> / <span>{this.props.duree.total}</span></p>
                <div className="section_video__controls--right">
                  {this.initFullscreen()}
                </div>
              </div>
              <div className="section_video__progress--container">
                <div className="section_video__progress" style={ {width: this.props.videoState + '%'} }/>
              </div>
          </div>
        );
    };
}
