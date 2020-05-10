// Imports
import { Howl } from 'howler';
import { IPreloadProps, IPreloadState } from 'Interfaces';
import * as React from 'react';

// Styles
import './preloader.component.sass';

// Components
import { LoaderComponent } from 'Components';

// Content
import { PreloaderContent } from 'Content';
import Images from 'Images';
import Sounds from 'Sounds';
import Videos from 'Videos';

// Services
import { AnimationsService } from 'Services';

export class PreloaderComponent extends React.Component<IPreloadProps, IPreloadState> {
  public node: React.RefObject<HTMLDivElement>;
  public video: React.RefObject<HTMLVideoElement>;
  public animationsService: AnimationsService = new AnimationsService();
  public medias : any[] = [];
  public index: number = 0;
  private constructor(props: IPreloadProps) {
    super(props);
    this.node = React.createRef();
    this.video = React.createRef();
    this.medias = [...Object.values(Images), ...Object.values(Sounds)];
    this.initVideos();
    console.log(this.medias);
    // this.medias = [...Object.values(Images), ...Object.values(Sounds), ...Object.values(Videos)];
    this.state = {
      avancement: 0
    };
    document.addEventListener('DOMContentLoaded', this.onPageLoaded.bind(this));
  };

  public initVideos(): void {
    Object.keys(Videos)
      .forEach((VideoKey: string) => {
        const video = Videos[VideoKey];
        Object.keys(video)
          .forEach((elementKey: string) => {
            this.medias.push(video[elementKey]);
          });
      });
  };

  public onPageLoaded(): void {
    this.animationsService.toggleAnimation(this.node.current, 'CommonAnimation', 'enter');
    this.loadMedia();
  };

  public loadMedia(): void {
    const media = this.medias[this.index];
    const extension = media.split('.')
      .pop();
    console.log(extension);
    switch (extension) {
      case 'jpg':
      case 'png':
      case 'gif':
      case 'svg':
        this.loadImage(media);
      break;
      case 'mp3':
        this.loadSound(media);
        break;
      case 'mp4':
      case 'ogv':
      case 'webm':
        this.loadVideo(media);
        break;
      default:
        this.updateMedia();
      break;
    }
  };

  public loadImage(image: string): void {
    const imageElement = new Image();
    imageElement.src = image;
    imageElement.onload = this.updateMedia.bind(this);
  };

  public loadSound(sound: string): void {
    // tslint:disable-next-line:no-unused-expression
    new Howl({
      autoplay: false,
      onload: this.updateMedia.bind(this),
      src: [sound],
      volume: 0
    });
  };

  public loadVideo(video: string): void {
    this.video.current!.src = video;
    this.video.current!.onloadeddata = this.updateMedia.bind(this);
  };

  public updateMedia(): void {
    // console.log('media loaded');
    this.setState({ avancement: Math.floor(this.index / (this.medias.length - 1) * 100) });
    if (this.index + 1 < this.medias.length) {
      this.index += 1;
      this.loadMedia();
    } else {
      setTimeout(this.endLoading.bind(this), 1000);
    }
  };

  public endLoading(): void {
    this.animationsService.toggleAnimation(this.node.current, 'CommonAnimation', 'exit');
    this.props.callback();
  };

  public render(): React.ReactElement<any> {
    return (
      <div className="preloader" ref={this.node} >
        <div className="container-fluid">
          <div className="preloader__sound">
            <p className="text__link">{PreloaderContent.text.experience}</p>
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50">
              <path className="st0" d="M48,48V25C48,12.3,37.7,2,25,2S2,12.3,2,25v23" />
              <path className="st1" d="M48,48h-4.5C41,48,39,46,39,43.5v-9.1c0-2.5,2-4.5,4.5-4.5H48V48z" />
              <path className="st1" d="M2,30h4.5C9,30,11,32,11,34.5v9.1C11,46,9,48,6.5,48H2V30z" />
            </svg>
          </div>
          <h2>{PreloaderContent.text.title.title}</h2>
          <h3 className="text__subtitle">{PreloaderContent.text.title.subtitle}</h3>
          <div className="preloader__loader">
              <p className="text__link">{PreloaderContent.text.loading} {this.state.avancement}%</p>
              <LoaderComponent />
          </div>
        </div>
        <video src="" ref={this.video}/>
      </div>
    );
  };
}
