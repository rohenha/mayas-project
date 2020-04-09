// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './galerie.styleguide.sass';

// Components
import { GalerieComponent } from 'Components';

// Content
import { GalerieContent } from 'Content';

export class StyleGuideGalerie extends React.Component<ICommonProps, ICommonState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="page page_galerie" data-page="Common">
                <GalerieComponent content={GalerieContent.images} />
            </div>
        );
    }
}
