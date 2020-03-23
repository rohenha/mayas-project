// Imports
import { IIntroductionProps, IIntroductionState } from 'Interfaces';
import * as React from 'react';

// Styles
import './00-introduction.page.sass';

// Components
import { VideoComponent } from 'Components';

export class PageIntroduction extends React.Component<IIntroductionProps, IIntroductionState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="introduction" className="page" data-page="Introduction">
                {/* <img className="bg" src={require('../../Assets/Images/john-salzarulo-37827-unsplash.jpg')} /> */}
                <VideoComponent
                    sources={[
                        { type: 'mp4', path: require('../../Assets/Videos/Breezy/Breezy.mp4') },
                        { type: 'webm', path: require('../../Assets/Videos/Breezy/Breezy.webm') },
                        { type: 'ogv', path: require('../../Assets/Videos/Breezy/Breezy.ogv') }
                    ]}
                    poster={require('../../Assets/Videos/Breezy/Breezy.jpg')}
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
