// Imports
import { IQuoteImgProps, IQuoteImgState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote-img.component.sass';

// Components

export class QuoteImgComponent extends React.Component<IQuoteImgProps, IQuoteImgState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }

    public classQuoteImg(): any {
        let classString = 'content__quote-img ';
        classString = this.props.top ? classString : classString + ' content__quote-img--bottom ';
        classString = this.props.imgs.length > 1 ? classString : classString + ' content__quote-img--single';
        return classString;
    }


    public render(): React.ReactElement<any> {
        return (
            <div className={this.classQuoteImg()}>
                { this.props.imgs.map( (img: string, index:number) =>
                    <div key={index} className="content__quote-img--img">
                        <img src={img} alt="" />
                    </div>
                )}
                <div className="content__quote-img--content">
                    {this.props.title !== '' ? <h3>{this.props.title}</h3> : null}
                    {this.props.children}
                </div>
            </div>
        );
    }
}
