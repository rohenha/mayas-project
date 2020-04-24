// Imports
import * as React from 'react';

// Components
import { ImageComponent, VideoComponent } from 'Components';

// Services
import { IContent } from 'Interfaces';

export class ContentService {

  public renderContent(elements: IContent[]): any {
    return elements.map((element: IContent, index: number) =>
      this.renderElement(element, index)
    );
  };

  public renderElement(element: IContent, key: number): any {
    switch(element.type) {
      case 'text':
        return <p key={key}>{element.content}</p>;
      case 'h3':
        return <h3 key={key}>{element.content}</h3>;
      case 'img':
        return <ImageComponent key={key} image={element.content} fullscreen={false} />;
      default:
        return null;
    }
  };

  public renderBackground(isVideo: boolean, imgs: any, props: any): any {
    if (isVideo) {
      return <VideoComponent
        {...props}
        content={{
          autoplay: true,
          controls: false,
          cover: true,
          loop: true,
          muted: true,
          nextPage: '',
          poster: imgs[0],
          sources: imgs[1],
          subtitles: ''
        }}
      />;
    } else {
      return <ImageComponent image={imgs[0]} fullscreen={true} />;
    }
  };
}
