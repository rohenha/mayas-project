// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './loader.styleguide.scss';

// Components
import { LoadingComponent } from 'Components';

export class StyleGuideLoader extends React.Component<ICommonProps, ICommonState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="page" data-page="Common">
                <img className="bg" src={require('../../../Assets/Images/john-salzarulo-37827-unsplash.jpg')} />
                <LoadingComponent />
            </div>
        );
    }
}