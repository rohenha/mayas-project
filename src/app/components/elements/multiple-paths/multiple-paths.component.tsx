// Imports
import { IMultiplePath, IMultiplePathsProps, IMultiplePathsState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './multiple-paths.component.sass';

// Components

export class MultiplePathComponent extends React.Component<IMultiplePathsProps, IMultiplePathsState> {
  public onMouseEnter: (event: any) => void = this.updateHover.bind(this, true);
  public onMouseLeave: (event: any) => void = this.updateHover.bind(this, false);

  constructor(props: any) {
      super(props);
      this.state = {
          hover: '',
          screenSize: 0
      };
  }

  public componentDidMount(): void {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateWidth.bind(this));
  }

  public updateWidth(): void {
    this.setState({ screenSize: window.innerWidth});
  }

  public updateHover(state: boolean): void {
    this.setState({
      hover: state ? 'active' : ''
    });
  }

  public render(): React.ReactElement<any> {
    return (
      <ul
        className={"section_multiple-paths " + this.state.hover}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.paths.map((element: IMultiplePath, index: number) =>
          <li
            key={index}
            className="section_multiple-paths__element"
            style={{ width: 100 / this.props.paths.length + "%" }}
          >
            <img src={element.img} style={ {width: this.state.screenSize} } />
            <div className="section_multiple-paths__element--content">
                <NavLink exact={true} to={element.url} data-index={index} className="text__title-multi-path">{element.name}</NavLink>
            </div>
          </li>
        )}
     </ul>
    );
  }
}
