/* tslint:disable:no-empty */
// Imports
import { IContainerProps, IContainerState } from 'Interfaces';
import * as React from 'react';

// Styles
// Components
import * as Content from 'Content';
import { ThemeContext } from 'Providers';

export class ContainerComponent extends React.Component<IContainerProps, IContainerState> {
    constructor(props: any) {
        super(props);
        const routes: any[] = [];
        Object.keys(Content)
          .forEach((key: any) => {
            const content = Content[key];
            if (content.isPage) {
              routes.push(content);
            }
        });
        this.state = {
          muted: false,
          page: {},
          routes,
          sound: true
        };
    }

    public setContent(page: any): void {
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
      return (
        <ThemeContext.Provider
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
        </ThemeContext.Provider>
      );
    }
}
