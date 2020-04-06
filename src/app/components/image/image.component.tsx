// Imports
import { IImageProps, IImageState } from 'Interfaces';
import * as React from 'react';

// Styles
import './image.component.sass';

// Components

// Content

export class ImageComponent extends React.Component<IImageProps, IImageState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="section__image">
              <img src={this.props.path} />
            </div>
        );
    }
}
