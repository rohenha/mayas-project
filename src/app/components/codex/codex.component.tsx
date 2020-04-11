// Imports
import { ICodexProps, ICodexState } from 'Interfaces';
import * as React from 'react';

// Styles
import './codex.component.sass';

// Components
import { CodexDefinitionComponent, CodexListComponent } from 'Components';

// Services
import { AnimationsService } from 'Services';

export class CodexComponent extends React.Component<ICodexProps, ICodexState> {
    public node: React.RefObject<HTMLDivElement>;
    public animationsService: AnimationsService = new AnimationsService();
    constructor(props: any) {
        super(props);
        this.state = {
            dataOpen: -1
        };
        this.node = React.createRef();
    };

    public componentDidUpdate(prevProps: any): void {
        let state;
        if (this.props.toggleCodex !== prevProps.toggleCodex) {
          state = this.props.toggleCodex ? 'enter': 'exit';
          this.animationsService.toggleAnimation(this.node.current, 'CodexAnimation', state);
          if (!this.props.toggleCodex) {
            setTimeout(() => { this.changeData(-1); }, 1000);
          }
        }
    };

    public changeData(index: number): any {
        this.setState({ dataOpen : index});
    };

    public render(): React.ReactElement<any> {
        return (
            <div className="codex" ref={this.node}>
              <div className="codex__background js-bg" onClick={this.props.closeCodex} />
              {this.props.datas[this.state.dataOpen] !== undefined ?
                  <CodexDefinitionComponent data={this.props.datas[this.state.dataOpen]} />
              : null}
              <div className="codex__home js-home">
                <span className="codex__home--cross cross" onClick={this.props.closeCodex} />
                <h3>Codex</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                <nav>
                  <ul className="codex__home--list">
                    {this.props.datas.map((data: { content: any[], title: string, type: string }, index: number) =>
                      <CodexListComponent key={index} index={index} data={data} dataOpen={this.state.dataOpen} changeDef={this.changeData.bind(this, index)}/>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
        );
    };
}
