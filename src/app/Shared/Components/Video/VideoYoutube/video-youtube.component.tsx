// Imports
import { IVideoProps, IVideoState } from 'Interfaces';
import * as React from 'react';

// Styles
import './video-youtube.component.sass';

// Components

export class VideoYoutubeComponent extends React.Component<IVideoProps, IVideoState> {
    public video: any;
    constructor(props: any) {
        super(props);
        // let player = null;
        // function onYouTubePlayerAPIReady() {
        //     player = new YT.Player('player', {
        //         width: '640',
        //         height: '390',
        //         videoId: '0Bmhjf0rKe8',
        //         events: {
        //             onReady: onPlayerReady,
        //             onStateChange: onPlayerStateChange
        //         }
        //     });
        // }

        // // autoplay video
        // function onPlayerReady(event) {
        //     event.target.playVideo();
        // }
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="video bg">
                <div id="videoBg" className="bg"/>
                {/* <video
                    id="videoBg"
                    className="bg"
                    playsinline = {true}
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
                </video> */}
            </div>
        );
    }
}
