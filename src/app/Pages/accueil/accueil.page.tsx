// Imports
import { IAccueilProps, IAccueilState } from 'Interfaces';
import * as React from 'react';

// Styles

// Components
import { HomeComponent } from 'Components';

// Content
import { AccueilContent } from 'Content';

export class PageAccueil extends React.Component<IAccueilProps, IAccueilState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
          <HomeComponent history={this.props.history} url={AccueilContent.url} text={AccueilContent.text} />
        );
    }
}
