// Imports
import { ITextImgProps, ITextImgState } from 'Interfaces';
import * as React from 'react';

// Styles
import './text-img.component.sass';

// Components
import { ImageComponent } from 'Components';

export class TextImgComponent extends React.Component<ITextImgProps, ITextImgState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <section className={this.props.sens ? "section_text-img" : "section_text-img section_text-img--invert"}>
              <div className="container-fluid">
                <div className="section_text-img__content">
                    {this.props.children}
                </div>
                <div className="section_text-img__img">
                  <ImageComponent image={this.props.img} fullscreen={false} />
                </div>
              </div>
            </section>
        );
    }
}
