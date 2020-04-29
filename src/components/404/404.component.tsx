// Imports
import { IPageComponentProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles

// Components
import { ButtonExpComponent, ImageComponent } from 'Components';

export class P404Component extends React.Component<IPageComponentProps, ISimpleState> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
          <div className="section_404 section__entry-chapter">
            <ImageComponent image={this.props.content.background} fullscreen={true} />
            <div className="page__content">
                <div className="container-fluid">
                  <h3 className="text__subtitle" dangerouslySetInnerHTML={{__html: this.props.content.subtitle}}/>
                  <h1>{this.props.content.title}</h1>
                  <p className="section__entry-chapter--text">{this.props.content.text}</p>
                  <ButtonExpComponent redirection={this.props.content.url} {...this.props} back={true} text={this.props.content.back} />
                </div>
            </div>
          </div>
        );
    }
}
