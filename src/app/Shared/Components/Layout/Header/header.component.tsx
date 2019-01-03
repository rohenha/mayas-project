// Imports
import { IHeaderProps, IHeaderState } from 'Interfaces';
import * as React from 'react';

// Styles
import './header.component.scss';

// Components

export class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <nav id="header">
                <p>Header</p>
            </nav>
        );
    }
}