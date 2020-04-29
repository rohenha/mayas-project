// Imports
import { ISimpleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './loading.component.sass';

// Components
import { LoaderComponent } from 'Components';

export class LoadingComponent extends React.Component<ISimpleProps, ISimpleState> {
  public node: React.RefObject<HTMLDivElement>;

  private constructor(props: ISimpleProps) {
      super(props);
  }

  public render(): React.ReactElement<any> {
    return (
      <div className="loading" data-page="Common">
        <div className="container">
          <div className="loader">
            <svg className="pulseSvg" height="100" width="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <LoaderComponent />
          </div>
        </div>
      </div>
    );
  };
}
