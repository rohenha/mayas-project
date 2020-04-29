// Imports
import { IComponent, IPageProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './page.component.sass';

// Components
import { DetailsComponent } from 'Components';
import * as Components from 'Components';

// Services
import Providers from 'Providers';

export class PageComponent extends React.Component<IPageProps, ISimpleState> {
  public static contextType = Providers['ThemeContext'];

  private constructor(props: IPageProps) {
    super(props);
  };

  public componentDidMount(): void {
    this.context.setPage(this.props.content);
  };

  public renderContainer(): React.ReactElement<any> {
    if (this.props.content.container) {
      return <DetailsComponent>{this.renderContent()}</DetailsComponent>;
    } else {
      return this.renderContent();
    }
  };

  public renderContent(): React.ReactElement<any> {
    return this.props.content.content.map((component: IComponent, index: number) => {
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
  };
}
