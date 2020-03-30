// Imports
import { IHomeProps, IHomeState } from 'Interfaces';
import * as React from 'react';

// Styles
import './home.component.sass';

// Components
import { SliderComponent, VideoComponent } from 'Components';

export class HomeComponent extends React.Component<IHomeProps, IHomeState> {
    public sliderDone: () => {} = this.onSliderDone.bind(this);
    constructor(props: any) {
        super(props);
    }

    public onSliderDone() : any {
        this.props.history.push(this.props.url)
    }

    public render(): React.ReactElement<any> {
      return (
          <div className="page page-home js-home" data-page="Accueil">
              <VideoComponent
                  sources={[
                      { type: 'mp4', path:require('../../assets/videos/Breezy/Breezy.mp4') },
                      { type: 'webm', path:require('../../assets/videos/Breezy/Breezy.webm') },
                      { type: 'ogv', path:require('../../assets/videos/Breezy/Breezy.ogv') }
                  ]}
                  poster={require('../../assets/videos/Breezy/Breezy.jpg')}
                  controls={false}
                  autoplay={true}
                  loop={true}
                  muted={true}
                  {...this.props}
                  nextPage=""
              />
              <div className="page__content js-container">
                <div className="container-fluid">
                  <div className="page-home__introduce js-introduce">
                    <h3 className="text__subtitle">{this.props.text.introduce.title}</h3>
                    <p className="text__link">{this.props.text.introduce.subtitle}</p>
                  </div>
                  <div className="page-home__title js-title">
                    <h1 className="text__title">{this.props.text.title.title}</h1>
                    <h2 className="text__subtitle">{this.props.text.title.subtitle}</h2>
                  </div>
                  <div className="page-home__form-enter js-form-enter">
                    {this.props.url !== "" ? <SliderComponent onDone={this.sliderDone}/> : null}
                    <p className="text__link">{this.props.text.interaction}</p>
                  </div>
                  <div className="page-home__realisation js-realisation">
                  {this.props.text.authors.map((author: {poste: string, name: string}, index: number) =>
                    <p className="text__link" key={index}>{author.poste} : <span>{author.name}</span></p>
                  )}
                  </div>
                </div>
              </div>

          </div>
      );
    }
}
