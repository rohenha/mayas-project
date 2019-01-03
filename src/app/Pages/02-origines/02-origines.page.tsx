// Imports
import { IOriginesProps, IOriginesState } from 'Interfaces';
import * as React from 'react';

// Styles
import './02-origines.page.scss';

// Components
import { DetailsComponent } from 'Components';

export class PageOrigines extends React.Component<IOriginesProps, IOriginesState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <DetailsComponent>
                    <div className="block square-red" />
                    <div className="block square-blue" />
                </DetailsComponent>
            </React.Fragment>
        );
    }
}