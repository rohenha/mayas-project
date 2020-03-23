// Imports
import { ISoundProps, ISoundState } from 'Interfaces';
import * as React from 'react';

// Styles
import './sound-ambiance.component.sass';

// Components

export class SoundAmbianceComponent extends React.Component<ISoundProps, ISoundState> {
    public sound: HTMLAudioElement = new Audio(this.props.sound);
    public playpauseSound: () => void = this.toggleSound.bind(this);
    constructor(props: any) {
        super(props);
            // this.state = {
            //     currentSound: 0,
            // };
        this.sound.ontimeupdate = () => { this.updateSound(); };
        this.sound.play();
    }

    public componentDidMount(): void {
        setTimeout(() => { this.toggleSound() }, this.props.delay);
    }

    public componentWillUnmount(): void {
        this.sound.pause();
        this.sound.src = "";
        this.sound.load();
    }

    public toggleSound(): void {
        if (this.sound.duration > 0 && !this.sound.paused) {
            this.sound.pause();
        } else {
            this.sound.play();
        }
    }

    public updateSound(): void {
        const step = Math.round(this.sound.currentTime / this.sound.duration * 100);
        if (step === 100) { this.sound.play(); }
        this.setState({ currentSound: step });
    }


    public render(): React.ReactElement<any> {
        return (<React.Fragment/>);
    }
}
