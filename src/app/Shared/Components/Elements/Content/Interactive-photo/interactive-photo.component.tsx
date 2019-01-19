// Imports
import { IInteractivePhotoProps, IInteractivePhotoState } from 'Interfaces';
import * as React from 'react';

// Styles
import './interactive-photo.component.scss';

// Components
import { SoundDocComponent } from 'Components';

export class InteractivePhotoComponent extends React.Component<IInteractivePhotoProps, IInteractivePhotoState> {

    constructor(props: any) {
        super(props);
        this.state = {
            play: false,
            sound : "",
        };
    }

    public openElement(point:any, e: any):void {
        const play = !this.state.play ? true : false;
        this.setState({
            play,
            sound: point.file,
        });
        
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__interactivePhoto">
                <img src={this.props.img} />
                <SoundDocComponent sound={this.state.sound} delay={0} autoplay={false} play={this.state.play} />
                <div className="content__interactivePhoto-content">
                    {this.props.points.map((point: any, index: number) =>
                        <div 
                            className={point.file === this.state.sound ? "content__interactivePhoto-content--point active" : "content__interactivePhoto-content--point"}
                            style={ {left: point.x, top: point.y} }
                            key={index}
                            onClick={this.openElement.bind(this, point)}
                        >
                            <h3>{point.title}</h3>
                        </div>    
                    )}
                </div>
            </div>
        );
    }
}