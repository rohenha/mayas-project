// Imports
import { IMultiplePath, IMultiplePathsProps, IMultiplePathsState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './multiple-paths.component.scss';

// Components


export class MultiplePathComponent extends React.Component<IMultiplePathsProps, IMultiplePathsState> {
    public onMouseEnter: (event: any) => void = this.elEnter.bind(this);
    public onMouseLeave: (event: any) => void = this.elExit.bind(this);
    constructor(props: any) {
        super(props);
        this.state = {
            hover: -1,
            toggleHover: false,
            windowWidth: window.innerWidth
        };
    }

    public componentDidMount(): void {
        window.addEventListener("resize", this.updateWidth.bind(this));
    }

    public updateWidth(): void {
        this.setState({ windowWidth: window.innerWidth});
    }

    public elEnter(event: any): void {
        if( event.target.getAttribute('data-index') !== null ) {
            this.setState({ hover: event.target.getAttribute('data-index'), toggleHover: true });
        }
    }

    public elExit(event: any): void {
        if (this.state.toggleHover === true) {
            this.setState({ hover: -1, toggleHover: false });
        }
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="multiple_paths">
                <ul className={this.state.toggleHover === true ? 'multiple_paths--list multiple_paths--list__active' : 'multiple_paths--list'}>
                    {this.props.paths.map((element: IMultiplePath, index: number) =>
                        <li
                            key={index}
                            className="multiple_paths--list__element"
                            style={{ width: 100 / this.props.paths.length + "%" }}
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                        >
                            <img src={element.img} style={ {width: this.state.windowWidth} } />
                            <div className="multiple_paths--list__element-content">
                                <NavLink exact={true} to={element.url} data-index={index}>{element.name}</NavLink>
                            </div>
                        </li>
                    )}
               </ul>
            </div>
        );
    }
}