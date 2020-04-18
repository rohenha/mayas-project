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
            <section className="section_text">
                <div className="container-fluid section_text__container">
                    <div className="section_text__content">
                      {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}
