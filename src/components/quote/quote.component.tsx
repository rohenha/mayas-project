// Imports
import { IPageComponentProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './quote.component.sass';

// Components
import { ImageComponent } from 'Components';

export class QuoteComponent extends React.Component<IPageComponentProps, ISimpleState> {
  public node: React.RefObject<HTMLDivElement>;

  private constructor(props: IPageComponentProps) {
    super(props);
  };

  public renderImage(): React.ReactElement<any> {
    if (this.props.content.image.path !== '') {
      return <ImageComponent image={this.props.content.image} fullscreen={true} />;
    } else {
      return <React.Fragment />;
    }
  };

  public render(): React.ReactElement<any> {
    return (
      <section className="section_quote">
        {this.renderImage()}
        <div className="container-fluid">
          <h2 className="text__title-multi-path">{this.props.content.citation[0]}</h2>
          {this.props.content.citation[1] && <h3 className="text__subtitle">{this.props.content.citation[1]}</h3> }
          <p>{this.props.content.name}</p>
        </div>
      </section>
    );
  };
}
