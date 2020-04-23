import { Power1, TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const AccueilAnimation: IAnimation  = {
    duration: {
      enter: 3.5,
      leave: 2.7
    },
    elements: {},
    enter(node: any, delay: number): void {
        const tlIn = new TimelineMax();
        const elements = this.setElements(node);
        tlIn.delay(delay);
        TweenMax.set(elements.bg, { autoAlpha: 0, opacity: 0, scaleX: 1.5, scaleY:1.5 });
        TweenMax.set(elements.container.querySelectorAll('h3, p, h1, h2, .form-range__input'), { autoAlpha: 0, opacity: 0, y: 50 });

        tlIn
          .to(elements.bg, 2, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1 })
          .to(elements.bg, 5, { ease: Power1.easeInOut, scaleX: 1, scaleY: 1}, "-=1.5")
          .staggerTo(elements.introduceElements, 0.7, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, y:0 }, 0.15, "-=3")
          .staggerTo(elements.titleElements, 0.7, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, y: 0 }, 0.15, "-=2")
          .staggerTo(elements.formEnterElements, 0.5, { ease: Power1.easeInOut,  autoAlpha: 1, opacity: 1, y: 0 }, 0.25, '-=0.2')
          .staggerTo(elements.realisationElements, 0.4, { ease: Power1.easeInOut,autoAlpha: 1, opacity: 1, y: 0 }, 0.1, '-=0.1');
    },

    exit(node: any): void {
        const tlOut = new TimelineMax();
        const elements = this.setElements(node);
        tlOut
          .to(elements.container, 0.7, { ease: Power1.easeInOut, autoAlpha: 0, opacity: 0, x: 50 })
          .to(elements.bg, 2, { autoAlpha: 0, opacity: 0, scaleX: 1.5, scaleY: 1.5 });
    },

    setElements(node: any): void {
      const elements: any = {};
      elements.node = node;
      elements.bg = elements.node.querySelector('.js-bg');
      elements.container = elements.node.querySelector('.js-container');
      elements.introduce = elements.node.querySelector('.js-introduce');
      elements.introduceElements = elements.introduce.querySelectorAll('h3, p');
      elements.title = elements.node.querySelector('.js-title');
      elements.titleElements = elements.title.querySelectorAll('h1, h2');
      elements.formEnter = elements.node.querySelector('.js-form-enter');
      elements.formEnterElements = elements.formEnter.querySelectorAll('.form-range__input, p');
      elements.realisation = elements.node.querySelector('.js-realisation');
      elements.realisationElements = elements.realisation.querySelectorAll('p');
      return elements;
    }

}
