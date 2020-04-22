// Imports
import { IPageComponentProps, IPageComponentState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text-img.component.sass';

// Components
import { ImageComponent } from 'Components';

// Services
import { ContentService } from 'Services';

export class TextImgComponent extends React.Component<IPageComponentProps, IPageComponentState> {
  public contentService: ContentService = new ContentService();
  constructor(props: any) {
      super(props);
      console.log(this.props.content);
  }

  public render(): React.ReactElement<any> {
    return (
      <section className={this.props.content.sens ? "section_text-img" : "section_text-img section_text-img--invert"}>
        <div className="container-fluid">
          <div className="section_text-img__content">
            {this.contentService.renderContent(this.props.content.text)}
          </div>
          <div className="section_text-img__img">
            <ImageComponent image={this.props.content.img} fullscreen={false} />
          </div>
        </div>
      </section>
    );
  }
}
