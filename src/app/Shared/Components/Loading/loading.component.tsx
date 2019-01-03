// Imports
import { ILoadingProps, ILoadingState } from 'Interfaces';
import * as React from 'react';

// Styles
import './loading.component.scss';

// Components
import { LoaderComponent } from 'Components';

export class LoadingComponent extends React.Component<ILoadingProps, ILoadingState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="loading">
                <div className="container">
                    <div className="loader">
                        <svg className="pulseSvg" height="100" width="100" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" />
                        </svg>
                        {/* <p>chargement</p> */}
                        <LoaderComponent />
                    </div>
                </div>
            </div>
        );
    }
}