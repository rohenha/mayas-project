import { TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const QuestionAnimation: IAnimation = {
    duration: 1,
    elements: {},
    enter(node: any, duration: number, delay: number): void {
        const tlIn = new TimelineMax();
        tlIn.delay(delay);
        tlIn.set(node, {
            display: 'none'
        });
        tlIn.to(node, duration, {
            display: 'block'
        });
    },
    exit(node: any, duration: number): void {
        const tlOut = new TimelineMax();
        tlOut.set(node, {
            display: 'block'
        });
        tlOut.to(node, duration, {
            display: 'none'
        });
    },

    setElements(node: any): void {
      console.log('hello world', node);
    }

}
