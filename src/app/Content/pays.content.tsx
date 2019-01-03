export class PaysContent {
    public static chapter: number = 2;
    public static title: string = "Pays";
    public static pageName: string = "Pays";
    public static url: string = "/pays";
    public static type: string = "page";
    public static exactUrl: boolean = true;
    public static codex: Array<{ content: any[], title: string, type: string }> = [
        {
            content: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.'
            ],
            title: 'Manu Macron',
            type: 'Pingouin',
        },
        {
            content: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente sint, rerum eaque reiciendis at voluptatem nesciunt, maiores velit earum numquam inventore quo ad vitae nobis. Accusamus ut dolores assumenda.'
            ],
            title: 'Zindine Zidane',
            type: 'Dieu',
        }
    ];
    public static content: Array<{ img: string, name: string, url: string }> = 
    [
        {
            img: require('../Assets/Images/jezael-melgoza-551505-unsplash.jpg'),
            name: 'Mexique',
            url: '/realisation'
        },
        {
            img: require('../Assets/Images/landscape-2389023_1920.jpg'),
            name: 'Guatemala',
            url: '/realisation'
        },
        {
            img: require('../Assets/Images/earth-608344-unsplash.jpg'),
            name: 'Bélize',
            url: '/realisation'
        }
    ];
}