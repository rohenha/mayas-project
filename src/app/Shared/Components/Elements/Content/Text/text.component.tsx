// Imports
import { ITextProps, ITextState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text.component.scss';

// Components

export class TextComponent extends React.Component<ITextProps, ITextState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__text">
                <div className="content__text-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}