// Imports
import { IButtonExpProps, IButtonExpState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


// Styles
import './buttonExp.component.scss';

// Components

export class ButtonExpComponent extends React.Component<IButtonExpProps, IButtonExpState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className={this.props.back ? " buttonExp buttonExp__back" : "buttonExp"}>
                <NavLink to={this.props.redirection} className="buttonExp__button">
                    <p>
                        <span className="red"><span className="text-content" data-content={this.props.text.text1}>{this.props.text.text1}</span></span>
                        <span className="white"><span className="text-content" data-content={this.props.text.text2}>{this.props.text.text2}</span></span>
                    </p>
                    <span className="circleNext"/>
                </NavLink>
            </div>

        );
    }
}