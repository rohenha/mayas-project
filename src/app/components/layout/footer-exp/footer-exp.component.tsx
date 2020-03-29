// Imports
import { IFooterExpProps, IFooterExpState } from 'Interfaces';
import * as React from 'react';

// Styles
import './footer-exp.component.sass';

// Components
import { ButtonExpComponent, CodexComponent } from 'Components';

export class FooterExpComponent extends React.Component<IFooterExpProps, IFooterExpState> {
    public toggle: () => void = this.toggleCodex.bind(this);
    constructor(props: any) {
        super(props);
        this.state = { openCodex: false };
    }

    public toggleCodex(): void {
        this.setState({ openCodex: !this.state.openCodex});
    }

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <button id="footerExp-left" className="footerExp button__base" onClick={this.toggle} >
                    Codex
                        <img src={require('../../../assets/images/codex_icon.png')} alt="Icon Codex" />
                </button>
                <div id="footerExp-right" className="footerExp">
                    <ButtonExpComponent redirection={this.props.nextPage} {...this.props} back={false} text={this.props.footerText} />
                </div>
                <CodexComponent datas={this.props.codexDatas} toggleCodex={this.state.openCodex} closeCodex={this.toggle} />
            </React.Fragment>
        );
    }
}
