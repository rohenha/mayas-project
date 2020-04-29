// Imports
import { ISliderProps, ISliderState } from 'Interfaces';
import * as React from 'react';

// Styles
import './slider.component.sass';

// Components

export class SliderComponent extends React.Component<ISliderProps, ISliderState> {
  public onChange: (event: any) => void = this.changeValue.bind(this);
  public onReset: () => void = this.resetVal.bind(this);
  private animationInterval: ReturnType<typeof setTimeout>;
  constructor (props: ISliderProps) {
    super(props);
    this.state = {
      end: false,
      value: 0
    };
  };

  public changeValue(event: any): void  {
    const value = event.target.value;
    if (!this.state.end) {
      this.setState(
        { end: value === '100' , value },
        this.checkIsDone
      );
    }
  };

  public checkIsDone(): void {
    if (this.state.end) {
      setTimeout(this.props.onDone , 1000);
    }
  };

  public resetVal(): void {
    if (this.state.value > 0 && !this.state.end) {
      this.animationInterval = setInterval(this.animateVal.bind(this), 5);
    }
  };

  public animateVal(): void {
    const newValue = this.state.value - 1;
    this.setState({ value: newValue });
    if (newValue === 0) {
      clearInterval(this.animationInterval);
    }
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="form-range__container">
        <input
            className="form-range__input"
            value={this.state.value}
            type="range"
            onChange={this.onChange}
            onMouseUp={this.onReset}
        />
      </div>
    );
  }
}
