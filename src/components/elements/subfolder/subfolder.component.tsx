// Imports
import { IMultiplePath, IPageComponentProps, ISimpleState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './subfolder.component.sass';

// Components
import { ImageComponent } from 'Components';

export class SubFolderComponent extends React.Component<IPageComponentProps, ISimpleState> {
  private constructor(props: IPageComponentProps) {
    super(props);
  };

  public renderPath(path: IMultiplePath, index: number): React.ReactElement<any> {
    return (
      <div className="section_subfolder__single" key={index}>
          <NavLink exact={true} to={path.url}>
            <ImageComponent image={path.image} fullscreen={true} />
            <span className="text__title-multi-path">
                {path.name}
                <span className="text__subtitle">Découvrir</span>
            </span>
          </NavLink>
      </div>
    );
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="section_subfolder">
        {this.props.content.map(this.renderPath.bind(this))}
      </div>
    );
  }
}
