// Imports
import { IImageProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './image.component.sass';

export class ImageComponent extends React.Component<IImageProps, ISimpleState> {
  public node: React.RefObject<HTMLDivElement>;

  private constructor(props: IImageProps) {
    super(props);
  };

  public render(): React.ReactElement<any> {
    return (
      <div className={this.props.fullscreen ? "section_image section_image__fullscreen js-bg" : "section_image"}>
        <img src={this.props.image.path} alt={this.props.image.alt} title={this.props.image.title} />
      </div>
    );
  };
}
