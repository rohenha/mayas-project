// Imports
import { IInteractivePhotoState, IPageComponentProps, ITextInteractive } from 'Interfaces';
import * as React from 'react';

// Styles
import './interactive-photo.component.sass';

// Components
import { ContentInteractiveComponent, ImageComponent, SoundDocComponent, VideoInteractiveComponent } from 'Components';

export class InteractivePhotoComponent extends React.Component<IPageComponentProps, IInteractivePhotoState> {
  private constructor(props: IPageComponentProps) {
    super(props);
    this.state = {
      active: { content: [], file: [], title:"", type: "", x: "", y: "" }
    };
  };

  public openElement(point: ITextInteractive): void {
    let newActive: ITextInteractive = point;
    if (this.state.active === point || point === null) {
      newActive = { content: [], file: [], title:"", type: "", x: "", y: "" };
    }
    this.setState({ active: newActive });
  };

  public setButtonClassName(point: ITextInteractive): string {
    let className: string = '';
    if (point.type !== '') {
      className = 'section_interactive-photo__points--' + point.type;
      if (this.state.active === point) {
        className += ' active';
      }
    }
    return className;
  };

  public setContent(): React.ReactElement<any> {
    let Component = null;
    switch (this.state.active.type) {
      case 'audio':
        Component = SoundDocComponent;
        break;

      case 'text':
        Component = ContentInteractiveComponent;
        break;

      case 'video':
        Component = VideoInteractiveComponent;
        break;

      default:
        break;
    }
    if (Component) {
      return <Component {...this.props} closeFunction={this.openElement.bind(this, this.state.active)} content={this.state.active} />;
    } else {
      return <React.Fragment />;
    }
  };

  public renderPoint(point: ITextInteractive, index: number): React.ReactElement<any> {
    return (
      <li
      style={ {left: point.x, top: point.y} }
      key={index}>
        <button className={this.setButtonClassName(point)} onClick={this.openElement.bind(this, point)}>{point.title}</button>
      </li>
    );
  };

  public render(): React.ReactElement<any> {
    return (
      <section className="section_interactive-photo">
        <div className="container-fluid">
          <ImageComponent image={this.props.content.image} fullscreen={false} />
          {this.setContent()}
          <ul className="section_interactive-photo__points">
            {this.props.content.points.map(this.renderPoint.bind(this))}
          </ul>
        </div>
      </section>
    );
  };
}
