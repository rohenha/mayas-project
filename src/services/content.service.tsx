// Imports
import * as React from 'react';

// Components
import { ImageComponent, VideoComponent, VideoYoutubeComponent } from 'Components';

// Services
import { IBackground, IContent } from 'Interfaces';

export class ContentService {

  public renderContent(elements: IContent[], history: any): any {
    return elements.map((element: IContent, index: number) =>
      this.renderElement(element, index, history)
    );
  };

  public renderElement(element: IContent, key: number, history: any): React.ReactElement<any> | void {
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
        break;
    }
  };

  public renderBackground(isVideo: boolean, media: IBackground, props: any): React.ReactElement<any> {
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
          poster: media.poster,
          sources: media.sources,
          subtitles: ''
        }}
      />;
    } else {
      return <ImageComponent image={media.poster} fullscreen={true} />;
    }
  };
}
