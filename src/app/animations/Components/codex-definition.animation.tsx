import { Power1, TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const CodexDefinitionAnimation: IAnimation = {
    duration: {
      enter: 0.5,
      leave: 1
    },
    elements: {},
    enter(node: any, delay: number): void {
        const tlIn = new TimelineMax();
        this.setElements(node);
        tlIn.delay(delay);
        tlIn
          .set(this.elements.node, { autoAlpha: 0, opacity: 0, x: 50 })
          .to(this.elements.node, 0.5, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, x: 0 });
    },

    exit(node: any): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(this.elements.node, 1, { autoAlpha: 0, opacity: 0, x: 50 });
    },

    setElements(node: any): void {
      this.elements.node = node;
    }

}
