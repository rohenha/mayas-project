// Imports
import { TweenMax } from 'gsap';
import { IGalerieProps, IGalerieState } from 'Interfaces';
import * as React from 'react';

// Styles
import './galerie.component.sass';

// Components
import Animations from 'Animations';
import { ImageComponent, ImageTitleComponent } from 'Components';

export class GalerieComponent extends React.Component<IGalerieProps, IGalerieState> {
    public images: Array<{image: string, name: string, description: string, portrait: boolean}>;
    public toggleImage: () => any = this.openImage.bind(this);
    public node: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.images = [
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/forest-hd-wallpaper-jungle-58557.jpg'),
                name: 'Image 1',
                portrait: false
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/forest-hd-wallpaper-jungle-58557.jpg'),
                name: 'Image 1',
                portrait: false
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/forest-hd-wallpaper-jungle-58557.jpg'),
                name: 'Image 1',
                portrait: false
            },
            {
                description: '',
                image: null,
                name: 'Lorem ipsum dolor sit amet consectetur',
                portrait: false
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/forest-hd-wallpaper-jungle-58557.jpg'),
                name: 'Image 1',
                portrait: false
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque, nisi laborum minima deserunt cupiditate repellendus sunt ipsam perferendis voluptas tempora sed. Quo praesentium architecto aspernatur adipisci illo sunt nobis!',
                image: require('../../../assets/images/bernard-hermant-669688-unsplash.jpg'),
                name: 'Image 1',
                portrait: true
            },
        ];
        this.state = {
            imageOpen: -1
        };
        this.node = React.createRef();
    }

    public openImage(element: number): void {
        const newEl = element !== this.state.imageOpen || element !== -1 ? element : -1;
        element === -1 ? this.exitImage(this.node.current) : this.enterImage(this.node.current);
        this.setState({ imageOpen: newEl });
    }

    public enterImage(node: any): void {
        TweenMax.killTweensOf(node);
        Animations.CodexAnimation.enter( node, Animations.CodexAnimation.duration, 0 );
    }

    public exitImage(node: any): void {
        TweenMax.killTweensOf(node);
        Animations.CodexAnimation.exit(node, Animations.CodexAnimation.duration);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="galerie">
                <div className="galerie__container">
                    {this.images.map((image, index: number) => {
                        return image.image === null ?
                            <ImageTitleComponent key={index} title={image.name} />
                            :
                            <ImageComponent key={index} image={image.image} index={index} toggleImage={this.toggleImage} open={this.state.imageOpen === index} portrait={image.portrait} />
                        }
                    )}
                    <div className="galerie__details" ref={this.node}>
                        <div className="galerie__details-container">
                            <h1>{this.state.imageOpen > -1 ? this.images[this.state.imageOpen].name : ''}  <div className="galerie__details-cross cross" onClick={this.openImage.bind(this, -1)} /></h1>
                            <p>{this.state.imageOpen > -1 ? this.images[this.state.imageOpen].description : ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
