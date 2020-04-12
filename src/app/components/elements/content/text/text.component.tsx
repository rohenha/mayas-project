// Imports
import { ITextProps, ITextState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text.component.sass';

// Components

export class TextComponent extends React.Component<ITextProps, ITextState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="section_text">
                <div className="section_text__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
