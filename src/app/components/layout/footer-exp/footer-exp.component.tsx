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

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <button className="footer-exp footer-exp--left button__base" onClick={this.toggle} >
                    <span>Codex</span>
                    <ImageComponent image={CodexContent.image} fullscreen={false} />
                </button>
                <div className="footer-exp footer-exp--right">
                    <ButtonExpComponent redirection={this.props.nextPage} {...this.props} back={false} text={this.props.footerText} />
                </div>
                <CodexComponent datas={this.props.codexDatas} toggleCodex={this.state.openCodex} closeCodex={this.toggle} />
            </React.Fragment>
        );
    }
}
