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
            paths: [
                {
                    img: require('../../../assets/images/jezael-melgoza-551505-unsplash.jpg'),
                    name: 'Mexique',
                    url: '/'
                },
                {
                    img: require('../../../assets/images/landscape-2389023_1920.jpg'),
                    name: 'Guatemala',
                    url: '/'
                },
                {
                    img: require('../../../assets/images/earth-608344-unsplash.jpg'),
                    name: 'Bélize',
                    url: '/'
                }
            ]
        };
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="page" data-page="Common">
                <SubFolderComponent paths={this.stote.paths} />
            </div>
        );
    }
}
