import * as Content from 'Content';

export class PagesService {
    public getNextPage(page: any): any {
      const element = this.getParent(page);
      return Content[element.nextChapter].url;
    };

    public getParent(page: any): any {
      return page.hasParent ? Content[page.hasParent] : page;
    };

    public getPreviousPage(page: any): any {
      const element = this.getParent(page);
      return element.url;
    };

}
