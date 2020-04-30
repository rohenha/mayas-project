/* tslint:disable:no-string-literal */
import { TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const CommonAnimation: IAnimation = {
    duration: {
      enter: 1,
      leave: 1
    },
    elements: {},
    enter(node: HTMLElement, delay: number): void {
        const tlIn: TimelineMax = new TimelineMax();
        tlIn.delay(delay);
        TweenMax.set(node, {
            autoAlpha: 0,
            opacity: 0,
            x: 100,
        });
        tlIn.to(node, 1, {
            autoAlpha: 1,
            opacity: 1,
            x: 0
        });
    },

    exit(node: HTMLElement): void {
        const tlOut: TimelineMax = new TimelineMax();
        tlOut
          .to(node, 1, {
              autoAlpha: 0,
              opacity: 0,
              x: -100
          });
    },

    setElements(node: HTMLElement): any {
      const elements: any = {};
      elements['node'] = node;
      return elements;
    }

}
