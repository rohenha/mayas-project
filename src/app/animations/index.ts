// export * from './page1.Animations';
// export * from './page2.Animations';

// Imports
import { IAnimArray } from 'Interfaces';

// Components
import { CommonAnimation } from './commons/common.animation';

import { CodexAnimation } from './Components/codex.animation';
import { QuestionAnimation } from './Components/question.animation';

import { AccueilAnimation } from './Pages/accueil.animation';

const Animations: IAnimArray = {
    AccueilAnimation,
    CodexAnimation,
    CommonAnimation,
    QuestionAnimation
};

export default Animations;
