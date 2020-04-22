// Imports
import { IGalerieElement, IGalerieState, IPageComponentProps } from 'Interfaces';
import * as React from 'react';

// Styles
import './galerie.component.sass';

// Components
import { DetailsComponent, DetailsGalerieComponent, ImageGalerieComponent, ImageTitleComponent } from 'Components';


// Services
import { AnimationsService } from 'Services';

export class GalerieComponent extends React.Component<IPageComponentProps, IGalerieState> {
    public images: Array<{image: string, name: string, description: string, portrait: boolean}>;
    public toggleImage: () => any = this.openImage.bind(this);
    public animationsService: AnimationsService = new AnimationsService();
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.state = {
            imageOpen: -1
        };
        this.node = React.createRef();
    }

    public openImage(element: number): void {
        const newEl = element !== this.state.imageOpen || element !== -1 ? element : -1;
        let delay = 0;
        if (element === -1) {
          this.animationsService.toggleAnimation(null, 'CommonAnimation', 'exit');
          delay = this.props.content.delayClose;
        }
        setTimeout(() => {
          this.setState({ imageOpen: newEl });
        }, delay);
    }

    public renderGalerie(element: IGalerieElement, index: number): any {
      switch (element.type) {
        case 'image':
          return <ImageGalerieComponent
            key={index}
            index={index}
            toggleImage={this.toggleImage}
            open={this.state.imageOpen === index}
            delayClose={this.props.content.delayClose}
            element={element} />
          break;
        case 'title':
          return <ImageTitleComponent key={index} title={element.name} />
          break;
        case 'space':
          return <div className="section_galerie__space" key={index}/>
          break;
        default:
          return <div className="section_galerie__space" key={index}/>
          break;
      }
    };

    public render(): React.ReactElement<any> {
        return (
          <div className="section_galerie">
            <DetailsComponent>
              {this.props.content.images.map((element: IGalerieElement, index: number) =>
                this.renderGalerie(element, index)
              )}
              {this.state.imageOpen > -1 &&
                <DetailsGalerieComponent content={this.props.content.images[this.state.imageOpen]} closeDetails={this.toggleImage} />
              }
            </DetailsComponent>
          </div>
        );
    }
}
