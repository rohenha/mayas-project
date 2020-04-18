// Imports
import { IQuoteImgProps, IQuoteImgState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote-img.component.sass';

// Components
import { ImageComponent } from 'Components';

export class QuoteImgComponent extends React.Component<IQuoteImgProps, IQuoteImgState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }

    public classQuoteImg(): any {
        let classString = 'section_quote-img ';
        classString = this.props.top ? classString : classString + ' section_quote-img__bottom ';
        classString = this.props.imgs.length > 1 ? classString : classString + ' section_quote-img__single';
        return classString;
    }


    public render(): React.ReactElement<any> {
        return (
            <section className={this.classQuoteImg()}>
              <div className="container-fluid">
                <div className="section_quote-img__images">
                  { this.props.imgs.map( (img: string, index: number) =>
                    <ImageComponent key={index} image={img} fullscreen={false} />
                  )}
                </div>
                <div className="section_quote-img__content">
                    {this.props.title !== '' && <h3 className="text__title-multi-path">{this.props.title}</h3> }
                    {this.props.children}
                </div>
              </div>
            </section>
        );
    }
}
