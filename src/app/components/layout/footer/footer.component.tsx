// Imports
import { IFooterProps, IFooterState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './footer.component.sass';

// Components
import { ImageComponent } from 'Components';

// Content
import { FooterContent } from 'Content';

export class Footer extends React.Component<IFooterProps, IFooterState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <footer className="footer footer--left">
                    <NavLink className="link" exact={true} to="/" activeClassName="active">Voyage en terres d'histoire</NavLink>
                </footer>
                <footer className="footer footer--right">
                  <nav>
                    <ul>
                      {FooterContent.links.map((link: any, index: number) =>
                        <li key={index}>
                          <NavLink exact={true} to={link.link} activeClassName="active">
                            {link.image ?
                              <ImageComponent image={link.image} fullscreen={false} />
                            : link.name}
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </nav>
                </footer>
            </React.Fragment>
        );
    }
}
