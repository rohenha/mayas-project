// Imports
import { ISimpleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './loader-page.component.sass';

// Components
import { ImageComponent, LoadingComponent } from 'Components';

export class LoaderPageComponent extends React.Component<ISimpleProps, ISimpleState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
          <div className="page" data-page="Common">
            <ImageComponent image={require('../../assets/images/john-salzarulo-37827-unsplash.jpg')} fullscreen={true} />
            <LoadingComponent />
          </div>
        );
    }
}
