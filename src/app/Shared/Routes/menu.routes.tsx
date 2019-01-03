import { IPath } from 'Interfaces';
import { 
    // PageAccueil,
    // PageContact,
    PagePartenaires,
    PageRealisation
} from 'Pages';

export const MenuRoutes: IPath[] = [
    // {
    //     component: PageAccueil,
    //     exact: true,
    //     name: 'Accueil',
    //     path: "/",
    // },
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
];

export default MenuRoutes;