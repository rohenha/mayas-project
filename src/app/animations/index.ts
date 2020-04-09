// export * from './page1.Animations';
// export * from './page2.Animations';

// Imports
import { IAnimArray } from 'Interfaces';

// Commons
import { CommonAnimation } from './commons/common.animation';

// Components
import { CodexDefinitionAnimation } from './Components/codex-definition.animation';
import { CodexAnimation } from './Components/codex.animation';
import { GalerieImageAnimation } from './Components/galerie-image.animation';
import { QuestionAnimation } from './Components/question.animation';

import { AccueilAnimation } from './Pages/accueil.animation';

const Animations: IAnimArray = {
    AccueilAnimation,
    CodexAnimation,
    CodexDefinitionAnimation,
    CommonAnimation,
    GalerieImageAnimation,
    QuestionAnimation,
};

export default Animations;
