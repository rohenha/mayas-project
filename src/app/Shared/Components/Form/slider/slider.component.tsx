// Imports
import { ISliderProps, ISliderState } from 'Interfaces';
import * as React from 'react';

// Styles
import './slider.component.sass';

// Components


export class SliderComponent extends React.Component<ISliderProps, ISliderState> {
    public onChange: () => {} = this.changeValue.bind(this);
    public onReset: () => {} = this.resetVal.bind(this);
    constructor(props: any) {
        super(props);
        this.state = {
            edit: true,
            value: 0
        }
    }

    public changeValue(event: any): void  {
        const value = event.target.value;
        if( this.state.edit ) {
            this.setState(
                { edit: value === '100' ? false : true, value, },
                () => { if( !this.state.edit) { this.props.onDone(); } }
            );
        }
    }

    public resetVal () {
        if (this.state.value > 0 && this.state.edit) {
            setTimeout(
                () => {
                    this.setState({ value: this.state.value - 1 }, () => { this.resetVal(); });
                },
                5
            );
        }
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="container__range">
                <input
                    className="container__range--input"
                    value={this.state.value}
                    type="range"
                    onChange={this.onChange}
                    onMouseUp={this.onReset}
                />
            </div>
        );
    }
}
