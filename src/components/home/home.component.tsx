// Imports
import { IPageComponentProps, IPageComponentState } from 'Interfaces';
import * as React from 'react';

// Styles
import './home.component.sass';

// Components
import { SliderComponent } from 'Components';

// Content
import * as Content from 'Content';

// Services
import { ContentService } from 'Services';

export class HomeComponent extends React.Component<IPageComponentProps, IPageComponentState> {
  public sliderDone: () => {} = this.onSliderDone.bind(this);
  public contentService: ContentService = new ContentService();
  constructor(props: any) {
    super(props);
  }

  public onSliderDone() : any {
    const redirection = Content[this.props.content.start];
    this.props.history.push(redirection.url);
  }

  public renderAuthors(): any {
    return this.props.content.authors.map((author: {poste: string, name: string}, index: number) =>
      <p className="text__link" key={index}>{author.poste} : <span>{author.name}</span></p>
    );
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="page-home js-home">
        {this.contentService.renderBackground(this.props.content.video, this.props.content.imgs, this.props)}
        <div className="page__content js-container">
          <div className="container-fluid">
            <div className="page-home__introduce js-introduce">
              <h3 className="text__subtitle">{this.props.content.introduce.title}</h3>
              <p className="text__link">{this.props.content.introduce.subtitle}</p>
            </div>
            <div className="page-home__title js-title">
              <h1 className="text__title">{this.props.content.title.title}</h1>
              <h2 className="text__subtitle">{this.props.content.title.subtitle}</h2>
            </div>
            <div className="page-home__form-enter js-form-enter">
              {this.props.content.start !== "" && <SliderComponent onDone={this.sliderDone}/>}
              <p className="text__link">{this.props.content.interaction}</p>
            </div>
            <div className="page-home__realisation js-realisation">
            {this.renderAuthors()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
