// Imports
import { IRealisationProps, IRealisationState } from 'Interfaces';
import * as React from 'react';

// Styles
import './realisation.page.scss';

// Components
import { DetailsComponent, QuoteImgComponent, VideoComponent } from 'Components';

export class PageRealisation extends React.Component<IRealisationProps, IRealisationState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="realisation" className="page" data-page="Realisation">
                <DetailsComponent>
                    <div className="realisation__entete">
                        {/* <img className="bg" src={require('../../Assets/Images/john-salzarulo-37827-unsplash.jpg')} /> */}
                        <VideoComponent
                            sources={[
                                { type: 'mp4', path:require('../../Assets/Videos/Breezy/Breezy.mp4') },
                                { type: 'webm', path:require('../../Assets/Videos/Breezy/Breezy.webm') },
                                { type: 'ogv', path:require('../../Assets/Videos/Breezy/Breezy.ogv') }
                            ]}
                            poster={require('../../Assets/Videos/Breezy/Breezy.jpg')}
                            controls={false}
                            autoplay={true}
                            loop={true}
                            muted={true}
                            {...this.props}
                            nextPage=""
                        />
                        <div className="content__entryChapter-content">
                            <p className="quiz-screen__title--chapter"><span>L'équipe de</span></p>
                            <h1>Realisation</h1>
                            <p className="realisation__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut amet at praesentium, libero, voluptatibus, maiores quas suscipit nostrum assumenda vitae. Commodi tempora numquam obcaecati assumenda nostrum quod, <a className="link-text" href="#">hic laborum.</a></p>
                            <p className="content__entryChapter-content--scroll">Scroll <span className="content__entryChapter-content--scroll-arrow" /></p>
                        </div>
                    </div>
                    <QuoteImgComponent
                        imgs={[require('../../Assets/Images/john-salzarulo-37827-unsplash.jpg'),]}
                        top={true}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                    </QuoteImgComponent>
                    <QuoteImgComponent
                        imgs={[require('../../Assets/Images/john-salzarulo-37827-unsplash.jpg'),]}
                        top={false}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                    </QuoteImgComponent>
                    <QuoteImgComponent
                        imgs={[require('../../Assets/Images/john-salzarulo-37827-unsplash.jpg'),]}
                        top={true}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                    </QuoteImgComponent>
                </DetailsComponent>
            </div>
        );
    }
}