// Imports
import { IMenuProps, IMenuState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


// Styles
import './menu.component.sass';

// Components
import { ImageComponent, MapComponent } from 'Components';

// Content
import { MenuContent } from 'Content';

// Services
import { AnimationsService } from 'Services';

export class MenuComponent extends React.Component<IMenuProps, IMenuState> {
    public node: React.RefObject<HTMLDivElement>;
    public animationsService: AnimationsService = new AnimationsService();
    public onRenderRoute: () => any = this.renderRoute.bind(this);
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
    }

    public componentDidUpdate(prevProps: any): void {
        let state;
        if (this.props.toggleMenu !== prevProps.toggleMenu) {
          state = this.props.toggleMenu ? 'enter': 'exit';
          this.animationsService.toggleAnimation(this.node.current, 'MenuAnimation', state);
        }
    }

    public renderRoute(route: any, index: number): any {
      if (route.isExperience && route.hasParent === '') {
        return <li key={index}>
            <NavLink
                exact={route.exact}
                to={route.url}
                activeClassName="active"
                onClick={this.props.closeMenu}
            >
                <span className="text__menu-chapter" data-content={"Chapitre " + route.chapter}>{"Chapitre " + route.chapter}</span>
                <span className="text__menu-element" data-content={route.pageName}>{route.pageName}</span>
            </NavLink>
        </li>;
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
                <ul>{this.props.routes.map(this.onRenderRoute)}</ul>
              </div>
              <div className="menu__map">
                <MapComponent routes={this.props.routes} current={this.props.current} />
              </div>
            </div>
        );
    }
}
