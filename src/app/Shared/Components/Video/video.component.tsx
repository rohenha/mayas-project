// Imports
import { IVideoProps, IVideoState } from 'Interfaces';
import * as React from 'react';

// Styles
import './video.component.scss';

// Components
import { VideoFooterComponent } from 'Components';

export class VideoComponent extends React.Component<IVideoProps, IVideoState> {
    public currentTime: () => void = this.getCurrentTime.bind(this);
    public video: any;
    constructor(props: any) {
        super(props);
        this.state= { percent: 0, current: '0:0', total: '0:0'};
    }

    public getCurrentTime(el: any): void {
        const percent = el.target.currentTime / el.target.duration * 100;
        const current = Math.floor(el.target.currentTime / 60) + ':' + Math.floor(el.target.currentTime);
        const total = Math.floor(el.target.duration / 60) + ':' + Math.floor(el.target.duration);
        this.setState({ percent, current, total });
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="video bg">
                <video
                    id="videoBg"
                    className="bg"
                    playsInline = {true}
                    controls={this.props.controls}
                    autoPlay={this.props.autoplay}
                    loop={this.props.loop}
                    muted = {this.props.muted}
                    preload={"auto"}
                    poster={this.props.poster}
                    onTimeUpdate={this.currentTime}
                >
                    {this.props.sources.map( (source: any, index: number) => 
                        <source key={index} src={source.path} type={'video/' + source.type} />
                    )}
                </video>
                { !this.props.loop ? 
                    <VideoFooterComponent videoState={this.state.percent} history={this.props.history} nextPage={this.props.nextPage} duree={{ current: this.state.current, total: this.state.total }} />
                    : null
                }
            </div>
        );
    }
}