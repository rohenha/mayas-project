// Imports
import YouTube from '@u-wave/react-youtube';
import { IPageComponentProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './video-youtube.component.sass';

// Components
import * as Content from 'Content';
import Providers from 'Providers';

export class VideoYoutubeComponent extends React.Component<IPageComponentProps, ISimpleState> {
  public static contextType = Providers['ThemeContext'];
  public onVideoEnded: () => any = this.onEnd.bind(this);
  public onVideoPlay: () => any = this.changeSound.bind(this, false);
  public onVideoPause: () => any = this.changeSound.bind(this, true);
  constructor(props: any) {
      super(props);
  }

  public onEnd(): any {
    this.changeSound(true);
    if (this.props.content.nextPage !== '') {
      const redirection = Content[this.props.content.nextPage];
      setTimeout(() => {
        this.props.history.push(redirection.url);
      }, 1000);
    }
  };

  public changeSound(value: boolean): void {
    this.context.toggleSound(value);
  };


  public render(): React.ReactElement<any> {
    return (
      <div className="section_video-youtube">
        <YouTube
          video={this.props.content.id}
          width={"100%"}
          autoplay={this.props.content.autoplay}
          playsInline={true} annotations={this.props.content.annotations}
          showRelatedVideos={false}
          modestBranding={false}
          allowFullscreen={this.props.content.allowFullscreen}
          controls={this.props.content.controls}
          showInfo={false}
          onEnd={this.onVideoEnded}
          onPlaying={this.onVideoPlay}
          onPause={this.onVideoPause}
          />
      </div>
    );
  }
}
