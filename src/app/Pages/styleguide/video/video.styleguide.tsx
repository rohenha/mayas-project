// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './video.styleguide.sass';

// Components
import { VideoComponent } from 'Components';

export class StyleGuideVideo extends React.Component<ICommonProps, ICommonState> {
    public stote: any;
    constructor(props: any) {
        super(props);
        this.stote = {
            videoState: 0
        };
    }


    public render(): React.ReactElement<any> {
        return (
            <div data-page="Common">
                <VideoComponent
                    sources={[
                        { type: 'mp4', path: require('../../../assets/videos/Semaine/semaine.mp4') }
                    ]}
                    poster={require('../../../assets/videos/Semaine/semaine.jpg')}
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={false}
                    history={this.props.history}
                    nextPage={''}
                    cover={false}
                    subtitles={require('../../../assets/videos/Semaine/sous-titres.vtt')}
                />
            </div>
        );
    }
}
