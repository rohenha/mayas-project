// Imports
import { IMobileProps, IMobileState } from 'Interfaces';
import * as React from 'react';

// Styles
import './mobile.component.sass';

// Content
import { MobileContent } from 'Content';

export class MobileComponent extends React.Component<IMobileProps, IMobileState> {
    constructor(props: any) {
        super(props);
        this.state = {
          active: ''
        };
    }

    public componentDidMount(): void {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    public componentWillUnmount(): void {
      window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    public updateDimensions(): void {
      const width = window.innerWidth;
      const newActive = width < 768 ? 'active' : '';
      this.setState({
        active: newActive
      });
    }

    public render(): React.ReactElement<any> {
        return (
            <div className={"section__mobile " + this.state.active} >
              <div className="container-fluid">
                <h2>{MobileContent.title.title}</h2>
                <h3 className='text__subtitle'>{MobileContent.title.subtitle}</h3>
              </div>
            </div>
        );
    }
}
