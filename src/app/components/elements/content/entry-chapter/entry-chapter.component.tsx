// Imports
import { IPageComponentProps, IPageComponentState } from 'Interfaces';
import * as React from 'react';

// Styles
import './entry-chapter.component.sass';

// Components
import { ImageComponent, VideoComponent } from 'Components';

export class EntryChapterComponent extends React.Component<IPageComponentProps, IPageComponentState> {

    constructor(props: any) {
        super(props);
    }

    public setBackground (): any {
      if (this.props.content.video) {
        return <VideoComponent
            sources={this.props.content.imgs[1]}
            poster={this.props.content.imgs[0]}
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
        return <ImageComponent image={this.props.content.imgs[0]} fullscreen={true} />;
      }
    };

    public render(): React.ReactElement<any> {
        return (
            <section className="page section__entry-chapter">
                {this.setBackground()}
                <div className="page__content">
                    <div className="container-fluid">
                      <h3 className="text__subtitle" dangerouslySetInnerHTML={{__html: this.props.content.subtitle}}/>
                      <h1>{this.props.content.text}</h1>
                      <p className="section__entry-chapter--text">{this.props.content.introduction}</p>
                      <p className="component__scroll">Scroll <span className="component__scroll--arrow"/></p>
                    </div>
                </div>
            </section>
        );
    }
}
