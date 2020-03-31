// Imports
import { IHeaderExpProps, IHeaderExpState } from 'Interfaces';
import * as React from 'react';


// Styles
import './header-exp.component.sass';

// Components
import { MenuComponent } from 'Components';

// Content
import { MenuContent } from 'Content';

export class HeaderExpComponent extends React.Component<IHeaderExpProps, IHeaderExpState> {
    public toggle: () => void = this.toggleMenu.bind(this);
    constructor(props: any) {
        super(props);
        this.state = { openMenu: false };
    }

    public toggleMenu(): void {
        this.setState({ openMenu: !this.state.openMenu });
    }

    public render(): React.ReactElement<any> {
      const chapter = "Chapitre " + this.props.page.content.chapter;
      return (
          <React.Fragment>
              <MenuComponent toggleMenu={this.state.openMenu} closeMenu={this.toggle} />
              <header className="header-exp header-exp--right">
              <button className="header-exp__button text__link">
                <span className="header-exp__text">
                  <span className="header-exp__text--subtitle"><span className="header-exp__text--content" data-content={MenuContent.menu.subtitle}>{chapter}</span></span>
                  <span className="header-exp__text--title"><span className="header-exp__text--content" data-content={MenuContent.menu.title}>{this.props.page.content.title}</span></span>
                </span>
                <span className="header-exp__map" onClick={this.toggle} />
              </button>
              </header>
          </React.Fragment>
        );
    }
}
