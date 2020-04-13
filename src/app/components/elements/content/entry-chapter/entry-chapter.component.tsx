// Imports
import { IEntryChapterProps, IEntryChapterState } from 'Interfaces';
import * as React from 'react';

// Styles
import './entry-chapter.component.sass';

// Components
import { ImageComponent, VideoComponent } from 'Components';

export class EntryChapterComponent extends React.Component<IEntryChapterProps, IEntryChapterState> {

    constructor(props: any) {
        super(props);
    }

    public setBackground (): any {
      if (this.props.video) {
        return <VideoComponent
            sources={this.props.imgs[1]}
            poster={this.props.imgs[0]}
            controls={false}
            autoplay={true}
            loop={true}
            muted={true}
            {...this.props}
            nextPage=""
            cover={true}
            subtitles=''
        />;
      } else {
        return <ImageComponent image={this.props.imgs[0]} fullscreen={true} />;
      }
    };

    public render(): React.ReactElement<any> {
        return (
            <div className="page section__entry-chapter">
                {this.setBackground()}
                <div className="page__content">
                    <div className="container-fluid">
                      <h3 className="text__subtitle" dangerouslySetInnerHTML={{__html: this.props.subtitle}}/>
                      <h1>{this.props.text}</h1>
                      <p className="section__entry-chapter--text">{this.props.introduction}</p>
                      <p className="component__scroll">Scroll <span className="component__scroll--arrow"/></p>
                    </div>
                </div>
            </div>
        );
    }
}
