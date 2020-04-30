import * as Content from 'Content';
import { IExperience } from 'Interfaces';

export class PagesService {
    public getNextPage(page: IExperience): string {
      const element = this.getParent(page);
      return Content[element.nextChapter].url;
    };

    public getParent(page: IExperience): IExperience {
      return page.hasParent ? Content[page.hasParent] : page;
    };

    public getPreviousPage(page: IExperience): string {
      const element = this.getParent(page);
      return element.url;
    };

}
