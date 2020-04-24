// Imports
import { IPageProps, IPageState } from 'Interfaces';
import * as React from 'react';

// Styles
import './page.component.sass';

// Components
import { DetailsComponent } from 'Components';
import * as Components from 'Components';

export class PageComponent extends React.Component<IPageProps, IPageState> {
    constructor(props: any) {
      super(props);
    };

    public componentDidMount(): void {
      this.props.setContent(this.props.content);
    };

    public renderContainer(): any {
      if (this.props.content.container) {
        return <DetailsComponent>{this.renderContent()}</DetailsComponent>;
      } else {
        return this.renderContent();
      }
    };

    public renderContent(): any {
      return this.props.content.content.map((component: any, index: number) => {
        const TagName = Components[component.component];
        return <TagName
            key={index}
            {...this.props}
            content={component.content}
          />;
      });
    };

    public render(): React.ReactElement<any> {
        return (
            <div className={'page section_page ' + this.props.content.class} data-page={this.props.content.animation}>
              {this.renderContainer()}
            </div>
        );
    }
}
