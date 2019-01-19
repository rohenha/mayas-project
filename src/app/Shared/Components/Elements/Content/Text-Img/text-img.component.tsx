// Imports
import { ITextImgProps, ITextImgState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text-img.component.scss';

// Components

export class TextImgComponent extends React.Component<ITextImgProps, ITextImgState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="content__textImg">
                <div className="content__textImg-content">
                    {this.props.children}
                </div>
                <div className="content__textImg-img">
                    <img src={this.props.img} alt="" />
                </div>
            </div>
        );
    }
}