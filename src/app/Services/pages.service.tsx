import * as Content from 'Content';

export class PagesService {
    public getNextPage(page: any) {
      const element = page.hasParent ? Content[page.hasParent] : page;
      return Content[element.nextChapter].url;
    };
}
