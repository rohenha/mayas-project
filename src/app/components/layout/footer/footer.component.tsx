// Imports
import { IFooterProps, IFooterState, IPath } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './footer.component.sass';

// Components
import Routes from 'Routes';

// Content
import { FooterContent } from 'Content';

export class Footer extends React.Component<IFooterProps, IFooterState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <div id="footer-left" className="footer">
                    <NavLink className="link" exact={true} to="/" activeClassName="active">Voyage en terres d'histoire</NavLink>
                </div>
                <div id="footer-right" className="footer">
                    <ul>
                        {Routes.MenuRoutes.map((route: IPath, index: number) =>
                            <li key={index}>
                                <NavLink exact={route.exact} to={route.path} activeClassName="active">{route.name}</NavLink>
                            </li>
                        )}
                        {FooterContent.social.map((social: any, index: number) =>
                          <li key={index}>
                            <a  href={social.link} target="_blank">
                              <img className="bg" src={social.image} />
                            </a>
                          </li>
                        )}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
