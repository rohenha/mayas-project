// Imports
import { IMenuProps, IMenuState, IPathMenu } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


// Styles
import './menu.component.sass';

// Components
import { ImageComponent } from 'Components';
import Routes from 'Routes';

// Content
import { MenuContent } from 'Content';

// Services
import { AnimationsService } from 'Services';

export class MenuComponent extends React.Component<IMenuProps, IMenuState> {
    public node: React.RefObject<HTMLDivElement>;
    public animationsService: AnimationsService = new AnimationsService();
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

    public render(): React.ReactElement<any> {
        return (
            <div className="menu" ref={this.node} >
              <ImageComponent image={MenuContent.background} fullscreen={true} />
              <div className="menu__content">
                  <h2>
                    {MenuContent.title}
                    <span className="menu__close cross" onClick={this.props.closeMenu}/>
                  </h2>
                  <ul>
                      {Routes.ExpRoutes.map((route: IPathMenu, index: number) =>
                          <li key={index}>
                              <NavLink
                                  exact={route.content.exact}
                                  to={route.content.url}
                                  activeClassName="active"
                                  onClick={this.props.closeMenu}
                              >
                                  <span className="text__menu-chapter" data-content={"Chapitre " + route.content.chapter}>{"Chapitre " + route.content.chapter}</span>
                                  <span className="text__menu-element" data-content={route.content.pageName}>{route.content.pageName}</span>
                              </NavLink>
                          </li>
                      )}
                  </ul>
                </div>
            </div>
        );
    }
}
