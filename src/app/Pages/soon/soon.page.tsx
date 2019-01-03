// Imports
import { IAccueilProps, IAccueilState } from 'Interfaces';
import * as React from 'react';

// Styles
import './soon.page.scss';

import { VideoComponent } from 'Components';

// Components

export class PageSoon extends React.Component<IAccueilProps, IAccueilState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="accueil" className="page" data-page="Accueil">
                <VideoComponent
                    sources={[
                        { type: 'mp4', path: require('../../Assets/Videos/Breezy/Breezy.mp4') },
                        { type: 'webm', path: require('../../Assets/Videos/Breezy/Breezy.webm') },
                        { type: 'ogv', path: require('../../Assets/Videos/Breezy/Breezy.ogv') }
                    ]}
                    poster={require('../../Assets/Videos/Breezy/Breezy.jpg')}
                    controls={false}
                    autoplay={true}
                    loop={true}
                    muted={true}
                    {...this.props}
                    nextPage=""
                />
                <div className="container">
                    <div className="introduce">
                        <h3>Voyage en terres d'histoire</h3>
                        <h4>Présente</h4>
                    </div>
                    <div className="entete">
                        <h1>Mayas</h1>
                        <h2>Sur les traces d'une civilisation mystérieuse</h2>
                    </div>
                    <div className="formEnter">
                        <p>Bientôt sur vos écrans</p>
                    </div>
                    <div className="accueil__realisation">
                        <p>Réalisateur : <span>Romain Breton</span></p>
                        <p>Narratrice : <span>Elise Fouillade</span></p>
                        <p>Compositeur : <span>Guillaume Cabarrou</span></p>
                    </div>
                </div>

            </div>
        );
    }
}