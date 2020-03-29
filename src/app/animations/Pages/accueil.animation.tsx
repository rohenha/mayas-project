import { Power1, TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const AccueilAnimation: IAnimation  = {
    duration: 2.3,
    elements: {},
    enter(node: any, duration: number, delay: number): void {
        const tlIn = new TimelineMax();
        this.setElements(node);
        tlIn.delay(delay);
        tlIn
          .set(this.elements.bg, { autoAlpha: 0, opacity: 0, scaleX: 1.5, scaleY:1.5 })
          .set(this.elements.container.querySelectorAll('h3, p, h1, h2, .container__range'), { autoAlpha: 0, opacity: 0, y: 50 })

        tlIn
          .to(this.elements.bg, 2, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1 })
          .to(this.elements.bg, 5, { ease: Power1.easeInOut, scaleX: 1, scaleY: 1}, "-=1.5")
          .staggerTo(this.elements.introduceElements, 0.7, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, y:0 }, 0.15, "-=3")
          .staggerTo(this.elements.titleElements, 0.7, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, y: 0 }, 0.15, "-=2")
          .staggerTo(this.elements.formEnterElements, 0.5, { ease: Power1.easeInOut,  autoAlpha: 1, opacity: 1, y: 0 }, 0.25, '-=0.2')
          .staggerTo(this.elements.realisationElements, 0.4, { ease: Power1.easeInOut,autoAlpha: 1, opacity: 1, y: 0 }, 0.1, '-=0.1');
    },

    exit(node: any, duration: number): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(this.elements.container, 0.7, { ease: Power1.easeInOut, autoAlpha: 0, opacity: 0, x: 50 })
          .to(this.elements.bg, 2, { autoAlpha: 0, opacity: 0, scaleX: 1.5, scaleY: 1.5 });
    },

    setElements(node: any): void {
      this.elements.node = node;
      this.elements.bg = this.elements.node.querySelector('.js-bg');
      this.elements.container = this.elements.node.querySelector('.js-container');
      this.elements.introduce = this.elements.node.querySelector('.js-introduce');
      this.elements.introduceElements = this.elements.introduce.querySelectorAll('h3, p');
      this.elements.title = this.elements.node.querySelector('.js-title');
      this.elements.titleElements = this.elements.title.querySelectorAll('h1, h2');
      this.elements.formEnter = this.elements.node.querySelector('.js-form-enter');
      this.elements.formEnterElements = this.elements.formEnter.querySelectorAll('.container__range, p');
      this.elements.realisation = this.elements.node.querySelector('.js-realisation');
      this.elements.realisationElements = this.elements.realisation.querySelectorAll('p');
    }

}
