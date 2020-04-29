// Imports
import { ICursorProps, ICursorState } from 'Interfaces';
import * as React from 'react';

// Styles
import './cursor.component.sass';

// Components

export class CursorComponent extends React.Component<ICursorProps, ICursorState> {
  public onUpdateMousePosition: (event: any) => void = this.updateMousePosition.bind(this);
    constructor(props: any) {
        super(props);
        this.state = {
          hover: false,
          x: 0,
          y: 0
        };
    }

    public componentDidMount(): void {
      document.addEventListener('mousemove', this.onUpdateMousePosition);
    };

    public componentWillUnmount(): void {
      document.removeEventListener('mousemove', this.onUpdateMousePosition);
    };

    public updateMousePosition(event: any): void {
      this.setState({
        hover: event.target.tagName === 'A' ||  event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT',
        x: event.clientX,
        y: event.clientY
      });
    };



    public setStyle(): any {
      const translate = 'translate3d(' + this.state.x + 'px, ' + this.state.y + 'px, 0)';
      return {
        mozTransform: translate,
        transform: translate,
        webkitTransform: translate
      }
    };

    public render(): React.ReactElement<any> {
        return (
          <span className={this.state.hover ? 'section_cursor section_cursor__active' : 'section_cursor'} style={this.setStyle()}>
            <span className="section_cursor__content" />
          </span>
        );
    }
}
