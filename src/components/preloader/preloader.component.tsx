// Imports
import { IPreloadProps, IPreloadState } from 'Interfaces';
import * as React from 'react';

// Styles
import './preloader.component.sass';

// Components
import { LoaderComponent } from 'Components';

// Content
import { PreloaderContent } from 'Content';

export class PreloaderComponent extends React.Component<IPreloadProps, IPreloadState> {
  public node: React.RefObject<HTMLDivElement>;
  private constructor(props: IPreloadProps) {
    super(props);
    this.state = {
      avancement: 0
    };
  };

  public setSound(): React.ReactElement<any> {
    if (this.props.sound) {
      return (
        <div className="preloader__sound">
          <p className="text__link">{PreloaderContent.text.experience}</p>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50">
            <path className="st0" d="M48,48V25C48,12.3,37.7,2,25,2S2,12.3,2,25v23" />
            <path className="st1" d="M48,48h-4.5C41,48,39,46,39,43.5v-9.1c0-2.5,2-4.5,4.5-4.5H48V48z" />
            <path className="st1" d="M2,30h4.5C9,30,11,32,11,34.5v9.1C11,46,9,48,6.5,48H2V30z" />
          </svg>
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  };


  public render(): React.ReactElement<any> {
    return (
      <div className="preloader">
        <div className="container-fluid">
          {this.setSound()}
          <h2>{PreloaderContent.text.title.title}</h2>
          <h3 className="text__subtitle">{PreloaderContent.text.title.subtitle}</h3>
          <div className="preloader__loader">
              <p className="text__link">{PreloaderContent.text.loading} {this.state.avancement}%</p>
              <LoaderComponent />
          </div>
        </div>
      </div>
    );
  };
}
