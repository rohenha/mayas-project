export class PagesService {
    public getNextPage(Routes: any, page: string) {
        return Routes.ExpRoutes[Routes.ExpRoutes.indexOf(page) + 1] !== undefined ?
            Routes.ExpRoutes[Routes.ExpRoutes.indexOf(page) + 1].content.url : '';
    }

    public getTextButtonNextPage(Routes: any, page: string): any {
        return Routes.ExpRoutes[Routes.ExpRoutes.indexOf(page) + 1] !== undefined ?
            { text1: "Poursuivre", text2: "l'expérience" } :
            { text1: "Terminer", text2: "l'expérience" };
    }
}
