// Imports
import { IImageGalerieProps, IImageGalerieState } from 'Interfaces';
import * as React from 'react';

// Styles
import './image.component.sass';

// Components

// Services
import { AnimationsService } from 'Services';

export class ImageGalerieComponent extends React.Component<IImageGalerieProps, IImageGalerieState> {
    public node: React.RefObject<HTMLDivElement>;
    public onClickImg: any = this.toggleImage.bind(this);
    public animationsService: AnimationsService = new AnimationsService();
    constructor(props: any) {
        super(props);
        this.node = React.createRef();
    }

    public componentDidUpdate(prevProps: any): void {
      if (this.props.open !== prevProps.open && this.props.open === false) {
          this.animationsService.toggleAnimation(this.node.current, 'GalerieImageAnimation', 'exit');
      }
    }

    public toggleImage(): void{
      const state = !this.props.open ? 'enter' : 'exit';
      const index = !this.props.open ? this.props.index : -1;
      const delay = index === -1 ? 1000 : 0;
      setTimeout(() => {
        this.animationsService.toggleAnimation(this.node.current, 'GalerieImageAnimation', state);
      }, delay);
      this.props.toggleImage(index);
    }

    public classGalerie(): any {
        let classString = 'section_galerie__image--container';
        classString = this.props.open ? classString + ' section_galerie__image--open' : classString;
        classString = this.props.element.portrait ? classString + ' section_galerie__image--portrait' : classString + ' section_galerie__image--paysage';
        return classString;
    }

    public render(): React.ReactElement<any> {
        return (
            <div className={this.classGalerie()} onClick={this.onClickImg} ref={this.node}>
                <div className="section_galerie__image">
                  <img src={this.props.element.image} />
                  <div className="section_galerie__image--hoverImg"/>
                </div>
            </div>
        );
    }
}
