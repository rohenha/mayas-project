// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './loader.styleguide.sass';

// Components
import { LoaderPageComponent } from 'Components';

export class StyleGuideLoader extends React.Component<ICommonProps, ICommonState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <LoaderPageComponent />
        );
    }
}
