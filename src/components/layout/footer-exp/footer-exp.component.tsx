// Imports
import { IFooterExpProps, IFooterExpState } from 'Interfaces';
import * as React from 'react';
import { PagesService } from 'Services';

// Styles
import './footer-exp.component.sass';

// Components
import { ButtonExpComponent, CodexComponent } from 'Components';
import Providers from 'Providers';

export class FooterExpComponent extends React.Component<IFooterExpProps, IFooterExpState> {
    public static contextType = Providers['ThemeContext'];
    public pagesService: PagesService = new PagesService();
    public toggle: () => void = this.toggleCodex.bind(this);
    constructor(props: any) {
        super(props);
        this.state = { openCodex: false };
    }

    public toggleCodex(): void {
        this.setState({ openCodex: !this.state.openCodex});
    }

    public setText(): any {
      return this.pagesService.getNextPage(this.context.page) === '/' ?
        { text1: "Terminer", text2: "l'expérience" } :
        { text1: "Poursuivre", text2: "l'expérience" };
    };

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                <button className="footer-exp footer-exp--left button__base" onClick={this.toggle} >
                    <span>Codex</span>
                    <span className="footer-exp__codex-img" />
                </button>
                <div className="footer-exp footer-exp--right">
                    <ButtonExpComponent redirection={this.pagesService.getNextPage(this.context.page)} {...this.props} back={false} text={this.setText()} />
                </div>
                <CodexComponent toggleCodex={this.state.openCodex} closeCodex={this.toggle} history={this.props.history} />
            </React.Fragment>
        );
    }
}
