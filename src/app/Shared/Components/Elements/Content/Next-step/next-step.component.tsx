// Imports
import { INextStepProps, INextStepState } from 'Interfaces';
import * as React from 'react';

// Styles
import './next-step.component.scss';

// Components

export class NextStepComponent extends React.Component<INextStepProps, INextStepState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__nextStep">
                hello world
            </div>
        );
    }
}