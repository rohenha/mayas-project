// Imports
import { IInteractivePhotoProps, IInteractivePhotoState } from 'Interfaces';
import * as React from 'react';

// Styles
import './interactive-photo.component.sass';

// Components
import { ContentInteractiveComponent, SoundDocComponent } from 'Components';

export class InteractivePhotoComponent extends React.Component<IInteractivePhotoProps, IInteractivePhotoState> {

    constructor(props: any) {
        super(props);
        this.state = {
            play: false,
            sound : "",
            soundOpen: true,
            text: {
                content: [],
                file: [],
                title: "",
                type: ""
            },
            textOpen: false
        };
    }

    public openElement(point:any, e: any):void {
        let play
        let content;
        switch (point.type) {
            case "audio":
                play = !this.state.play ? true : false;
                this.setState({
                    play,
                    sound: point.file,
                });
            break;
            case "text":
                play = !this.state.textOpen ? true : false;
                content = point.title !== undefined ? point : this.state.text;
                this.setState({ text: content, textOpen: play });
            break;
        }
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__interactivePhoto">
                <img src={this.props.img} />
                { this.state.soundOpen ? <SoundDocComponent sound={this.state.sound} delay={0} autoplay={false} play={this.state.play} /> : null }
                <div className="content__interactivePhoto-content">
                    {this.props.points.map((point: any, index: number) =>
                        <div
                            className={point.file === this.state.sound && point.type === "audio" ? "content__interactivePhoto-content--point active" : point.file !== this.state.sound && point.type === "audio" ? "content__interactivePhoto-content--point" : "content__interactivePhoto-content--point text"}
                            style={ {left: point.x, top: point.y} }
                            key={index}
                            onClick={this.openElement.bind(this, point)}
                        >
                            <h3>{point.title}</h3>
                        </div>
                    )}
                </div>
                <ContentInteractiveComponent open={this.state.textOpen} closeFunction={this.openElement.bind(this, {type: "text"})} text={this.state.text} />
            </div>
        );
    }
}
