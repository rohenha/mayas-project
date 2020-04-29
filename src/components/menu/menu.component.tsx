// Imports
import { IMenuProps, IRoute, ISimpleState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { PagesService } from 'Services';

// Styles
import './menu.component.sass';

// Components
import { ImageComponent, MapComponent } from 'Components';
import Providers from 'Providers';

// Content
import { MenuContent } from 'Content';

// Services
import { AnimationsService } from 'Services';

export class MenuComponent extends React.Component<IMenuProps, ISimpleState> {
  public static contextType = Providers['ThemeContext'];
  public node: React.RefObject<HTMLDivElement>;
  public animationsService: AnimationsService = new AnimationsService();
  public onRenderRoute: () => any = this.renderRoute.bind(this);
  public pagesService: PagesService = new PagesService();

  private constructor(props: IMenuProps) {
      super(props);
      this.node = React.createRef();
  };

  public componentDidUpdate(prevProps: IMenuProps): void {
    let state: string;
    if (this.props.toggleMenu !== prevProps.toggleMenu) {
      state = this.props.toggleMenu ? 'enter': 'exit';
      this.animationsService.toggleAnimation(this.node.current, 'MenuAnimation', state);
    }
  };

  public renderRoute(route: IRoute, index: number): React.ReactElement<any> | void {
    if (route.isExperience && route.hasParent === '') {
      return (
        <li key={index}>
          <NavLink
            exact={route.exactUrl}
            to={route.url}
            activeClassName="active"
            onClick={this.props.closeMenu}>
            <span className="text__menu-chapter" data-content={"Chapitre " + route.chapter}>{"Chapitre " + route.chapter}</span>
            <span className="text__menu-element" data-content={route.pageName}>{route.pageName}</span>
          </NavLink>
        </li>
      );
    }
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="menu" ref={this.node} >
        <ImageComponent image={MenuContent.background} fullscreen={true} />
        <div className="menu__content">
          <h2>
            {MenuContent.title}
            <button className="menu__close cross" onClick={this.props.closeMenu}/>
          </h2>
          <ul>{this.context.routes.map(this.onRenderRoute)}</ul>
        </div>
        <div className="menu__map">
          <MapComponent page={this.pagesService.getParent(this.context.page)} />
        </div>
      </div>
    );
  };
}
