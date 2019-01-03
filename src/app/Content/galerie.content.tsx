export class GalerieContent {
    public static chapter: number = 4;
    public static title: string = "Galerie";
    public static pageName: string = "Common";
    public static url: string = "/styleguide/galerie";
    public static type: string = "page";
    public static exactUrl: boolean = true;
    public static codex: Array<{ content: any[], title: string, type: string }> = [
        {
            content: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.'
            ],
            title: 'Toto Jean',
            type: 'Personnalité',
        },
        {
            content: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.'
            ],
            title: 'Lorem Ipsum',
            type: 'Définition',
        }
    ];
}