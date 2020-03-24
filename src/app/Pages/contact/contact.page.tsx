// Imports
import { IContactProps, IContactState } from 'Interfaces';
import * as React from 'react';

// Styles
import './contact.page.sass';

// Components


export class PageContact extends React.Component<IContactProps, IContactState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="contact" className="page" data-page="Contact">
                <img className="bg" src={require('../../assets/images/john-salzarulo-37827-unsplash.jpg')} />
                <div className="container">
                    <div className="entete">
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        );
    }
}
