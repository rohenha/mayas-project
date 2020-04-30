// Imports
import { ISimpleProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './loader-page.component.sass';

// Components
import { ImageComponent, LoadingComponent } from 'Components';

// Content
import { PreloaderContent } from 'Content';

export class LoaderPageComponent extends React.Component<ISimpleProps, ISimpleState> {
  private constructor(props: ISimpleProps) {
    super(props);
  }

  public render(): React.ReactElement<any> {
    return (
      <div data-page="Common">
        <ImageComponent image={PreloaderContent.background} fullscreen={true} />
        <LoadingComponent />
      </div>
    );
  };
}
