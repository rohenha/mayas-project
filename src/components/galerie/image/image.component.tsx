// Imports
import { IImageGalerieProps, ISimpleState } from 'Interfaces';
import * as React from 'react';

// Styles
import './image.component.sass';

// Components
import { ImageComponent } from 'Components';

// Services
import Providers from 'Providers';
import { AnimationsService } from 'Services';

export class ImageGalerieComponent extends React.Component<IImageGalerieProps, ISimpleState> {
  public node: React.RefObject<HTMLDivElement>;
  public onClickImg: () => void = this.toggleImage.bind(this);
  public animationsService: AnimationsService = new AnimationsService();

  private constructor(props: IImageGalerieProps) {
    super(props);
    this.node = React.createRef();
  }

  public componentDidUpdate(prevProps: IImageGalerieProps): void {
    if (this.props.open !== prevProps.open && this.props.open === false) {
      this.animationsService.toggleAnimation(this.node.current, 'GalerieImageAnimation', 'exit');
    }
  }

  public toggleImage(): void{
    const state: string = !this.props.open ? 'enter' : 'exit';
    const index: number = !this.props.open ? this.props.index : -1;
    const delay: number = index === -1 ? this.props.delayClose : 0;
    setTimeout(() => {
      this.animationsService.toggleAnimation(this.node.current, 'GalerieImageAnimation', state);
    }, delay);
    this.props.toggleImage(!this.props.open ? this.props.element : Providers['ImageGalerieBase']);
  }

  public classGalerie(): string {
    let classString: string = 'section_galerie__image--container';
    classString = this.props.open ? classString + ' section_galerie__image--open' : classString;
    classString = this.props.element.portrait ? classString + ' section_galerie__image--portrait' : classString + ' section_galerie__image--paysage';
    return classString;
  }

  public render(): React.ReactElement<any> {
    return (
      <div className={this.classGalerie()} onClick={this.onClickImg} ref={this.node}>
        <div className="section_galerie__image">
          <ImageComponent image={this.props.element.image} fullscreen={false} />
          <button className="section_galerie__image--button">
            <div className="section_galerie__image--hoverImg"/>
          </button>
        </div>
      </div>
    );
  }
}
