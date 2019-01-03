export class OriginesContent {
    public static chapter: number = 3;
    public static title: string = "Origines";
    public static pageName: string = "Origines";
    public static url: string = "/styleguide/content";
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