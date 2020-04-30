// Imports
import { IPageComponentProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text.component.sass';

// Services
import { ContentService } from 'Services';


export class TextComponent extends React.Component<IPageComponentProps, ISimpleState> {
  public contentService: ContentService = new ContentService();

  private constructor(props: IPageComponentProps) {
    super(props);
  };

  public render(): React.ReactElement<any> {
    return (
      <section className="section_text">
        <div className="container-fluid section_text__container">
          <div className="section_text__content">
            {this.contentService.renderContent(this.props.content.texts, this.props.history)}
          </div>
        </div>
      </section>
    );
  };
}
