// export * from './page1.Animations';
// export * from './page2.Animations';

// Imports
import { IAnimArray } from 'Interfaces';

// Components
import { P404Animation } from './commons/404.animation';
import { CommonAnimation } from './commons/common.animation';

import { CodexAnimation } from './Components/codex.animation';
import { DetailsAnimation } from './Components/details.animation';
import { QuestionAnimation } from './Components/question.animation';
import { QuizAnimation } from './Components/quiz.animation';

import { AccueilAnimation } from './Pages/accueil.animation';
import { ContactAnimation } from './Pages/contact.animation';
import { IntroductionAnimation } from './Pages/introduction.animation';
import { PartenairesAnimation } from './Pages/partenaires.animation';
import { PaysAnimation } from './Pages/pays.animation';
import { RealisationAnimation } from './Pages/realisation.animation';
import { VieAnimation } from './Pages/vie.animation';


const Animations: IAnimArray = {
    AccueilAnimation,
    CodexAnimation,
    CommonAnimation,
    ContactAnimation,
    DetailsAnimation,
    IntroductionAnimation,
    P404Animation,
    PartenairesAnimation,
    PaysAnimation,
    QuestionAnimation,
    QuizAnimation,
    RealisationAnimation,
    VieAnimation
};

export default Animations;