export class IntroductionContent {
    public static chapter: number = 1;
    public static title: string = "Le Mexique";
    public static pageName: string = "Introduction";
    public static url: string = "/introduction";
    public static type: string = "video";
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