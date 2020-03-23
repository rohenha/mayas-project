// Imports
import { IMultiplePath, ISubFolderProps, ISubFolderState} from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './subfolder.component.sass';

// Components

export class SubFolderComponent extends React.Component<ISubFolderProps, ISubFolderState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__subfolder">
                {this.props.paths.map((path: IMultiplePath, index: number) =>
                    <div className="content__subfolder--single" key={index}>
                        <NavLink exact={true} to={path.url}>
                            <img src={path.img} alt={path.name} />
                            <p>
                                {path.name}
                                <span>Découvrir</span>
                            </p>
                        </NavLink>
                    </div>
                )}
            </div>
        );
    }
}
