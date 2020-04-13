// Imports
import { IMultiplePath, ISubFolderProps, ISubFolderState} from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './subfolder.component.sass';

// Components
import { ImageComponent } from 'Components';

export class SubFolderComponent extends React.Component<ISubFolderProps, ISubFolderState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="section_subfolder">
                {this.props.paths.map((path: IMultiplePath, index: number) =>
                    <div className="section_subfolder__single" key={index}>
                        <NavLink exact={true} to={path.url}>
                          <ImageComponent image={path.img} fullscreen={true} />
                          <span className="text__title-multi-path">
                              {path.name}
                              <span className="text__subtitle">Découvrir</span>
                          </span>
                        </NavLink>
                    </div>
                )}
            </div>
        );
    }
}
