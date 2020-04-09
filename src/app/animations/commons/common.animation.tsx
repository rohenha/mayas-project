import { TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const CommonAnimation: IAnimation = {
    duration: 1,
    elements: {},
    enter(node: any, duration: number, delay: number): void {
        const tlIn = new TimelineMax();
        console.log('animation');
        tlIn.delay(delay);
        tlIn.set(node, {
            autoAlpha: 0,
            opacity: 0,
            position: "fixed",
            x: 100,
            zIndex: 1
        });
        tlIn.to(node, duration, {
            autoAlpha: 1,
            opacity: 1,
            x: 0,
        });
        tlIn.set(node, { zIndex: 3, clearProps: "position, width" });
    },
    exit(node: any, duration: number): void {
        const tlOut = new TimelineMax();
        tlOut.set(node, {
            autoAlpha: 1,
            left: 0,
            opacity: 1,
            position: "fixed",
            top: 0,
            x: 0,
            zIndex: 3
        });
        tlOut.to(node, duration, {
            autoAlpha: 0,
            opacity: 0,
            x: -100,
        });
        // tlOut.set(node, { clearProps: "position, width" });
    },

    setElements(node: any): void {
      console.log('hello world', node);
    }

}
