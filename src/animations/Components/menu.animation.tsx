import { TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const MenuAnimation: IAnimation = {
    duration: {
      enter: 1,
      leave: 1
    },
    elements: {},
    enter(node: HTMLElement, delay: number): void {
        const tlIn = new TimelineMax();
        tlIn.delay(delay);
        tlIn.to(node, 1, {
              autoAlpha: 1,
              opacity: 1,
              x: 0,
          });
    },
    exit(node: HTMLElement): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(node, 1, {
              autoAlpha: 0,
              opacity: 0,
              x: -100,
          });
    },

    setElements(node: HTMLElement): any {
      this.elements.node = node;
    }

}
