// Imports
import { IPageComponentProps, IPageComponentState } from 'Interfaces';
import * as React from 'react';

// Styles
import './home.component.sass';

// Components
import { ImageComponent, SliderComponent, VideoComponent } from 'Components';

export class HomeComponent extends React.Component<IPageComponentProps, IPageComponentState> {
    public sliderDone: () => {} = this.onSliderDone.bind(this);
    constructor(props: any) {
        super(props);
    }

    public onSliderDone() : any {
        this.props.history.push(this.props.content.url)
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
          <div className="page page-home js-home">
              {this.setBackground()}
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
                    {this.props.content.url !== "" && <SliderComponent onDone={this.sliderDone}/>}
                    <p className="text__link">{this.props.content.interaction}</p>
                  </div>
                  <div className="page-home__realisation js-realisation">
                  {this.props.content.authors.map((author: {poste: string, name: string}, index: number) =>
                    <p className="text__link" key={index}>{author.poste} : <span>{author.name}</span></p>
                  )}
                  </div>
                </div>
              </div>

          </div>
      );
    }
}
