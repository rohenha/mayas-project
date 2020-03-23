// Imports
import { ICommonProps, ICommonState } from 'Interfaces';
import * as React from 'react';

// Styles
import './03-vie.page.sass';

// Components

export class PageVie extends React.Component<ICommonProps, ICommonState> {
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div id="vie" className="page" data-page="Vie"/>
        );
    }
}
