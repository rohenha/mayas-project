// Imports
import { IQuoteProps, IQuoteState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote.component.sass';

// Components
import { ImageComponent } from 'Components';

export class QuoteComponent extends React.Component<IQuoteProps, IQuoteState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="quote">
              {this.props.img !== '' && <ImageComponent image={this.props.img} fullscreen={true} />}
              <div className="container-fluid">
                <h2 className="text__title-multi-path">{this.props.citation[0]}</h2>
                <h3 className="text__subtitle">{this.props.citation[1]}</h3>
                <p>{this.props.name}</p>
              </div>
            </div>
        );
    }
}
