/* tslint:disable:no-string-literal */
import { Power1, TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const CodexAnimation: IAnimation = {
    duration: {
      enter: 0.8,
      leave: 1
    },
    elements: {},
    enter(node: any, delay: number): void {
        const tlIn = new TimelineMax();
        const elements = this.setElements(node);
        tlIn.delay(delay);
        TweenMax.set(elements.bg, { autoAlpha: 0, opacity: 0 })
        TweenMax.set(elements.home, { autoAlpha: 0, opacity: 0, x: 50 })
        TweenMax.set(elements.node, { autoAlpha: 1, opacity: 1 });

        tlIn
          .to(elements.bg, 0.3, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1 })
          .to(elements.home, 0.5, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, x: 0 }, '-=0.1');
    },

    exit(node: any): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(node, 1, { autoAlpha: 0, opacity: 0 });
    },

    setElements(node: any): void {
      const elements: any = {};
      elements.node = node;
      elements.bg = elements.node.querySelector('.js-bg');
      elements.home = elements.node.querySelector('.js-home');
      return elements;
    }

}
