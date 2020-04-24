// Imports
import { IDetailsProps, IDetailsState } from 'Interfaces';
import * as React from 'react';

// Styles
import './details.component.sass';

// Components

export class DetailsComponent extends React.Component<IDetailsProps, IDetailsState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="page__content section_details">
              <div className="page__scroller section_details__content">
                  {this.props.children}
              </div>
            </div>
        );
    }
}
