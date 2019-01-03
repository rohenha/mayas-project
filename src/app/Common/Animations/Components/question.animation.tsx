import { TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const QuestionAnimation: IAnimation = {
    duration: 1,
    enter(node: any, duration: number, delay: number): void {
        const tlIn = new TimelineMax();
        tlIn.delay(delay);
        tlIn.set(node, {
            autoAlpha: 0,
            maxHeight: 0,
            opacity: 0,
        });
        tlIn.to(node, duration, {
            autoAlpha: 1,
            maxHeight: 500,
            opacity: 1,
        });
        tlIn.set(node, { clearProps: "position, width" });
    },
    exit(node: any, duration: number): void {
        const tlOut = new TimelineMax();
        tlOut.set(node, {
            autoAlpha: 1,
            maxHeight: 500,
            opacity: 1,
        });
        tlOut.to(node, duration, {
            autoAlpha: 0,
            maxHeight: 0,
            opacity: 0,
        });
        tlOut.set(node, { clearProps: "position, width" });
    }
}