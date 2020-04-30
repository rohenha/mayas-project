// Imports
import { ISimpleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { PagesService } from 'Services';

// Styles
import './header.component.sass';

// Components
import Providers from 'Providers';

export class Header extends React.Component<ISimpleProps, ISimpleState> {
  public static contextType = Providers['ThemeContext'];
  public pagesService: PagesService = new PagesService();

  private constructor(props: ISimpleProps) {
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
  };
}
