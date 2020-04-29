// Imports
import { ICodexListProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './codex-list.component.sass';

// Components

export class CodexListComponent extends React.Component<ICodexListProps, ISimpleState> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <li
                className={this.props.index === this.props.dataOpen ? 'codex__home--element active' : 'codex__home--element'}
                onClick={this.props.changeDef}
            >
              <button className="form-button-exp__text">
                <p className="form-button-exp__text--subtitle">{this.props.data.type}</p>
                <p className="form-button-exp__text--title">{this.props.data.title}</p>
              </button>
            </li>
        );
    }
}
