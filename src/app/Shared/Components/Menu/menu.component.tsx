// Imports
import { TweenMax } from 'gsap';
import { IMenuProps, IMenuState, IPathMenu } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


// Styles
import './menu.component.sass';

// Components
import Animations from 'Animations';
import Routes from 'Routes';

export class MenuComponent extends React.Component<IMenuProps, IMenuState> {
    public node: React.RefObject<HTMLDivElement>;
    public onExit: (e: any, node: any) => {} = this.exitMenu.bind(this);
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
    }

    public componentDidUpdate(prevProps: any): void {
        if (this.props.toggleMenu !== prevProps.toggleMenu) {
            if (this.props.toggleMenu === true) {
                this.enterMenu();
            }
            if (this.props.toggleMenu === false) {
                this.exitMenu();
            }
        }
    }

    public enterMenu(): void {
        TweenMax.killTweensOf(this.node);
        Animations.CodexAnimation.enter(
            this.node.current,
            Animations.CodexAnimation.duration,
            0
        );
    }

    public exitMenu(): void {
        TweenMax.killTweensOf(this.node);
        Animations.CodexAnimation.exit(this.node.current, Animations.CodexAnimation.duration);
    }


    public render(): React.ReactElement<any> {
        return (
            <div id="menu" ref={this.node} >
                <img className="bg" src={require('../../../Assets/Images/john-salzarulo-37827-unsplash.jpg')} />
                <div className="menu__content">
                    <h3>Menu <span className="menu__close" onClick={this.props.closeMenu}/></h3>
                    <ul>
                        {Routes.ExpRoutes.map((route: IPathMenu, index: number) =>
                            <li key={index}>
                                <NavLink
                                    exact={route.content.exact}
                                    to={route.content.url}
                                    activeClassName="active"
                                    onClick={this.props.closeMenu}
                                >
                                    <span>{"Chapitre " + route.content.chapter}</span> {route.content.pageName}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
