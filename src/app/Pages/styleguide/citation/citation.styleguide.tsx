// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './citation.styleguide.sass';

// Components
import { QuoteComponent } from 'Components';

export class StyleGuideCitation extends React.Component<ICommonProps, ICommonState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div id="vie" className="page" data-page="Common">
                <QuoteComponent
                    img={require('../../../assets/images/john-salzarulo-37827-unsplash.jpg')}
                    citation={[<b key={0}>Lorem ipsum dolor sit</b>, "amet consectetur adipisicing elit. Maxime placeat obcaecati id, repellendus ratione porro"]}
                    name={"Lorem Ipsum"}
                />
            </div>
        );
    }
}
