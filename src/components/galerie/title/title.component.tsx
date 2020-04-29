// Imports
import { IITitleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './title.component.sass';

// Components

export class ImageTitleComponent extends React.Component<IITitleProps, ISimpleState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
          <div className="section_galerie__title">
            <h3>{this.props.title}</h3>
          </div>
        );
    }
}
