// Imports
import { IPageComponentProps, IPageComponentState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote.component.sass';

// Components
import { ImageComponent } from 'Components';

export class QuoteComponent extends React.Component<IPageComponentProps, IPageComponentState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <section className="section_quote">
              {this.props.content.image !== '' && <ImageComponent image={this.props.content.image} fullscreen={true} />}
              <div className="container-fluid">
                <h2 className="text__title-multi-path">{this.props.content.citation[0]}</h2>
                {this.props.content.citation[1] && <h3 className="text__subtitle">{this.props.content.citation[1]}</h3> }
                <p>{this.props.content.name}</p>
              </div>
            </section>
        );
    }
}
