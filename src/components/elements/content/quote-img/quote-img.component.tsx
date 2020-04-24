// Imports
import { IImage, IPageComponentProps, IPageComponentState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote-img.component.sass';

// Components
import { ImageComponent } from 'Components';

// Services
import { ContentService } from 'Services';

export class QuoteImgComponent extends React.Component<IPageComponentProps, IPageComponentState> {
  public node: React.RefObject<HTMLDivElement>;
  public contentService: ContentService = new ContentService();

  constructor(props: any) {
      super(props);
  }

  public classQuoteImg(): any {
    let classString = 'section_quote-img ';
    classString = this.props.content.top ? classString : classString + ' section_quote-img__bottom ';
    classString = this.props.content.imgs.length > 1 ? classString : classString + ' section_quote-img__single';
    return classString;
  }


  public render(): React.ReactElement<any> {
    return (
      <section className={this.classQuoteImg()}>
        <div className="container-fluid">
          <div className="section_quote-img__images">
            { this.props.content.imgs.map( (img: IImage, index: number) =>
              <ImageComponent key={index} image={img} fullscreen={false} />
            )}
          </div>
          <div className="section_quote-img__content">
            <div className="section_text__content">
              {this.contentService.renderContent(this.props.content.text, this.props.history)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
