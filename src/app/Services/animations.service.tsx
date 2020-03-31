import Animations from 'Animations';
import { TweenMax } from 'gsap';

export class AnimationsService {

    public toggleAnimation(node: any, animationName: string, state: string): void {
      const animation = Animations[animationName];
      TweenMax.killTweensOf(node);
      animation[state](
          node.current,
          animation.duration,
          0
      );
    };

}
