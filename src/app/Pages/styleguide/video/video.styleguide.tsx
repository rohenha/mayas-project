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
            <div className="page" data-page="Common">
                <VideoComponent
                    sources={[
                        { type: 'mp4', path: require('../../../Assets/Videos/Breezy/Breezy.mp4') },
                        { type: 'webm', path: require('../../../Assets/Videos/Breezy/Breezy.webm') },
                        { type: 'ogv', path: require('../../../Assets/Videos/Breezy/Breezy.ogv') }
                    ]}
                    poster={require('../../../Assets/Videos/Breezy/Breezy.jpg')}
                    controls={false}
                    autoplay={true}
                    loop={false}
                    muted={false}
                    history={this.props.history}
                    nextPage={'/pays'}
                />
            </div>
        );
    }
}
