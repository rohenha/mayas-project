// Imports
import { IAccueilProps, IAccueilState } from 'Interfaces';
import * as React from 'react';

// Styles

// Components
import { HomeComponent } from 'Components';

// Content
import { SoonContent } from 'Content';

export class PageSoon extends React.Component<IAccueilProps, IAccueilState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
          <HomeComponent history={this.props.history} url={SoonContent.url} text={SoonContent.text} />
        );
    }
}
