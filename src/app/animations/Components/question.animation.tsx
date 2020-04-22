import { TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const QuestionAnimation: IAnimation = {
    duration: {
      enter: 1,
      leave: 1
    },
    elements: {},
    enter(node: any, delay: number): void {
        const tlIn = new TimelineMax();
        tlIn.delay(delay);
        tlIn.set(node, {
            display: 'none'
        });
        tlIn.to(node, 1, {
            display: 'block'
        });
    },
    exit(node: any): void {
        const tlOut = new TimelineMax();
        tlOut.set(node, {
            display: 'block'
        });
        tlOut.to(node, 1, {
            display: 'none'
        });
    },

    setElements(node: any): void {
      console.log('hello world', node);
    }

}
