// Imports
import { IFooterLink, ISimpleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './footer.component.sass';

// Components
import { ImageComponent, SoundAmbianceComponent } from 'Components';
import Providers from 'Providers';

// Content
import { FooterContent } from 'Content';

export class Footer extends React.Component<ISimpleProps, ISimpleState> {
  public static contextType = Providers['ThemeContext'];
  private constructor(props: ISimpleProps) {
      super(props);
  }

  public renderLink (link: IFooterLink): React.ReactElement<any> {
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

  public renderLinkContent (link: IFooterLink): React.ReactElement<any> {
    if (link.image.path) {
      return <ImageComponent image={link.image} fullscreen={false} />;
    } else {
      return <React.Fragment>{link.name}</React.Fragment>;
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
              {FooterContent.links.map((link: IFooterLink, index: number) =>
                <li key={index}>{this.renderLink(link)}</li>
              )}
              <li><SoundAmbianceComponent sound={this.context.page.ambiant} /></li>
            </ul>
          </nav>
        </footer>
      </React.Fragment>
    );
  };
}
