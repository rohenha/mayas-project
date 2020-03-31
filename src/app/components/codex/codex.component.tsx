// Imports
// import { TweenMax } from 'gsap';
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
            dataOpen: 0
        };
        this.node = React.createRef();
    }

    // public componentDidUpdate(prevProps: any): void {
    //     if (this.props.toggleCodex !== prevProps.toggleCodex && this.props.toggleCodex === true) {
    //         this.enterCodex(this.node.current);
    //     }
    //     if (this.props.toggleCodex !== prevProps.toggleCodex && this.props.toggleCodex === false) {
    //         this.exitCodex(this.node.current);
    //     }
    // }

    public componentDidUpdate(prevProps: any): void {
        let state;
        if (this.props.toggleCodex !== prevProps.toggleCodex) {
          state = this.props.toggleCodex ? 'enter': 'exit';
          this.animationsService.toggleAnimation(this.node, 'CodexAnimation', state);
        }
    }

    public changeData(index: number): any {
        this.setState({ dataOpen : index});
    }

    // public enterCodex(node: any): void {
    //     TweenMax.killTweensOf(node);
    //     Animations.CodexAnimation.enter(
    //         node,
    //         Animations.CodexAnimation.duration,
    //         0
    //     );
    // }
    //
    // public exitCodex(node: any): void {
    //     TweenMax.killTweensOf(node);
    //     Animations.CodexAnimation.exit(node, Animations.CodexAnimation.duration);
    // }

    public render(): React.ReactElement<any> {
        return (
            <div id="codex" ref={this.node}>
                <div className="codex__accueil">
                    <span className="codex__accueil--cross cross" onClick={this.props.closeCodex} />
                    <h3>Codex</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <ul className="codex__accueil--list">
                        {this.props.datas.map((data: { content: any[], title: string, type: string }, index: number) =>
                            <CodexListComponent key={index} index={index} data={data} dataOpen={this.state.dataOpen} changeDef={this.changeData.bind(this, index)}/>
                        )}
                    </ul>
                </div>
                <CodexDefinitionComponent data={this.props.datas[this.state.dataOpen]} />
            </div>
        );
    }
}
