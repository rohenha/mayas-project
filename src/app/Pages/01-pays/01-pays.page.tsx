// Imports
import { IPaysProps, IPaysState } from 'Interfaces';
import * as React from 'react';

// Styles
import './01-pays.page.scss';

// Components
import { MultiplePathComponent } from 'Components';
import { PaysContent  } from 'Content';

export class PagePays extends React.Component<IPaysProps, IPaysState> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="pays" className="page" data-page="Pays">
                {/* <SoundAmbianceComponent delay={0} sound={require('../../Assets/Sounds/carnival-daniel_simon.mp3')} /> */}
                {/* <img className="bg" src={require('../../Assets/Images/john-salzarulo-37827-unsplash.jpg')} /> */}
                <MultiplePathComponent paths={PaysContent.content} />
            </div>
        );
    }
}