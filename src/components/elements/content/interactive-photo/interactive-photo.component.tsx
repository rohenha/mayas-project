// Imports
import { IInteractivePhotoState, IPageComponentProps, ITextInteractive } from 'Interfaces';
import * as React from 'react';

// Styles
import './interactive-photo.component.sass';

// Components
import { ContentInteractiveComponent, ImageComponent, SoundDocComponent, VideoInteractiveComponent } from 'Components';

export class InteractivePhotoComponent extends React.Component<IPageComponentProps, IInteractivePhotoState> {
    constructor(props: any) {
        super(props);
        this.state = {
            active: { content: [], file: [], title:"", type: "", x: "", y: "" }
        };
    }

    public openElement(point: any, e: any):void {
      let newActive = point;
      if (this.state.active === point || point === null) {
        newActive = { content: [], file: [], title:"", type: "", x: "", y: "" };
      }
      this.setState({ active: newActive });
    }

    public setButtonClassName(point: any): any {
      let className = '';
      if (point.type !== '') {
        className = 'section_interactive-photo__points--' + point.type;
        if (this.state.active === point) {
          className += ' active';
        }
      }
      return className;
    };

    public setContent(): any {
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
      }
    };

    public render(): React.ReactElement<any> {
        return (
            <section className="section_interactive-photo">
                <div className="container-fluid">
                  <ImageComponent image={this.props.content.image} fullscreen={false} />
                  {this.setContent()}
                  <ul className="section_interactive-photo__points">
                    {this.props.content.points.map((point: ITextInteractive, index: number) =>
                      <li
                      style={ {left: point.x, top: point.y} }
                      key={index}>
                        <button className={this.setButtonClassName(point)} onClick={this.openElement.bind(this, point)}>{point.title}</button>
                      </li>
                    )}
                  </ul>
                </div>
            </section>
        );
    }
}
