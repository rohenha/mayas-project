// Imports
import { IInteractive360Props, IInteractive360State } from 'Interfaces';
import * as React from 'react';

// Styles
import './interactive-360.component.sass';

// Components

export class Interactive360Component extends React.Component<IInteractive360Props, IInteractive360State> {
    public onMouseDown: () => any = this.mouseDown.bind(this);
    public onMouseUp: () => any = this.mouseUp.bind(this);
    public onMouseMove: () => any = this.mouseMove.bind(this);
    public move: boolean  = false;
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.state = {
            mousePos: { x: 0, y: 0 },
            play: false,
            rot: { x: 0, y: 0},
            sound: "",
        };
        this.node = React.createRef();
    }

    public openElement(point: any, e: any): void {
        const play = !this.state.play ? true : false;
        this.setState({
            play,
            sound: point.file,
        });
    }

    public mouseDown(ev: any): void {
        this.move = true;
        this.setState({
            mousePos: { x: ev.clientX, y: ev.clientY },
        });
        ev.preventDefault();
    }

    public mouseUp(ev: any): void {
        if(this.move) {
            this.move = false;
            ev.preventDefault();
        }
    }

    public mouseMove(ev: any): void {
        if(this.move) {
            const deltaX = ev.pageX - this.state.mousePos.x;
	        const deltaY = ev.pageY - this.state.mousePos.y;

            this.setState({
                mousePos: { x: ev.pageX, y:ev.pageY },
                rot: { x: this.state.rot.x -= deltaX * 0.1, y: this.state.rot.y -= deltaY * 0.1 },
            });

            // rotY -= deltaX * 0.1;
            // rotX += deltaY * 0.1;

            this.node.current!.style.transform = "translateZ(50vw) rotateY(" + this.state.rot.x + "deg)";
        }
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__interactive360" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
                {/* <img className="bg" src={this.props.img} /> */}
                <div className="cube">
                    <div className="cube__container" ref={this.node}>
                        <img className="cube__front cube__face" src="https://s.cdpn.io/19243/front.JPG" />
                        <img className="cube__back cube__face" src="https://s.cdpn.io/19243/back.JPG" />
                        <img className="cube__left cube__face" src="https://s.cdpn.io/19243/left.JPG" />
                        <img className="cube__right cube__face" src="https://s.cdpn.io/19243/right.JPG" />
                        <img className="cube__up cube__face" src="https://s.cdpn.io/19243/up.JPG" />
                        <img className="cube__down cube__face" src="https://s.cdpn.io/19243/down.JPG" />
                    </div>
                </div>
            </div>
        );
    }

}
