// Imports
import { IGalerieElement, IGalerieState, IPageComponentProps } from 'Interfaces';
import * as React from 'react';

// Styles
import './galerie.component.sass';

// Components
import { DetailsComponent, DetailsGalerieComponent, ImageGalerieComponent, ImageTitleComponent } from 'Components';

// Services
import Providers from 'Providers';
import { AnimationsService } from 'Services';

export class GalerieComponent extends React.Component<IPageComponentProps, IGalerieState> {
  public images: IGalerieElement[];
  public onToggleImage: (element: IGalerieElement) => void = this.toggleImage.bind(this);
  public animationsService: AnimationsService = new AnimationsService();
  public node: React.RefObject<HTMLDivElement>;
  public detailsNode: React.RefObject<HTMLDivElement>;
  private constructor(props: IPageComponentProps) {
    super(props);
    this.state = {
        element: Providers['ImageGalerieBase'],
        open: false
    };
    this.node = React.createRef();
  };

  public toggleImage(element: IGalerieElement): void {
    const open: boolean = element !== Providers['ImageGalerieBase'];
    const delay: number = open ? 0 : this.props.content.delayClose;
    this.setState({ open });
    setTimeout(() => {
      this.setState({ element });
    }, delay);
  };

  public renderGalerie(element: IGalerieElement, index: number): React.ReactElement<any> {
    switch (element.type) {
      case 'image':
        return <ImageGalerieComponent
          key={index}
          index={index}
          toggleImage={this.onToggleImage}
          open={this.state.element === element}
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
          <DetailsGalerieComponent content={this.state.element} closeDetails={this.onToggleImage} open={this.state.open} />;
        </DetailsComponent>
      </div>
    );
  };
}
