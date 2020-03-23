// Imports
import { ISimpleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './loader.component.sass';

// Components

export class LoaderComponent extends React.Component<ISimpleProps, ISimpleState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <svg className="loader__anim" version="1.1" x="0px" y="0px" viewBox="0 0 100 68">
                    <polygon points="2.647,2 36.618,5.088 47.118,15.588 53.294,12.5
                    66.882,26.706 74.912,52.029 89.118,44 99,42.147 97.147,52.029 86.647,54.5 87.882,59.441 82.941,65 76.765,60.059 70.588,61.294
                    39.706,45.853 39.397,38.132 20.25,10.338 12.838,9.103 26.426,35.044 25.191,36.897 8.515,18.985 10.985,15.897 "/>
                </svg>
            </React.Fragment>
        );
    }
}
