import { Power1, TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const GalerieImageAnimation: IAnimation = {
    duration: {
      enter: 0.5,
      leave: 1
    },
    elements: {},
    enter(node: HTMLElement, delay: number): void {
        const tlIn: TimelineMax = new TimelineMax();
        const nodeDetails: any = node.getBoundingClientRect();
        const scale: number = nodeDetails.width > nodeDetails.height ? (window.innerWidth / 2) / (nodeDetails.width - 30) : (window.innerHeight * (2 / 3)) / nodeDetails.width;
        const xPos: number = (window.innerWidth - nodeDetails.width * scale / 2) - (nodeDetails.left + (nodeDetails.width / 2));
        const yPos: number = ((window.innerHeight / 2) - (nodeDetails.top + nodeDetails.height / 2));
        TweenMax.set(node, {zIndex: 5});
        tlIn.to(node, 0.5, { ease: Power1.easeInOut, x: xPos, y: yPos, scaleX: scale, scaleY: scale, rotateX: 0, rotateY:0 });
    },

    exit(node: HTMLElement): void {
        const tlOut: TimelineMax = new TimelineMax();
        tlOut
          .to(node, 0.5, { ease: Power1.easeInOut, x: 0, y: 0, scaleX: 1, scaleY: 1, rotateX: 0, rotateY: 0})
          .set(node, {zIndex: 1});
    },

    setElements(node: HTMLElement): any {
      this.elements.node = node;
    }
};
