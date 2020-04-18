// Imports
import { TweenMax } from 'gsap';
import { IImageSliderProps, IImageSliderState } from 'Interfaces';
import * as React from 'react';

// Styles
import './image-slider.component.sass';

// Components
import { ImageComponent } from 'Components';

export class ImageSliderComponent extends React.Component<IImageSliderProps, IImageSliderState> {
    public node: React.RefObject<HTMLDivElement>;
    public container: React.RefObject<HTMLDivElement>;
    public imageHeight: number;
    public nextSlide: () => any = this.nextSlideAnimation.bind(this);
    public previousSlide: () => any = this.previousSlideAnimation.bind(this);
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
        this.container = React.createRef();
        this.state = {
          height: 0,
          index: 0
        };
    };

    public componentDidMount(): void {
      this.setHeight();
      window.addEventListener('resize', this.setHeight.bind(this));
    };

    public componentWillUnmount(): void {
      window.removeEventListener('resize', this.setHeight.bind(this));
    };

    public previousSlideAnimation(): void {
        if (this.state.index > 0) {
            this.slideAnimation(this.state.index - 1);
        }
    }

    public nextSlideAnimation(): void {
        if (this.state.index < this.props.imgs.length - 1) {
            this.slideAnimation(this.state.index + 1);
        }
    };

    public slideAnimation(index:number): void {
        this.imageHeight = this.container.current!.getBoundingClientRect().height;
        TweenMax.to(this.node.current!, 0.5, { y: -index * this.imageHeight });
        this.setState({ index });
    };

    public setHeight(): void {
        this.setState({ height: this.container.current!.getBoundingClientRect().height });
    };

    public render(): React.ReactElement<any> {
        return (
            <section className="section_slider-img">
              <div className="container-fluid" ref={this.container}>
                <div className="section_slider-img__content" ref={this.node}>
                  {this.props.imgs.map((img: any, index: number) => {
                    return (
                      <div
                        className={this.state.index === index ? "section_slider-img__image section_slider-img__image--active" : "section_slider-img__image" }
                        key={index}
                        onClick={this.slideAnimation.bind(this, index)}
                        style={{ height: this.state.height + 'px'}}
                      >
                        <ImageComponent image={img} fullscreen={false} />
                      </div>
                    );
                  })}
                </div>
                <div className="section_slider-img__nav">
                  <button className="slide slide-previous" onClick={this.previousSlide} />
                  <button className="slide slide-next" onClick={this.nextSlide} />
                </div>
              </div>
            </section>
        );
    }
}
