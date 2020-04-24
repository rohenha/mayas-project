// Imports
import { ICodexListProps, ICodexListState } from 'Interfaces';
import * as React from 'react';

// Styles
import './codex-list.component.sass';

// Components

export class CodexListComponent extends React.Component<ICodexListProps, ICodexListState> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <li
                className={this.props.index === this.props.dataOpen ? 'codex__home--element active' : 'codex__home--element'}
                onClick={this.props.changeDef}
            >
              <p className="form-button-exp__text">
                <span className="form-button-exp__text--subtitle">{this.props.data.type}</span>
                <span className="form-button-exp__text--title">{this.props.data.title}</span>
              </p>
            </li>
        );
    }
}