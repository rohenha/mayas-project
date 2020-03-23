// Imports
import { INextStepProps, INextStepState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './next-step.component.sass';

// Components


export class NextStepComponent extends React.Component<INextStepProps, INextStepState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__nextStep">
                <NavLink exact={true} to={this.props.url}>
                    <span>{this.props.chapter.name}</span>
                    découvrir
                </NavLink>
            </div>
        );
    }
}
