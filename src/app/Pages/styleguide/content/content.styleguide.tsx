// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './content.styleguide.scss';

// Components
import { ContentPartComponent, DetailsComponent, EntryChapterComponent, Interactive360Component, InteractivePhotoComponent, QuoteImgComponent } from 'Components';

export class StyleGuideContent extends React.Component<ICommonProps, ICommonState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <DetailsComponent>
                    {/* <div className="block square-red" /> */}
                    <EntryChapterComponent 
                        imgs={[
                            require('../../../Assets/Videos/Breezy/Breezy.jpg'),
                            [
                                { type: 'mp4', path: require('../../../Assets/Videos/Breezy/Breezy.mp4') },
                                { type: 'webm', path: require('../../../Assets/Videos/Breezy/Breezy.webm') },
                                { type: 'ogv', path: require('../../../Assets/Videos/Breezy/Breezy.ogv') }
                            ]
                        ]} 
                        text="Chapter" 
                        video={false} 
                        {...this.props}
                    />

                    <QuoteImgComponent
                        imgs={[require('../../../Assets/Images/john-salzarulo-37827-unsplash.jpg'),
                            require('../../../Assets/Images/jezael-melgoza-551505-unsplash.jpg')
                        ]}
                        top={false}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                    </QuoteImgComponent>

                    <ContentPartComponent img={require('../../../Assets/Images/jezael-melgoza-551505-unsplash.jpg')}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odit cum iure similique saepe voluptatum voluptas, corrupti beatae repellat velit debitis magnam, nulla quibusdam assumenda deleniti! Totam repudiandae est eveniet?</p>
                    </ContentPartComponent>

                    <InteractivePhotoComponent img={require('../../../Assets/Images/john-salzarulo-37827-unsplash.jpg')} points={[
                        {
                            content: "",
                            file: require('../../../Assets/Sounds/carnival-daniel_simon.mp3'),
                            style: "audio",
                            title:"Intitulé",
                            x: "20%",
                            y: "20%"
                        },
                        {
                            content: "",
                            file: require('../../../Assets/Sounds/bensound-hey.mp3'),
                            style: "audio",
                            title:"Intitulé 2",
                            x: "50%",
                            y: "50%"
                        },
                        // {
                        //     content: "",
                        //     file: require('../../../Assets/Sounds/carnival-daniel_simon.mp3'),
                        //     style: "audio",
                        //     title:"Intitulé",
                        //     x: "80%",
                        //     y: "80%"
                        // },
                    ]} />

                    <Interactive360Component img={require('../../../Assets/Images/jezael-melgoza-551505-unsplash.jpg')} points={[
                        {
                            content: "",
                            file: require('../../../Assets/Sounds/carnival-daniel_simon.mp3'),
                            style: "audio",
                            title: "Intitulé",
                            x: "20%",
                            y: "20%"
                        },
                        {
                            content: "",
                            file: require('../../../Assets/Sounds/bensound-hey.mp3'),
                            style: "audio",
                            title: "Intitulé 2",
                            x: "50%",
                            y: "50%"
                        },
                        // {
                        //     content: "",
                        //     file: require('../../../Assets/Sounds/carnival-daniel_simon.mp3'),
                        //     style: "audio",
                        //     title:"Intitulé",
                        //     x: "80%",
                        //     y: "80%"
                        // },
                    ]} />
                </DetailsComponent>
            </React.Fragment>
        );
    }
}