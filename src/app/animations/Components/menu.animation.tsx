import { TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const MenuAnimation: IAnimation = {
    duration: 1,
    elements: {},
    enter(node: any, duration: number, delay: number): void {
        const tlIn = new TimelineMax();
        this.setElements(node);
        tlIn.delay(delay);
        tlIn.to(this.elements.node, duration, {
              autoAlpha: 1,
              opacity: 1,
              x: 0,
          });
    },
    exit(node: any, duration: number): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(this.elements.node, this.duration, {
              autoAlpha: 0,
              opacity: 0,
              x: -100,
          });
    },

    setElements(node: any): void {
      this.elements.node = node;
    }

}
