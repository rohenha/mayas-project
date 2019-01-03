// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './docsound.styleguide.scss';

// Components
import { SoundDocComponent} from 'Components';

export class StyleGuideDocSound extends React.Component<ICommonProps, ICommonState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div id="vie" className="page" data-page="Common">
                <SoundDocComponent 
                sound={require('../../../Assets/Sounds/carnival-daniel_simon.mp3')}
                delay={1000}
                autoplay={true}
                play={true} />
                <img className="bg" src={require('../../../Assets/Videos/Breezy/Breezy.jpg')} />
            </div>
        );
    }
}