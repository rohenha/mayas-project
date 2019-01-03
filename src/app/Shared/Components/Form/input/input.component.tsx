// Imports
import { IInputProps, IInputState } from 'Interfaces';
import * as React from 'react';

// Styles
import './input.component.scss';

// Components


export class InputComponent extends React.Component<IInputProps, IInputState> {

    constructor(props: any) {
        super(props);
        this.state = {
            changeValue: this.handleChange.bind(this),
            value : ""
        }
    }

    public handleChange(event: any): void {
        this.setState({
                value: event.target.value
            },
            () => this.props.exportValue(this.state.value)
        );
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="input">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} value={this.state.value} onChange={this.state.changeValue} />
            </div>
        );
    }
}