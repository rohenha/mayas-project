// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './preloader.styleguide.scss';

// Components
import { PreloaderComponent } from 'Components';

export class StyleGuidePreloader extends React.Component<ICommonProps, ICommonState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="page" data-page="Common">
                <PreloaderComponent />
            </div>
        );
    }
}