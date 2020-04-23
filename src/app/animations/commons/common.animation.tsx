import { TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const CommonAnimation: IAnimation = {
    duration: {
      enter: 1,
      leave: 1
    },
    elements: {},
    enter(node: any, delay: number): void {
        const tlIn = new TimelineMax();
        this.setElements(node);
        tlIn.delay(delay);
        TweenMax.set(this.elements.node, {
            autoAlpha: 0,
            opacity: 0,
            // x: 100,
        });
        tlIn.to(this.elements.node, 1, {
            autoAlpha: 1,
            opacity: 1,
            // x: 0
        });
    },
    exit(node: any): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(this.elements.node, 1, {
              autoAlpha: 0,
              opacity: 0,
              // x: -100,
          });
    },

    setElements(node: any): void {
      this.elements.node = node;
    }

}
