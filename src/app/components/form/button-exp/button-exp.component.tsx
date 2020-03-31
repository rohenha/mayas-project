// Imports
import { IButtonExpProps, IButtonExpState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


// Styles
import './button-exp.component.sass';

// Components

export class ButtonExpComponent extends React.Component<IButtonExpProps, IButtonExpState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className={this.props.back ? " form-button-exp form-button-exp__back" : "form-button-exp"}>
                <NavLink to={this.props.redirection} className="form-button-exp__button">
                    <span className="form-button-exp__text">
                      <span className="form-button-exp__text--subtitle"><span className="form-button-exp__text--content" data-content={this.props.text.text1}>{this.props.text.text1}</span></span>
                      <span className="form-button-exp__text--title"><span className="form-button-exp__text--content" data-content={this.props.text.text2}>{this.props.text.text2}</span></span>
                    </span>
                    <span className="form-button-exp__circle"/>
                </NavLink>
            </div>

        );
    }
}
