// Imports
import { IPreloadProps, IPreloadState } from 'Interfaces';
import * as React from 'react';

// Styles
import './preloader.component.scss';

// Components
import { LoaderComponent } from 'Components';

export class PreloaderComponent extends React.Component<IPreloadProps, IPreloadState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="preloader">
                <div className="container">
                    <div className="sound">
                        <p>
                            Pour une meilleure expérience utilisez des écouteurs
                        </p>
                        <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50">
                            <path className="st0" d="M48,48V25C48,12.3,37.7,2,25,2S2,12.3,2,25v23" />
                            <path className="st1" d="M48,48h-4.5C41,48,39,46,39,43.5v-9.1c0-2.5,2-4.5,4.5-4.5H48V48z" />
                            <path className="st1" d="M2,30h4.5C9,30,11,32,11,34.5v9.1C11,46,9,48,6.5,48H2V30z" />
                        </svg>
                    </div>
                    <h3 className="title">Mayas</h3>
                    <h4 className="subtitle">Sur les traces d'une civilisation mystérieuse</h4>

                    <div className="loader">
                        <p>chargement 10%</p>
                        <LoaderComponent />
                    </div>
                </div>
            </div>
        );
    }
}