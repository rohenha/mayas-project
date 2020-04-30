import { Power1, TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const CodexDefinitionAnimation: IAnimation = {
    duration: {
      enter: 0.5,
      leave: 1
    },
    elements: {},
    enter(node: HTMLElement, delay: number): void {
        const tlIn: TimelineMax = new TimelineMax();
        tlIn.delay(delay);
        TweenMax.set(node, { autoAlpha: 0, opacity: 0, x: 50 })
        tlIn
          .to(node, 0.5, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, x: 0 });
    },

    exit(node: HTMLElement): void {
        const tlOut: TimelineMax = new TimelineMax();
        tlOut
          .to(node, 1, { autoAlpha: 0, opacity: 0, x: 50 });
    },

    setElements(node: HTMLElement): any {
      this.elements.node = node;
    }

}
