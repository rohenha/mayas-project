// Imports
import { TweenMax } from 'gsap';
import { IContentInteractiveProps, IContentInteractiveState } from 'Interfaces';
import * as React from 'react';

// Styles
import './content-interactive.component.scss';

// Components
export class ContentInteractiveComponent extends React.Component<IContentInteractiveProps, IContentInteractiveState> {
    public closeFunction: () => {} = this.close.bind(this);
    public nextSlide: () => any = this.nextSlideAnimation.bind(this);
    public previousSlide: () => any = this.previousSlideAnimation.bind(this);
    public imageWidth: number;
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
        this.state = {
            index: 0
        };
    }

    public close(): void {
        this.props.closeFunction();
    }

    public previousSlideAnimation(): void {
        if (this.state.index > 0) {
            this.slideAnimation(this.state.index - 1);
        }
    }

    public nextSlideAnimation(): void {
        if (this.state.index < this.props.text.file.length - 1) {
            this.slideAnimation(this.state.index + 1);
        }
    }

    public setStyleContainer(): {} {
        return {
            width:this.props.text.file.length * 100 + "%"
        };
    }

    public slideAnimation(index: number): void {
        this.imageWidth = this.node.current!.getBoundingClientRect().width;
        TweenMax.to(this.node.current!.getElementsByClassName('content__interactivePhoto--imgs-container')[0], 0.5, { x: -index * (this.imageWidth) });
        this.setState({ index });
    }

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <div className={this.props.open ? "content__interactivePhoto--backface active" : "content__interactivePhoto--backface"} />
                <div className={this.props.open ? "content__interactivePhoto--text active" : "content__interactivePhoto--text"}>
                    <div className="content__interactivePhoto--imgs" ref={this.node}>
                    { this.props.text.file.length > 1 ?
                            <React.Fragment>
                                <div className="slide slide-previous" onClick={this.previousSlide} />
                                <div className="slide slide-next" onClick={this.nextSlide} />
                            </React.Fragment>
                            : null
                    }
                        
                        <div className="content__interactivePhoto--imgs-container" style={{ width: this.props.text.file.length * 100 + "%" }}>
                            {this.props.text.file.map((img: any, index: number) =>
                                <img key={index * 7} className="content__interactivePhoto--imgs-single" src={img} style={{ width: 100 / this.props.text.file.length + "%" }}/>
                            )}
                        </div>
                    </div>
                    <div className="content__interactivePhoto--text-content">
                        <div className="content__interactivePhoto--text-cross" onClick={this.closeFunction} />
                        <h2>{this.props.text.title}</h2>
                        {this.props.text.content.map((text: any, index: number) =>
                            <p key={index} className="text">{text}</p>
                            )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}