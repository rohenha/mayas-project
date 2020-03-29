// Imports
import { IITitleProps, IITitleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './title.component.sass';

// Components

export class ImageTitleComponent extends React.Component<IITitleProps, IITitleState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
           <div className="galerie__title">
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}
