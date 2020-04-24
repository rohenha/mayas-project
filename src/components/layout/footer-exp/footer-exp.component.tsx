// Imports
import { IFooterExpProps, IFooterExpState } from 'Interfaces';
import * as React from 'react';

// Styles
import './footer-exp.component.sass';

// Components
import { ButtonExpComponent, CodexComponent, ImageComponent } from 'Components';
import { CodexContent } from 'Content';

export class FooterExpComponent extends React.Component<IFooterExpProps, IFooterExpState> {
    public toggle: () => void = this.toggleCodex.bind(this);
    constructor(props: any) {
        super(props);
        this.state = { openCodex: false };
    }

    public toggleCodex(): void {
        this.setState({ openCodex: !this.state.openCodex});
    }

    public setText(): any {
      return this.props.nextPage === '/' ?
        { text1: "Terminer", text2: "l'expérience" } :
        { text1: "Poursuivre", text2: "l'expérience" };
    };

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <button className="footer-exp footer-exp--left button__base" onClick={this.toggle} >
                    <span>Codex</span>
                    <ImageComponent image={CodexContent.image} fullscreen={false} />
                </button>
                <div className="footer-exp footer-exp--right">
                    <ButtonExpComponent redirection={this.props.nextPage} {...this.props} back={false} text={this.setText()} />
                </div>
                <CodexComponent datas={this.props.codexDatas} toggleCodex={this.state.openCodex} closeCodex={this.toggle} history={this.props.history} />
            </React.Fragment>
        );
    }
}
