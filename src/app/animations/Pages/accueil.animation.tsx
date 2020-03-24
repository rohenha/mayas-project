import { Power1, TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const AccueilAnimation: IAnimation  = {
    duration: 2.3,
    enter(node: any, duration: number, delay: number): void {
        const tlIn = new TimelineMax();
        tlIn.delay(delay);
        tlIn
        .set(node.getElementsByClassName('bg')[0], { autoAlpha: 0, opacity: 0, scaleX: 1.5, scaleY:1.5, position:"fixed" })
        .set(node.querySelectorAll('h1, h2, h3, h4, .container__range, .formEnter p'), { autoAlpha: 0, opacity: 0, y: 50 })
        .set(node.querySelectorAll('.container__range, .formEnter p'), { y: 20 })
        .set(node.querySelectorAll('.accueil__realisation p'), { autoAlpha: 0, opacity: 0, x:-20 });

        tlIn
            .to(node.getElementsByClassName('bg')[0], 2, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1 })
            .to(node.getElementsByClassName('bg')[0], 5, { ease: Power1.easeInOut, scaleX: 1, scaleY: 1}, "-=1.5")
        .staggerTo(node.querySelectorAll('h3, h4'), 0.7, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, y:0 }, 0.15, "-=3")
        .staggerTo(node.querySelectorAll('h1, h2'), 0.7, { ease: Power1.easeInOut, autoAlpha: 1, opacity: 1, y: 0 }, 0.15, "-=2")
        .staggerTo(node.querySelectorAll('.container__range, .formEnter p'), 0.5, { ease: Power1.easeInOut,  autoAlpha: 1, opacity: 1, y: 0 }, 0.25, '-=0.2')
        .staggerTo(node.querySelectorAll('.accueil__realisation p'), 0.4, { ease: Power1.easeInOut,autoAlpha: 1, opacity: 1, x: 0 }, 0.1, '-=0.1')
        .set(node.getElementsByClassName('bg')[0], { clearProps: "position" });
    },
    exit(node: any, duration: number): void {
        const tlOut = new TimelineMax();
        tlOut
        .set(node.getElementsByClassName('bg')[0], { autoAlpha: 1, opacity: 1, position: "fixed" })
        .set(node.querySelectorAll('.container'), { autoAlpha: 1, opacity: 1, position: "fixed" });

        tlOut
        .to(node.querySelectorAll('.container'), 0.7, { ease: Power1.easeInOut, autoAlpha: 0, opacity: 0, x: 50 })
        .to(node.getElementsByClassName('bg')[0], 2, { autoAlpha: 0, opacity: 0, scaleX: 1.5, scaleY: 1.5 })
        .set(node.getElementsByClassName('bg')[0], { clearProps: "position" });
    }
}