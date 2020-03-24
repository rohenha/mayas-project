// Imports
import { IPartenairesProps, IPartenairesState } from 'Interfaces';
import * as React from 'react';

// Styles
import './partenaires.page.sass';

// Components
import { VideoComponent } from 'Components';

export class PagePartenaires extends React.Component<IPartenairesProps, IPartenairesState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="partenaires" className="page" data-page="Partenaires">
                        <div className="realisation__entete">
                            {/* <img className="bg" src={require('../../assets/images/john-salzarulo-37827-unsplash.jpg')} /> */}
                            <VideoComponent
                                sources={[
                                    { type: 'mp4', path: require('../../assets/videos/Breezy/Breezy.mp4') },
                                    { type: 'webm', path: require('../../assets/videos/Breezy/Breezy.webm') },
                                    { type: 'ogv', path: require('../../assets/videos/Breezy/Breezy.ogv') }
                                ]}
                                poster={require('../../assets/videos/Breezy/Breezy.jpg')}
                                controls={false}
                                autoplay={true}
                                loop={true}
                                muted={true}
                                {...this.props}
                                nextPage=""
                            />
                            <div className="content__entryChapter-content">
                                <p className="quiz-screen__title--chapter"><span>Les personnes qui ont apportée leur</span></p>
                                <h1>contribution</h1>
                                <p className="realisation__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut amet at praesentium, libero, voluptatibus, maiores quas suscipit nostrum assumenda vitae. Commodi tempora numquam obcaecati assumenda nostrum quod, <a className="link-text" href="#">hic laborum.</a></p>
                            </div>
                        </div>
            </div>
        );
    }
}
