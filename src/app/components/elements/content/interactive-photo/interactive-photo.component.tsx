// Imports
import { IInteractivePhotoProps, IInteractivePhotoState } from 'Interfaces';
import * as React from 'react';

// Styles
import './interactive-photo.component.sass';

// Components
import { ImageComponent, SoundDocComponent } from 'Components';
// import { ContentInteractiveComponent, SoundDocComponent } from 'Components';

export class InteractivePhotoComponent extends React.Component<IInteractivePhotoProps, IInteractivePhotoState> {
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

    public setSound(): any {
      if (this.state.active.type === 'audio') {
        // console.log(this.state.active.type === 'audio');
        return <SoundDocComponent sound={this.state.active.file} delay={0} autoplay={true} play={true} />;
      }
    };

    public render(): React.ReactElement<any> {
        return (
            <section className="section_interactive-photo">
                <div className="container-fluid">
                  <ImageComponent image={this.props.img} fullscreen={false} />
                  {this.setSound()}
                  <ul className="section_interactive-photo__points">
                    {this.props.points.map((point: any, index: number) =>
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
