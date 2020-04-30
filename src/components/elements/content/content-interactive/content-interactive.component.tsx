// Imports
import { IContentInteractiveProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './content-interactive.component.sass';

// Components
import { ImageSliderComponent } from 'Components';

// Services
import { ContentService } from 'Services';

export class ContentInteractiveComponent extends React.Component<IContentInteractiveProps, ISimpleState> {
  public closeFunction: () => void = this.close.bind(this);
  public contentService: ContentService = new ContentService();
  public node: React.RefObject<HTMLDivElement>;

  private constructor(props: IContentInteractiveProps) {
      super(props);
      this.node = React.createRef();
  };

  public close(): void {
      this.props.closeFunction();
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="section_content-interactive">
        <div className="section_content-interactive__backface" />
        <div className="section_content-interactive__content">
          <ImageSliderComponent {...this.props} content={{ images: this.props.content.file, vertical: true}} />
          <div className="section_content-interactive__text">
            <div className="section_content-interactive__text--content">
              <h3>
                {this.props.content.title}
                <button className="section_content-interactive__cross cross" onClick={this.closeFunction} />
              </h3>
              {this.contentService.renderContent(this.props.content.content, this.props.history)}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
