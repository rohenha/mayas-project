// Imports
import { IMultiplePath, IMultiplePathsState, IPageComponentProps } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './multiple-paths.component.sass';

export class MultiplePathComponent extends React.Component<IPageComponentProps, IMultiplePathsState> {
  public onMouseEnter: (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => void = this.updateHover.bind(this, true);
  public onMouseLeave: (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => void = this.updateHover.bind(this, false);
  public onUpdateWidth: () => void =  this.updateWidth.bind(this);

  private constructor(props: IPageComponentProps) {
    super(props);
    this.state = {
      hover: '',
      screenSize: 0
    };
  };

  public componentDidMount(): void {
    this.onUpdateWidth();
    window.addEventListener("resize", this.onUpdateWidth);
  };

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.onUpdateWidth);
  };

  public updateWidth(): void {
    this.setState({ screenSize: window.innerWidth});
  };

  public updateHover(state: boolean): void {
    this.setState({
      hover: state ? 'active' : ''
    });
  };

  public renderPath(element: IMultiplePath, index: number): React.ReactElement<any> {
    return (
      <li
        key={index}
        className="section_multiple-paths__element"
        style={{ width: 100 / this.props.content.paths.length + "%" }}>
        <img src={element.image.path} title={element.image.title} alt={element.image.alt} style={ {width: this.state.screenSize} } />
        <div className="section_multiple-paths__element--content">
            <NavLink exact={true} to={element.url} data-index={index} className="text__title-multi-path">{element.name}</NavLink>
        </div>
      </li>
    );
  };

  public render(): React.ReactElement<any> {
    return (
      <ul
        className={"section_multiple-paths " + this.state.hover}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        {this.props.content.paths.map(this.renderPath.bind(this))}
     </ul>
    );
  }
}
