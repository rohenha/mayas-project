// Imports
import { IQuoteProps, IQuoteState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote.component.scss';

// Components

export class QuoteComponent extends React.Component<IQuoteProps, IQuoteState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="quote">
                <img className="bg" src={this.props.img} />
                <div className="container">
                    <h2>{this.props.citation}</h2>
                    <h3>{this.props.name}</h3>
                    {this.props.children}
                </div>
            </div>
        );
    }
}