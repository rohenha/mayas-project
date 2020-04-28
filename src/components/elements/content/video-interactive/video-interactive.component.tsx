// Imports
import { IContentInteractiveState, IVideoInteractiveProps } from 'Interfaces';
import * as React from 'react';

// Styles
import './video-interactive.component.sass';

// Components
import { VideoComponent, VideoYoutubeComponent } from 'Components';

// Services
// import { ContentService } from 'Services';

export class VideoInteractiveComponent extends React.Component<IVideoInteractiveProps, IContentInteractiveState> {
    public closeFunction: () => {} = this.close.bind(this);
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
    }

    public close(): void {
        this.props.closeFunction();
    }

    public renderComponent(): any {
      switch (this.props.content.file) {
        case 'video':
          return <VideoComponent {...this.props} content={{
            autoplay: false,
            controls: true,
            cover: false,
            loop: false,
            muted: false,
            nextPage: '',
            poster: this.props.content.content.poster,
            sources: this.props.content.content.sources,
            subtitles: ''
          }} />
          break;

        case 'youtube':
          return <VideoYoutubeComponent {...this.props} content={this.props.content.content} />
          break;

        default:
          break;
      }
    };

    public render(): React.ReactElement<any> {
        return (
            <div className="section_content-interactive section_video-interactive">
              <div className="section_content-interactive__backface" />
              <div className="section_content-interactive__content">
                <button className="section_content-interactive__cross cross" onClick={this.closeFunction} />
                <h3>{this.props.content.title}</h3>
                {this.renderComponent()}
              </div>
            </div>
        );
    }
}
