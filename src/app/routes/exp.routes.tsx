import { IPathMenu } from 'Interfaces';
import {
    PageIntroduction,
    PagePays,
    StyleGuideContent,
    StyleGuideGalerie,
    StyleGuideQuiz,
} from 'Pages';

import { 
    GalerieContent,
    IntroductionContent,
    OriginesContent,
    PaysContent,
    VieContent
 } from 'Content';

export const ExpRoutes: IPathMenu[] = [
    {
        component: PageIntroduction,
        content: IntroductionContent,
    },
    {
        component: PagePays,
        content: PaysContent,
    },
    {
        component: StyleGuideContent,
        content: OriginesContent,
    },
    {
        component: StyleGuideGalerie,
        content: GalerieContent,
    },
    {
        component: StyleGuideQuiz,
        content: VieContent,
    },
];

export default ExpRoutes;