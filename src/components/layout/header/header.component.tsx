// Imports
import { IHeaderProps, IHeaderState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './header.component.sass';

// Components

export class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <header className="header">
                <NavLink className="link" exact={true} to={this.props.backLink} activeClassName="active">
                revenir au chapitre
                </NavLink>
            </header>
        );
    }
}
