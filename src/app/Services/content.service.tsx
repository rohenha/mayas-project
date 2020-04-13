// Imports
import * as React from 'react';

// Components
import { ImageComponent } from 'Components';

// Services
import { IContent } from 'Interfaces';

export class ContentService {
  public renderElement(element: IContent, key: number): any {
    switch(element.type) {
      case 'text':
        return <p key={key}>{element.content}</p>;
      case 'img':
        return <ImageComponent key={key} image={element.content} fullscreen={false} />;
      default:
        return null;
    }
  };
}
