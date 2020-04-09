// Imports
import { IGalerieDetailsProps, IGalerieDetailsState } from 'Interfaces';
import * as React from 'react';

// Styles
import './details.component.sass';

// Components

// Services
import { AnimationsService } from 'Services';

export class DetailsGalerieComponent extends React.Component<IGalerieDetailsProps, IGalerieDetailsState> {
    public node: React.RefObject<HTMLDivElement>;
    public animationsService: AnimationsService = new AnimationsService();
    public onCloseDetails: () => any = this.closeImage.bind(this);
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
    }

    public closeImage(): void {
      this.animationsService.toggleAnimation(this.node, 'CommonAnimation', 'exit');
      setTimeout(() => {
        this.props.closeDetails(-1);
      }, 1000);
    };

    public componentDidMount(): void {
      this.animationsService.toggleAnimation(this.node, 'CommonAnimation', 'enter');
    }

    public render(): React.ReactElement<any> {
        return (
          <div className="section_galerie__details" ref={this.node}>
            <div className="section_galerie__details-container">
              <h1>{this.props.content.name}<div className="section_galerie__details--cross cross" onClick={this.onCloseDetails} /></h1>
              <p>{this.props.content.description}</p>
            </div>
          </div>
        );
    }
}
