import { IPath } from 'Interfaces';
import {
    Page404,
    PageAccueil,
    // PageContact,
    PageIntroduction,
    PageOrigines,
    PagePartenaires,
    PagePays,
    PageRealisation,
    PageSoon,
    PageVie,
    StyleGuideCitation,
    StyleGuideContent,
    StyleGuideDocSound,
    StyleGuideGalerie,
    StyleGuideLoader,
    StyleGuideMultiplePaths,
    StyleGuidePreloader,
    StyleGuideQuiz,
    StyleGuideVideo,
} from 'Pages';

export const AppRoutes: IPath[] = [
    {
        component: PageAccueil,
        exact: true,
        name: 'Accueil',
        path: "/exp",
    },
    {
        component: PageSoon,
        exact: true,
        name: 'Soon',
        path: "/",
    },
    {
        component: PageRealisation,
        exact: true,
        name: 'Realisation',
        path: "/realisation",
    },
    {
        component: PagePartenaires,
        exact: true,
        name: 'Partenaires',
        path: "/partenaires",
    },
    // {
    //     component: PageContact,
    //     exact: true,
    //     name: 'Contact',
    //     path: "/contact",
    // },
    {
        component: PageIntroduction,
        exact: true,
        name: 'Introduction',
        path: "/introduction",
    },
    {
        component: PageOrigines,
        exact: true,
        name: 'Origines',
        path: "/origines",
    },
    {
        component: PagePays,
        exact: true,
        name: 'Pays',
        path: "/pays",
    },
    {
        component: PageVie,
        exact: true,
        name: 'Vie',
        path: "/vie",
    },
    {
        component: StyleGuideCitation,
        exact: true,
        name: 'Citation',
        path: "/styleguide/citation",
    },
    {
        component: StyleGuideQuiz,
        exact: true,
        name: 'Quiz',
        path: "/styleguide/quiz",
    },
    {
        component: StyleGuideVideo,
        exact: true,
        name: 'Video',
        path: "/styleguide/video",
    },
    {
        component: StyleGuideMultiplePaths,
        exact: true,
        name: 'MultiplePaths',
        path: "/styleguide/paths",
    },
    {
        component: StyleGuideContent,
        exact: true,
        name: 'Content',
        path: "/styleguide/content",
    },
    {
        component: StyleGuidePreloader,
        exact: true,
        name: 'Preloader',
        path: "/styleguide/preloader",
    },
    {
        component: StyleGuideLoader,
        exact: true,
        name: 'Loader',
        path: "/styleguide/loader",
    },
    {
        component: StyleGuideGalerie,
        exact: true,
        name: 'Galerie',
        path: "/styleguide/galerie",
    },
    {
        component: StyleGuideDocSound,
        exact: true,
        name: 'DocSound',
        path: "/styleguide/docsound",
    },
    {
        component: Page404,
        exact: true,
        name: 'P404',
        path: "/404",
    }
];

export default AppRoutes;
