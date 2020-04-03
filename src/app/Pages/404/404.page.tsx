// Imports
import { IP404Props, IP404State } from 'Interfaces';
import * as React from 'react';

// Styles
import './404.page.sass';

// Components
import { ButtonExpComponent } from 'Components';

// Content
import { P404Content } from 'Content';

export class Page404 extends React.Component<IP404Props, IP404State> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
          <div className="page page-404 section__entry-chapter" data-page="Common">
            <img className="page__bg" src={P404Content.background} />
            <div className="page__content">
                <div className="container-fluid">
                  <h3 className="text__subtitle" dangerouslySetInnerHTML={{__html: P404Content.text.title.subtitle}}/>
                  <h1>{P404Content.text.title.title}</h1>
                  <p className="section__entry-chapter--text">{P404Content.text.text}</p>
                  <ButtonExpComponent redirection={P404Content.url} {...this.props} back={true} text={P404Content.text.back} />
                </div>
            </div>
          </div>
        );
    }
}
