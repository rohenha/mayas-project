// Imports
import { ICursorState, ISimpleProps } from 'Interfaces';
import * as React from 'react';

// Styles
import './cursor.component.sass';

export class CursorComponent extends React.Component<ISimpleProps, ICursorState> {
  public onUpdateMousePosition: (event: MouseEvent) => void = this.updateMousePosition.bind(this);
  public onEnterCursor: () => void = this.toggleActive.bind(this, true);
  public onLeaveCursor: () => void = this.toggleActive.bind(this, false);
  private constructor(props: ISimpleProps) {
    super(props);
    this.state = {
      active: false,
      hover: false,
      x: 0,
      y: 0
    };
  }

  public componentDidMount(): void {
    document.addEventListener('mousemove', this.onUpdateMousePosition);
    document.addEventListener('mouseenter', this.onEnterCursor);
    document.addEventListener('mouseleave', this.onLeaveCursor);
  };

  public componentWillUnmount(): void {
    document.removeEventListener('mousemove', this.onUpdateMousePosition);
    document.removeEventListener('mouseenter', this.onEnterCursor);
    document.removeEventListener('mouseleave', this.onLeaveCursor);
  };

  public toggleActive(state: boolean): void {
    this.setState({ active: state });
  };

  public updateMousePosition(event: MouseEvent): void {
    this.setState({
      hover: this.isCursorHover(event.target),
      x: event.clientX,
      y: event.clientY
    });
  };

  public isCursorHover(target: EventTarget | null): boolean {
    const tagName: string = (target as HTMLElement).tagName;
    return tagName === 'A' ||
      tagName === 'BUTTON' ||
      tagName === 'INPUT' ||
      tagName === 'VIDEO' ||
      tagName === 'IFRAME';
  };

  public renderClassCursor(): string {
    let className: string = 'section_cursor';
    if (this.state.hover) {
      className += ' section_cursor__hover';
    }
    if (this.state.active) {
      className += ' section_cursor__active';
    }
    return className;
  };

  public render(): React.ReactElement<any> {
    return (
      <span className={this.renderClassCursor()} style={{ transform: 'translate3d(' + this.state.x + 'px, ' + this.state.y + 'px, 0)' }}>
        <span className="section_cursor__content" />
      </span>
    );
  };
}
