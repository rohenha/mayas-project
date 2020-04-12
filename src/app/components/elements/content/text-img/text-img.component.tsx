// Imports
import { ITextImgProps, ITextImgState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text-img.component.sass';

// Components

export class TextImgComponent extends React.Component<ITextImgProps, ITextImgState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className={this.props.sens ? "section_text-img" : "section_text-img section_text-img--invert"}>
                <div className="section_text-img__content">
                    {this.props.children}
                </div>
                <div className="section_text-img__img">
                    <img src={this.props.img} alt="" />
                </div>
            </div>
        );
    }
}
