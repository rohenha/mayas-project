// Imports
import { IHomeText, IPageComponentProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './home.component.sass';

// Components
import { SliderComponent } from 'Components';

// Content
import * as Content from 'Content';

// Services
import { ContentService } from 'Services';

export class HomeComponent extends React.Component<IPageComponentProps, ISimpleState> {
  public sliderDone: () => void = this.onSliderDone.bind(this);
  public contentService: ContentService = new ContentService();

  private constructor(props: any) {
    super(props);
  };

  public onSliderDone() : void {
    const redirection = Content[this.props.content.start];
    this.props.history.push(redirection.url);
  };

  public renderAuthors(): React.ReactElement<any> {
    return this.props.content.authors.map((author: {poste: string, name: string}, index: number) =>
      <p className="text__link" key={index}>{author.poste} : <span>{author.name}</span></p>
    );
  };

  public renderTitle(contentName: string, elements: IHomeText[]): React.ReactElement<any> {
    return (
      <div className={"page-home__" + contentName + " js-" + contentName}>
        {elements.map((element: any, index: number) => {
          const Element = element.element;
          return <Element className={element.className} key={index}>{element.content}</Element>;
        })}
      </div>
    );
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="page-home js-home">
        {this.contentService.renderBackground(this.props.content.video, this.props.content.imgs, this.props)}
        <div className="page__content js-container">
          <div className="container-fluid">
            {this.renderTitle('introduce', [ { className: 'text__subtitle', content: this.props.content.introduce.title , element: 'h3' }, { className: 'text__link', content: this.props.content.introduce.subtitle , element: 'p' } ])}
            {this.renderTitle('title', [ { className: 'text__title', content: this.props.content.title.title , element: 'h1' }, { className: 'text__subtitle', content: this.props.content.title.subtitle , element: 'h2' } ])}
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
  };
}
