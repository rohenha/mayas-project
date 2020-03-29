// Imports
import { ICodexDefProps, ICodexDefState } from 'Interfaces';
import * as React from 'react';

// Styles
import './codex-definition.component.sass';

// Components

export class CodexDefinitionComponent extends React.Component<ICodexDefProps, ICodexDefState> {
    constructor(props: any) {
        super(props);
    }


    public render(): React.ReactElement<any> {
        return (
            <div className="codex__definition">
                <h4>{this.props.data.type}</h4>
                <h3>{this.props.data.title}</h3>
                <div className="codex__definition--content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <img src={require('../../../assets/images/john-salzarulo-37827-unsplash.jpg')} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.</p>
                    <img src={require('../../../assets/images/john-salzarulo-37827-unsplash.jpg')} />
                </div>
            </div>
        );
    }
}
