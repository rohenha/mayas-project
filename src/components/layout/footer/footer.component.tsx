// Imports
import { IFooterProps, IFooterState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './footer.component.sass';

// Components
import { ImageComponent, SoundAmbianceComponent } from 'Components';

// Content
import { FooterContent } from 'Content';

export class Footer extends React.Component<IFooterProps, IFooterState> {
    constructor(props: any) {
        super(props);
    }

    public renderLink (link: any): any {
      if (link.outside) {
        return (
          <a href={link.link} target="_blank">
            {this.renderLinkContent(link)}
          </a>
        );
      } else {
        return (
          <NavLink exact={true} to={link.link} activeClassName="active">
            {this.renderLinkContent(link)}
          </NavLink>
        );
      }
    };

    public renderLinkContent (link: any): any {
      if (link.image) {
        return <ImageComponent image={link.image} fullscreen={false} />;
      } else {
        return link.name;
      }
    };

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
                        <li key={index}>{this.renderLink(link)}</li>
                      )}
                      <li><SoundAmbianceComponent sound={this.props.page.ambiant} /></li>
                    </ul>
                  </nav>
                </footer>
            </React.Fragment>
        );
    }
}
