// Imports
import { ISubFolderProps, ISubFolderState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './subfolder.component.scss';

// Components

export class SubFolderComponent extends React.Component<ISubFolderProps, ISubFolderState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__subfolder">
                <div className="content__subfolder--single subfolder__left">
                    <NavLink exact={true} to={this.props.paths[0].url}>
                        <img src={this.props.paths[0].img} alt={this.props.paths[0].name}/>
                        <p>
                            {this.props.paths[0].name}
                            <span>Découvrir</span>
                        </p>
                    </NavLink>
                </div>
                {/* <div className="subfolder__right"> */}
                    <div className="content__subfolder--single subfolder__top">
                        <NavLink exact={true} to={this.props.paths[1].url}>
                            <img src={this.props.paths[1].img} alt={this.props.paths[1].name} />
                            <p>
                                {this.props.paths[1].name}
                                <span>Découvrir</span>
                            </p>
                        </NavLink>
                    </div>
                    <div className="content__subfolder--single subfolder__bottom">
                        <NavLink exact={true} to={this.props.paths[2].url}>
                            <img src={this.props.paths[2].img} alt={this.props.paths[2].name} />
                            <p>
                                {this.props.paths[2].name}
                                <span>Découvrir</span>
                            </p>
                        </NavLink>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}