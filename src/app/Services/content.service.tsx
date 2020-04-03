// Imports
import * as React from 'react';

// Services
import { IContent } from 'Interfaces';

export class ContentService {
  public renderElement(element: IContent, key: number): any {
    switch(element.type) {
      case 'text':
        return <p key={key}>{element.content}</p>;
      case 'img':
        return <img key={key} src={element.content} />;
      default:
        return null;
    }
  };
}
