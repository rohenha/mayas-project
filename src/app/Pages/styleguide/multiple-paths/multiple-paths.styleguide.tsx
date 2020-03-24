// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './multiple-paths.styleguide.sass';

// Components
// import { MultiplePathComponent } from 'Components';
import { SubFolderComponent } from 'Components';

export class StyleGuideMultiplePaths extends React.Component<ICommonProps, ICommonState> {
    public stote: any;
    constructor(props: any) {
        super(props);
        this.stote = {
            codexDatas: [
                {
                    content: [
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.'
                    ],
                    title: 'Toto Jean',
                    type: 'Personnalité',
                },
                {
                    content: [
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.'
                    ],
                    title: 'Lorem Ipsum',
                    type: 'Définition',
                }
            ],
            page: {
                chapter: 2,
                name: 'Le Mexique'
            },
            paths: [
                {
                    img: require('../../../assets/images/jezael-melgoza-551505-unsplash.jpg'),
                    name: 'Mexique',
                    url: '/cgu'
                },
                {
                    img: require('../../../assets/images/landscape-2389023_1920.jpg'),
                    name: 'Guatemala',
                    url: '/cgu'
                },
                {
                    img: require('../../../assets/images/earth-608344-unsplash.jpg'),
                    name: 'Bélize',
                    url: '/cgu'
                }
            ]
        };
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="page" data-page="Common">
                {/* <HeaderExpComponent soundDelay={0} audio={false} sound={''} page={this.stote.page} /> */}
                {/* <MultiplePathComponent paths={this.stote.paths} /> */}
                <SubFolderComponent paths={this.stote.paths} />
                {/* <MultiplePathComponent paths={this.stote.paths} /> */}
                {/* <FooterExpComponent codexDatas={this.stote.codexDatas} nextPage={'/cgu'} history={this.props.history} /> */}
            </div>
        );
    }
}
