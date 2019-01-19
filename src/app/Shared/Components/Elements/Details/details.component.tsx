// Imports
import { IDetailsProps, IDetailsState } from 'Interfaces';
import * as React from 'react';

// Styles
import './details.component.scss';

// Components

export class DetailsComponent extends React.Component<IDetailsProps, IDetailsState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="page pageContent" data-page="Details">
                <div className="content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}