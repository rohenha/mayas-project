// Imports
import { IPageComponentProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './entry-chapter.component.sass';

// Services
import { ContentService } from 'Services';

export class EntryChapterComponent extends React.Component<IPageComponentProps, ISimpleState> {
  public contentService: ContentService = new ContentService();

  private constructor(props: IPageComponentProps) {
    super(props);
  };

  public render(): React.ReactElement<any> {
    return (
      <section className="section__entry-chapter">
        {this.contentService.renderBackground(this.props.content.video, this.props.content.imgs, this.props)}
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
  };
}
