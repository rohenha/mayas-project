// Imports
import { IContentPartProps, IContentPartState } from 'Interfaces';
import * as React from 'react';

// Styles
import './content-part.component.sass';

// Components

export class ContentPartComponent extends React.Component<IContentPartProps, IContentPartState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__contentPart">
                <img className="bg" src={this.props.img} />
                <div className="content__contentPart-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
