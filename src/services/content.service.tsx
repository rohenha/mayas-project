// Imports
import * as React from 'react';

// Components
import { ImageComponent, VideoComponent, VideoYoutubeComponent } from 'Components';

// Services
import { IContent } from 'Interfaces';

export class ContentService {

  public renderContent(elements: IContent[], history: any): any {
    return elements.map((element: IContent, index: number) =>
      this.renderElement(element, index, history)
    );
  };

  public renderElement(element: IContent, key: number, history: any): any {
    switch(element.type) {
      case 'text':
        return <p key={key}>{element.content}</p>;
      case 'h3':
        return <h3 key={key}>{element.content}</h3>;
      case 'img':
        return <ImageComponent key={key} image={element.content} fullscreen={false} />;
      case 'youtube':
        return <VideoYoutubeComponent key={key} history={history} content={element.content} />;
      case 'video':
        return <VideoComponent key={key} history={history} content={{
          autoplay: false,
          controls: true,
          cover: false,
          loop: false,
          muted: false,
          nextPage: '',
          poster: element.content.poster,
          sources: element.content.sources,
          subtitles: ''
        }} />;
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
