// Imports
import { IPageComponentProps, IPageComponentState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text.component.sass';

// Components

// Services
import { ContentService } from 'Services';


export class TextComponent extends React.Component<IPageComponentProps, IPageComponentState> {
  public contentService: ContentService = new ContentService();
  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactElement<any> {
    return (
      <section className="section_text">
        <div className="container-fluid section_text__container">
          <div className="section_text__content">
            {this.contentService.renderContent(this.props.content)}
          </div>
        </div>
      </section>
    );
  }
}
