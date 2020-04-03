import { Power1, TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const CodexAnimation: IAnimation = {
    duration: 1,
    elements: {},
    enter(node: any, duration: number, delay: number): void {
        const tlIn = new TimelineMax();
        this.setElements(node);
        tlIn.delay(delay);
        tlIn
          .set(this.elements.bg, { autoAlpha: 0, opacity: 0 })
          .set(this.elements.home, { autoAlpha: 0, opacity: 0, x: 50 })
          .set(this.elements.node, { autoAlpha: 1, opacity: 1 });

        tlIn
          .to(this.elements.bg, 0.3, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1 })
          .to(this.elements.home, 0.5, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, x: 0 }, '-=0.1');
    },

    exit(node: any, duration: number): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(this.elements.node, 1, { autoAlpha: 0, opacity: 0 });
    },

    setElements(node: any): void {
      this.elements.node = node;
      this.elements.bg = this.elements.node.querySelector('.js-bg');
      this.elements.home = this.elements.node.querySelector('.js-home');
    }

}
