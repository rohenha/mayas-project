// Imports
import { IQuoteImgProps, IQuoteImgState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote-img.component.scss';

// Components

export class QuoteImgComponent extends React.Component<IQuoteImgProps, IQuoteImgState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }

    public classQuoteImg(): any {
        let classString = 'content__quoteImg ';
        classString = this.props.top ? classString : classString + ' content__quoteImg-bottom ';
        classString = this.props.imgs.length > 1 ? classString : classString + ' content__quoteImg-single';
        return classString;
    }


    public render(): React.ReactElement<any> {
        return (
            <div className={this.classQuoteImg()}>
                { this.props.imgs.map( (img: string, index:number) => 
                    <div key={index} className="content__quoteImg-img">
                        <img src={img} alt="" />
                    </div>
                )}
                <div className="content__quoteImg-content">
                    {this.props.title === '' ? <p className="title">{this.props.title}</p> : null}
                    {this.props.children}
                </div>
            </div>
        );
    }
}