// Imports
import { I404Props, I404State } from 'Interfaces';
import * as React from 'react';

// Styles
import './404.page.scss';

// Components
import { ButtonExpComponent } from 'Components';

export class Page404 extends React.Component<I404Props, I404State> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div id="P404" className="page" data-page="P404">
                <img className="bg" src={require('../../Assets/Images/john-salzarulo-37827-unsplash.jpg')} />
                <div className="container">
                    <div className="entete">
                        <h2>Vous êtes vous perdu dans la</h2>
                        <h1>foret ?</h1>
                    </div>
                    <div className="introduce">
                        <h3>Il semblerai que la page que vous cherchez n'existe pas</h3>
                    </div>
                    <div className="P404__button">
                        <ButtonExpComponent redirection={'/'} {...this.props} back={true} text={{ text1: "Revenir", text2: "à l'accueil" }} />
                    </div>
                </div>
            </div>
        );
    }
}