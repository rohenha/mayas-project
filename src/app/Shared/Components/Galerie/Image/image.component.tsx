// Imports
import {TimelineMax} from 'gsap';
import { IImageProps, IImageState } from 'Interfaces';
import * as React from 'react';

// Styles
import './image.component.sass';

// Components

export class ImageComponent extends React.Component<IImageProps, IImageState> {
    public node: React.RefObject<HTMLDivElement>;
    public onClickImg: any = this.toggleImage.bind(this);
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
        this.state = {
            transform: {
                MozTransform: 'rotateX(0deg) rotateY(0deg)',
                OTransform: 'rotateX(0deg) rotateY(0deg)',
                WebkitTransform: 'rotateX(0deg) rotateY(0deg)',
                msTransform: 'rotateX(0deg) rotateY(0deg)',
                transform: 'rotateX(0deg) rotateY(0deg)',
            }
        };
    }

    public componentDidUpdate(prevProps: any): void {
        if (this.props.open !== prevProps.open && this.props.open === false) {
            this.closeImage(this.node.current);
        }
    }

    public toggleImage(): void{
        if(!this.props.open) {
            this.openImage(this.node.current);
            this.props.toggleImage(this.props.index);
        } else {
            this.closeImage(this.node.current);
            this.props.toggleImage(-1);
        }
    }

    public openImage(node: any): void {
        const nodeDetails = node.getBoundingClientRect();
        const scale = nodeDetails.width > nodeDetails.height ? (window.innerWidth - 500) / nodeDetails.width : (window.innerHeight * (2 / 3)) / nodeDetails.width;
        // // const xPos = (window.innerWidth / 2) - (nodeDetails.left + (nodeDetails.width / 2));
        const xPos = (window.innerWidth - nodeDetails.width*scale / 2 - 20) - (nodeDetails.left + (nodeDetails.width / 2));
        const yPos = ((window.innerHeight / 2) - (nodeDetails.top + nodeDetails.height / 2));
        const tl = new TimelineMax();
        // tl.to(node, 0.5, { x: xPos, y: yPos, scaleX: scale, scaleY: scale, rotateX: 0, rotateY: 0 });
        tl.to(node, 0.5, { x: xPos, y: yPos, scaleX: scale, scaleY: scale, rotateX: 0, rotateY:0 });
    }

    public closeImage(node: any): void {
        const tl = new TimelineMax();
        tl.to(node, 0.5, { x: 0, y: 0, scaleX: 1, scaleY: 1, rotateX: 0, rotateY: 0});
    }

    public classGalerie(): any {
        let classString = 'galerie__image ';
        classString = this.props.open ? classString + ' galerie__image-open' : classString;
        classString = this.props.portrait ? classString + ' galerie__image-portrait' : classString + ' galerie__image-paysage';
        return classString;
    }

    public render(): React.ReactElement<any> {
        return (
            <div className={this.classGalerie()} onClick={this.onClickImg} ref={this.node}>
                <img src={this.props.image} />
                <div className="galerie__image-hoverImg"/>
            </div>
        );
    }
}
