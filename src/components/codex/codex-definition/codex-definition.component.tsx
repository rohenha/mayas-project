// Imports
import { ICodexDefProps, ICodexDefState } from 'Interfaces';
import * as React from 'react';

// Styles
import './codex-definition.component.sass';

// Components

// Services
import { AnimationsService, ContentService } from 'Services';

export class CodexDefinitionComponent extends React.Component<ICodexDefProps, ICodexDefState> {
    public node: React.RefObject<HTMLDivElement>;
    public animationsService: AnimationsService = new AnimationsService();
    public contentService: ContentService = new ContentService();
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
    };

    public componentDidMount(): void {
      this.openDefinition();
    };

    public componentDidUpdate(prevProps: any): void {
      if (this.props.data.title !== prevProps.data.title) {
        this.openDefinition();
      }
    };

    public openDefinition(): void {
      this.animationsService.toggleAnimation(this.node.current, 'CodexDefinitionAnimation', 'enter');
    };

    public render(): React.ReactElement<any> {
      return (
        <div className="codex__definition" ref={this.node}>
            <div className="codex__definition--title">
              <h4 className="text__subtitle">{this.props.data.type}</h4>
              <h3>{this.props.data.title}</h3>
            </div>
            <div className="codex__definition--content">
              {this.contentService.renderContent(this.props.data.content, this.props.history)}
            </div>
        </div>
      );
    }
}