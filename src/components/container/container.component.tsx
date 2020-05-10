/* tslint:disable:no-empty */
// Imports
import { IContainerState, IExperience, IRoute, ISimpleProps } from 'Interfaces';
import * as React from 'react';

// Styles
// Components
import * as Content from 'Content';
import Providers from 'Providers';

export class ContainerComponent extends React.Component<ISimpleProps, IContainerState> {
  private constructor(props: ISimpleProps) {
    super(props);
    this.state = {
      muted: false,
      page: Providers['PageBase'],
      routes: this.initRoutes(),
      sound: true
    };
  };

  public initRoutes(): IRoute | IExperience[] {
    const routes: IRoute | IExperience[] = [];
    Object.keys(Content)
      .forEach((key: string) => {
        const content = Content[key];
        if (content.isPage) {
          routes.push(content);
        }
      });
    return routes;
  };

  public setContent(page: IRoute): void {
    this.setState({ page });
  };

  public toggleSound(sound: boolean): void {
    if (!this.state.muted) {
      this.setState({ sound });
    }
  };

  public toggleMute(newValue: boolean): void {
    this.setState({ muted: !newValue, sound: newValue });
  };

  public render(): React.ReactElement<any> {
    const TagName: any = Providers['ThemeContext'];
    return (
      <TagName.Provider
        value={{
          muted: this.state.muted,
          page: this.state.page,
          routes: this.state.routes,
          setPage: this.setContent.bind(this),
          sound: this.state.sound,
          toggleMute: this.toggleMute.bind(this),
          toggleSound: this.toggleSound.bind(this)
        }}
      >
        {this.props.children}
      </TagName.Provider>
    );
  };
}
