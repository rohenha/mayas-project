// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './galerie.styleguide.sass';

// Components
import { GalerieComponent } from 'Components';

export class StyleGuideGalerie extends React.Component<ICommonProps, ICommonState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="page" data-page="Common">
                <img className="bg" src={require('../../../assets/images/branches-dawn-environment-975771.jpg')} />
                <GalerieComponent />
            </div>
        );
    }
}
