import { TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const QuestionAnimation: IAnimation = {
    duration: {
      enter: 1,
      leave: 1
    },
    elements: {},
    enter(node: HTMLElement, delay: number): void {
        const tlIn = new TimelineMax();
        tlIn.delay(delay);
        TweenMax.set(node, {
            display: 'none'
        });
        tlIn.to(node, 1, {
            display: 'block'
        });
    },
    exit(node: HTMLElement): void {
        const tlOut = new TimelineMax();
        tlOut.to(node, 1, {
            display: 'none'
        });
    },

    setElements(node: HTMLElement): any {
      console.log('hello world', node);
    }

}
