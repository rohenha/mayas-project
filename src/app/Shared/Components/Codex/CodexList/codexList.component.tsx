// Imports
import { ICodexListProps, ICodexListState } from 'Interfaces';
import * as React from 'react';

// Styles
import './codexList.component.sass';

// Components

export class CodexListComponent extends React.Component<ICodexListProps, ICodexListState> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <li
                className={this.props.index === this.props.dataOpen ? 'codex__accueil--list-single active' : 'codex__accueil--list-single'}
                onClick={this.props.changeDef}
            >
                <p>
                    <span className="codex__accueil--list-single-type">{this.props.data.type}</span>
                    <span className="codex__accueil--list-single-name">{this.props.data.title}</span>
                </p>
            </li>
        );
    }
}
