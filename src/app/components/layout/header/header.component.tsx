// Imports
import { IHeaderProps, IHeaderState } from 'Interfaces';
import * as React from 'react';

// Styles
import './header.component.sass';

// Components

export class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <header id="header">
                <p>Header</p>
            </header>
        );
    }
}
