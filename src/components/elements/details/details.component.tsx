// Imports
import { ISimpleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './details.component.sass';

export class DetailsComponent extends React.Component<ISimpleProps, ISimpleState> {
  public node: React.RefObject<HTMLDivElement>;

  private constructor(props: ISimpleProps) {
    super(props);
  }

  public render(): React.ReactElement<any> {
    return (
      <div className="page__content section_details">
        <div className="page__scroller section_details__content">
          {this.props.children}
        </div>
      </div>
    );
  };
}
