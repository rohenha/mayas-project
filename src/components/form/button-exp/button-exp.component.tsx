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

    public renderText(content: any, className: string): any {
      return <span className={"form-button-exp__text--" + className}><span className="form-button-exp__text--content" data-content={content}>{content}</span></span>;
    };

    public render(): React.ReactElement<any> {
        return (
            <div className={this.props.back ? " form-button-exp form-button-exp__back" : "form-button-exp"}>
                <NavLink to={this.props.redirection} className="form-button-exp__button">
                    <span className="form-button-exp__text">
                      {this.renderText(this.props.text.text1, 'subtitle')}
                      {this.renderText(this.props.text.text2, 'title')}
                    </span>
                    <span className="form-button-exp__circle"/>
                </NavLink>
            </div>

        );
    }
}
