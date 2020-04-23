import { Power1, TimelineMax, TweenMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const GalerieImageAnimation: IAnimation = {
    duration: {
      enter: 0.5,
      leave: 1
    },
    elements: {},
    enter(node: any, delay: number): void {
        const tlIn = new TimelineMax();
        const nodeDetails = node.getBoundingClientRect();
        const scale = nodeDetails.width > nodeDetails.height ? (window.innerWidth / 2) / (nodeDetails.width - 30) : (window.innerHeight * (2 / 3)) / nodeDetails.width;
        const xPos = (window.innerWidth - nodeDetails.width * scale / 2) - (nodeDetails.left + (nodeDetails.width / 2));
        const yPos = ((window.innerHeight / 2) - (nodeDetails.top + nodeDetails.height / 2));
        TweenMax.set(node, {zIndex: 5});
        tlIn.to(node, 0.5, { ease: Power1.easeInOut, x: xPos, y: yPos, scaleX: scale, scaleY: scale, rotateX: 0, rotateY:0 });
    },

    exit(node: any): void {
        const tlOut = new TimelineMax();
        tlOut
          .to(node, 0.5, { ease: Power1.easeInOut, x: 0, y: 0, scaleX: 1, scaleY: 1, rotateX: 0, rotateY: 0})
          .set(node, {zIndex: 1});
    },

    setElements(node: any): void {
      this.elements.node = node;
    }
};
