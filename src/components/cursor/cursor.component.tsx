// Imports
import { ICursorState, ISimpleProps } from 'Interfaces';
import * as React from 'react';

// Styles
import './cursor.component.sass';

export class CursorComponent extends React.Component<ISimpleProps, ICursorState> {
  public onUpdateMousePosition: (event: any) => void = this.updateMousePosition.bind(this);
  private constructor(props: ISimpleProps) {
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

  public render(): React.ReactElement<any> {
    return (
      <span className={this.state.hover ? 'section_cursor section_cursor__active' : 'section_cursor'} style={{ transform: 'translate3d(' + this.state.x + 'px, ' + this.state.y + 'px, 0)' }}>
        <span className="section_cursor__content" />
      </span>
    );
  };
}
