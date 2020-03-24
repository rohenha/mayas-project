// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './content.styleguide.sass';

// Components
import {
    // ContentPartComponent,
    DetailsComponent,
    EntryChapterComponent,
    // Interactive360Component,
    ImageSliderComponent,
    InteractivePhotoComponent,
    // NextStepComponent,
    QuoteImgComponent,
    TextComponent,
    TextImgComponent,
} from 'Components';

export class StyleGuideContent extends React.Component<ICommonProps, ICommonState> {
    public images: any[] =[
        require('../../../assets/images/john-salzarulo-37827-unsplash.jpg'),
        require('../../../assets/images/jezael-melgoza-551505-unsplash.jpg'),
    ];
    public images2: any[] = [
        require('../../../assets/images/jimmy-baum-346127-unsplash.jpg'),
        require('../../../assets/images/john-salzarulo-78830-unsplash.jpg'),
    ];
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
                            require('../../../assets/videos/Breezy/Breezy.jpg'),
                            [
                                { type: 'mp4', path: require('../../../assets/videos/Breezy/Breezy.mp4') },
                                { type: 'webm', path: require('../../../assets/videos/Breezy/Breezy.webm') },
                                { type: 'ogv', path: require('../../../assets/videos/Breezy/Breezy.ogv') }
                            ]
                        ]}
                        text="Chapter"
                        video={false}
                        chapter= {{name: "Mayas", number: 1}}
                        introduction="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores provident minus."
                        {...this.props}
                    />

                    <TextImgComponent
                        img={require('../../../assets/images/jezael-melgoza-551505-unsplash.jpg')}
                    >
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                    </TextImgComponent>

                    <TextComponent>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                    </TextComponent>

                    <ImageSliderComponent
                        imgs={this.images}
                    />

                    <QuoteImgComponent
                        imgs={this.images2}
                        top={true}
                        title={"Lorem Ipsum"}
                    >
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nostrum dolorum totam, aut sed, tempora deleniti laboriosam provident dolor alias repellendus ipsa! Molestias impedit necessitatibus placeat ratione commodi adipisci officiis!</p>
                    </QuoteImgComponent>

                    {/* <ContentPartComponent img={require('../../../assets/images/jezael-melgoza-551505-unsplash.jpg')}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odit cum iure similique saepe voluptatum voluptas, corrupti beatae repellat velit debitis magnam, nulla quibusdam assumenda deleniti! Totam repudiandae est eveniet?</p>
                    </ContentPartComponent> */}

                    <InteractivePhotoComponent
                        img={require('../../../assets/images/john-salzarulo-37827-unsplash.jpg')}
                        points={[
                        {
                            content: "",
                            file: require('../../../assets/sounds/carnival-daniel_simon.mp3'),
                            title:"Intitulé",
                            type: "audio",
                            x: "20%",
                            y: "20%"
                        },
                        {
                            content: "",
                            file: require('../../../assets/sounds/bensound-hey.mp3'),
                            title:"Intitulé 2",
                            type: "audio",
                            x: "50%",
                            y: "50%"
                        },
                        {
                            content: [
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure recusandae dolorum quibusdam nihil facilis, dolor exercitationem quia hic? Corrupti autem esse quis, similique dolores delectus. Aspernatur facilis itaque corporis!",
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure recusandae dolorum quibusdam nihil facilis, dolor exercitationem quia hic? Corrupti autem esse quis, similique dolores delectus. Aspernatur facilis itaque corporis!"
                            ],
                            file: [
                                require('../../../assets/images/john-salzarulo-37827-unsplash.jpg'),
                                require('../../../assets/images/john-salzarulo-37827-unsplash.jpg'),
                                require('../../../assets/images/john-salzarulo-37827-unsplash.jpg')
                            ],
                            title:"Intitulé",
                            type: "text",
                            x: "80%",
                            y: "80%"
                        },
                    ]} />

                    {/* <Interactive360Component img={require('../../../assets/images/jezael-melgoza-551505-unsplash.jpg')} points={[
                        {
                            content: "",
                            file: require('../../../assets/sounds/carnival-daniel_simon.mp3'),
                            style: "audio",
                            title: "Intitulé",
                            x: "20%",
                            y: "20%"
                        },
                        {
                            content: "",
                            file: require('../../../assets/sounds/bensound-hey.mp3'),
                            style: "audio",
                            title: "Intitulé 2",
                            x: "50%",
                            y: "50%"
                        },
                    ]} /> */}
                    {/* <NextStepComponent
                        chapter={{ name: "Mayas", number: 1 }}
                        url = "/"
                        {...this.props}
                    /> */}
                </DetailsComponent>
            </React.Fragment>
        );
    }
}
