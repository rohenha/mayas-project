// Imports
import { IHeaderExpProps, IHeaderExpState } from 'Interfaces';
import * as React from 'react';

// Styles
import './header-exp.component.sass';

// Components
import { MapComponent, MenuComponent } from 'Components';

// Content
import { MenuContent } from 'Content';

export class HeaderExpComponent extends React.Component<IHeaderExpProps, IHeaderExpState> {
  public toggle: () => void = this.toggleMenu.bind(this);
  private constructor(props: IHeaderExpProps) {
    super(props);
    this.state = { openMenu: false };
  }

  public toggleMenu(): void {
    this.setState({ openMenu: !this.state.openMenu });
  }

  public render(): React.ReactElement<any> {
    const chapter: string = "Chapitre " + this.props.page.chapter;
    return (
      <React.Fragment>
        <MenuComponent toggleMenu={this.state.openMenu} closeMenu={this.toggle} />
        <header className="header-exp header-exp--right">
        <button className="header-exp__button text__link" onClick={this.toggle}>
          <span className="header-exp__text">
            <span className="header-exp__text--subtitle"><span className="header-exp__text--content" data-content={MenuContent.menu.subtitle}>{chapter}</span></span>
            <span className="header-exp__text--title"><span className="header-exp__text--content" data-content={MenuContent.menu.title}>{this.props.page.pageName}</span></span>
          </span>
          <div className="header-exp__map">
            <div className="header-exp__map--container" style={ { transform: 'translate(' + this.props.page.map.x + ', ' + this.props.page.map.y + ')' } }>
              <MapComponent page={this.props.page} />
            </div>
          </div>
        </button>
        </header>
      </React.Fragment>
    );
  };
}
