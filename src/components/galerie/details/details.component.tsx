// Imports
import { IGalerieDetailsProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './details.component.sass';

// Services
import Providers from 'Providers';
import { AnimationsService } from 'Services';

export class DetailsGalerieComponent extends React.Component<IGalerieDetailsProps, ISimpleState> {
  public node: React.RefObject<HTMLDivElement>;
  public animationsService: AnimationsService = new AnimationsService();
  public onCloseDetails: () => void = this.closeImage.bind(this);

  private constructor(props: IGalerieDetailsProps) {
    super(props);
    this.node = React.createRef();
  }

  public closeImage(): void {
    this.props.closeDetails(Providers['ImageGalerieBase']);
  };

  public componentDidUpdate(prevProps: IGalerieDetailsProps): void {
    if (this.props.open !== prevProps.open) {
      const state: string = this.props.open ? 'enter' : 'exit';
      this.animationsService.toggleAnimation(this.node.current, 'CommonAnimation', state);
    }
  }

  public render(): React.ReactElement<any> {
    return (
      <div className="section_galerie__details" ref={this.node}>
        <div className="section_galerie__details-container">
          <h1>{this.props.content.name}<button className="section_galerie__details--cross cross" onClick={this.onCloseDetails} /></h1>
          <p>{this.props.content.description}</p>
        </div>
      </div>
    );
  }
}
