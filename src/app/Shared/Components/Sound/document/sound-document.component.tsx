// Imports
import { ISoundProps, ISoundState } from 'Interfaces';
import * as React from 'react';

// Styles
import './sound-document.component.sass';

// Components

export class SoundDocComponent extends React.Component<ISoundProps, ISoundState> {
    public sound: HTMLAudioElement = new Audio(this.props.sound);
    public playpauseSound: () => void = this.toggleSound.bind(this);
    constructor(props: any) {
        super(props);
            this.state = {
                current: '0:0',
                currentSound: 0,
                total: '0:0'
            };
    }

    public componentDidMount(): void {
        if (this.props.autoplay) {
            setTimeout(() => { this.toggleSound() }, this.props.delay);
        }
    }

    public componentDidUpdate(prevProps: any): void {
        if (this.props.sound !== prevProps.sound && this.props.sound) {
            this.sound.pause();
            this.sound = new Audio(this.props.sound);
        }
        if (this.props.play !== prevProps.play) {
            this.toggleSound();
        }
    }

    public toggleSound(): void {
        if (this.sound.duration > 0 && !this.sound.paused) {
            this.sound.pause();
        } else {
            this.sound.play();
            this.sound.ontimeupdate = () => { this.updateSound(); };
        }
    }

    public updateSound(): void {
        const current = this.getSound(this.sound.currentTime);
        const total = this.getSound(this.sound.duration);
        this.setState({ currentSound: Math.round(this.sound.currentTime / this.sound.duration * 100), current, total });
    }

    public getSound(time: number) : string {
        return Math.floor(time / 60) + ':' + Math.floor(time);
    }


    public render(): React.ReactElement<any> {
        return (
            <button id="headerExp-left" className="headerExp" onClick={this.playpauseSound } >
                <div className={this.sound.paused === true ? "player play" : "player pause"}/>
                <svg viewBox="0 0 36 36" >
                    <path
                        className="player__back"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                        className="player__front"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        style={{ strokeDasharray: this.state.currentSound + ", 100" }}
                    />
                </svg>
                <div className={this.props.sound ? "headerExp-left--time active" : "headerExp-left--time"}>
                    <p><span>{this.state.current}</span> / <span>{this.state.total}</span></p>
                </div>
            </button>
        );
    }
}
