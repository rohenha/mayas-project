// Imports
import { TweenMax } from 'gsap';
import { IImageSliderProps, IImageSliderState } from 'Interfaces';
import * as React from 'react';

// Styles
import './image-slider.component.scss';

// Components

export class ImageSliderComponent extends React.Component<IImageSliderProps, IImageSliderState> {
    public node: React.RefObject<HTMLDivElement>;
    public imageHeight: number;
    public nextSlide: () => any = this.nextSlideAnimation.bind(this)
    public previousSlide: () => any = this.previousSlideAnimation.bind(this)
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
        this.state = {
            index: 0
        };
    }

    public previousSlideAnimation(): void {
        if (this.state.index > 0) {
            this.slideAnimation(this.state.index - 1);
        }
    }

    public nextSlideAnimation(): void {
        if (this.state.index < this.props.imgs.length - 1) {
            this.slideAnimation(this.state.index + 1);
        }
    }

    public slideAnimation(index:number): void {
        this.imageHeight = this.node.current!.getElementsByClassName('content__imageSlider-content_image')[0].getBoundingClientRect().height;
        TweenMax.to(this.node.current!, 0.5, { y: -index * (this.imageHeight + 50) });
        this.setState({ index });
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__imageSlider">
                <div className="content__imageSlider-container">
                    <div className="content__imageSlider-content" ref={this.node}>
                        {this.props.imgs.map((img, j: number) => {
                            return (
                                <div className="content__imageSlider-content_image" key="i" onClick={this.slideAnimation.bind(this, j)}>
                                    <img src={ img } alt="" />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="slide-controller">
                    <div className="slide slide-previous" onClick={this.previousSlide} />
                    <div className="slide slide-next" onClick={this.nextSlide} />
                </div>
            </div>
        );
    }
}