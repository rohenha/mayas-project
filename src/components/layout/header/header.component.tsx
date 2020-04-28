// Imports
import { IHeaderProps, IHeaderState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { PagesService } from 'Services';

// Styles
import './header.component.sass';

// Components
import { ThemeContext } from 'Providers';

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    public static contextType = ThemeContext;
    public pagesService: PagesService = new PagesService();
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <header className="header">
                <NavLink className="link" exact={true} to={this.pagesService.getPreviousPage(this.context.page)} activeClassName="active">
                revenir au chapitre
                </NavLink>
            </header>
        );
    }
}
