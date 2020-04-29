// Imports
import { IMobileState, ISimpleProps } from 'Interfaces';
import * as React from 'react';

// Styles
import './mobile.component.sass';

// Content
import { MobileContent } from 'Content';

export class MobileComponent extends React.Component<ISimpleProps, IMobileState> {
  public onUpdateDimensions: () => void = this.updateDimensions.bind(this);
  private constructor(props: ISimpleProps) {
      super(props);
      this.state = {
        active: ''
      };
  };

  public componentDidMount(): void {
    this.onUpdateDimensions();
    window.addEventListener('resize', this.onUpdateDimensions);
  };

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.onUpdateDimensions);
  };

  public updateDimensions(): void {
    const width: number = window.innerWidth;
    const newActive: string = width < 768 ? 'active' : '';
    this.setState({
      active: newActive
    });
  };

  public render(): React.ReactElement<any> {
    return (
      <div className={"section_mobile " + this.state.active} >
        <div className="container-fluid">
          <h2>{MobileContent.title.title}</h2>
          <h3 className='text__subtitle'>{MobileContent.title.subtitle}</h3>
        </div>
      </div>
    );
  };
}
