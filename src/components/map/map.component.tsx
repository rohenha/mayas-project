// Imports
import { IMapProps, IMapState } from 'Interfaces';
import * as React from 'react';
// import { ReactSVG } from 'react-svg'


// Styles
import './map.component.sass';

// Components
import { ThemeContext } from 'Providers';
// Content

// Services

export class MapComponent extends React.Component<IMapProps, IMapState> {
    public static contextType = ThemeContext;
    public lengthPath: number = 1040;
    public onRenderRoute: () => any = this.renderRoute.bind(this);
    constructor(props: any) {
        super(props);
    }

    public renderRoute(route: any, index: number): any {
      if (route.isExperience && route.hasParent === '') {
        return <circle key={index} className={this.context.page === route || route.chapter < this.context.page.chapter ? "section_map__chapter active" : "section_map__chapter"} cx={route.point.x} cy={route.point.y} r="6.1"/>;
      }
    };

    public render(): React.ReactElement<any> {
        return (
            <div className="section_map" >
              <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 761.1 497.5">
                <path className="section_map__container" d="M343.9,107.5l-1.2-0.6l-0.5-0.8l-0.6,0.1l0.1-0.5l-2.1-2.1h-2.3l-0.3-0.4l-1.5-0.3l-1-1.4l-0.4,0.3l-0.2-1.3
                  l-0.4,0.2l-1.4-0.6l-3-0.4l-2-0.9l-1.4-1.3l-1.4-0.6l-1.2-1.7l0.1-0.6l-0.6-0.2l-0.1-0.4l-2-1l-0.5,0.3l-1.1-0.6l-0.4-0.8l-3.5-2.7
                  l-1.3-3.9l-1.1-1.9l-1.1-0.9l-0.3-1.1l0.3-0.4l-0.4-0.7v-1.1l-0.4-0.2l0.5-2.1l-0.3-1l0.2-1.5l-0.5-1.6l-1.4-1.1l0.1-0.5l-1.5-1.6
                  l0.2-0.3l-1.1-0.7l0.2-0.8l-0.5-0.8v-1.5l-0.8-2.1l-0.9-1l-1.1-0.4l-0.2-1.3L303,60l-0.9,0.1l-0.8-0.5l-0.8-1.3l-1.2-0.2l0.1-0.4
                  H299l-0.6-0.7l-0.4,0.2l-0.2-0.6l-0.9,0.2l-0.9-0.9l-0.3,0.4l-1.5-1l-1-0.2l0.2-0.5l-0.5-0.9l-1.9-1.2l-0.4-0.8l-1.2-0.6l-1.2-2.7
                  l-1.2-1l-1.5-0.6l-0.4-0.6l-1.3-0.5l-0.2-0.8l-2.2-2.7h-0.5l-0.4-0.7h-0.6l-0.6-1.5l-1.2-0.8l-1.8-0.2l-3.2-2l-1.1-2.4l-0.8-0.4
                  l-1.8-4l-0.9-1l-1-0.6l-1.6,0.1l-1-1.1h-42v13.2h-14.1l0,0l-57.7,0.1l-93.3-34h0.1l0.3-1.5l0.3-0.2L58,3.3l0.7-0.2l1.6-2.8L0,5.8
                  v1.3L2.1,13l0.5,0.6l2.1,0.7l0.5,0.8L6,17.9l0.1,3l1.2,1.2h1.2L9,22.5l0.4,1.8l1.2,0.2l0.6,0.8l1.3,0.3l0.4,0.6l-0.2,2.6l-1,1
                  L10,28.9L9.6,29l0.8,1l0.3-0.1l1.2,1.6l-0.5,1.2l0.4,0.9l-1,0.5l0.1,0.6l0.4-0.1l0.3,0.7l1.3,0.9l0.2,1l0.7-0.1l1.3,1l1.9,3.1
                  l2.1,2.2l1.4,2.7l-0.7,5.3l0.2,0.5l1.5-0.2l2.3,3h0.5l1.4,1.3l0.6,0.1l0.5,1l0.6,3.5L26.9,66l1.1,2l0.3-0.1l-0.6-1.3h0.5l0.5,0.7
                  l0.5-0.3l-0.5-1l0.2-0.4l0.8,0.8l-0.2,1.4l2.1,1.2l1.5,2.5v4.2l0.5,1.2L33,80.5l1.6,0.6l1.1,1.6l0.3,1.5l-0.2,2.5l1.9,1.6l0.9,0.1
                  l2,2.2l1.2-0.2l2,1.9h0.8l2.4,1.2l1.6,2.5l3.1,0.4l2.9,1.5l3.4,4.2h0.5l0.1,0.4l1.2,0.6l0.2,1.3l0.8,1l0.6-0.3l1.1,0.5l0.6,1.1
                  l0.5,2.7l0.2-0.3l0.7,0.4l0.5,1.1l0.2-0.3l1,0.1l1,0.7l0.2,0.6l0.5,0.1l0.6,1.9l0.9,0.5l0.5,1.2l-0.1,0.6l1.5,0.9l0.5,0.5v0.8
                  l2.2,0.1l0.4,0.4l0.1,2l1.6,0.6l1.3,2.2l-0.7,3.2l-1.3,2.9l0.5,0.5l0.9-0.5l0.4,1l-1.5,3l0.4,1.7l1.6,0.4l-0.8,1.4l-0.9-1.2l0.1,1.3
                  l0.1,0.1l-0.3,0.4l-0.4-0.4l-0.7-1.3v-0.5l0.8-0.8l-0.1-1l-0.6,0.2l-3.1,3.8l-0.2,0.8l0.3,0.7l0.8-0.9h0.7l0.8-0.4l-0.1-0.4l0.8-0.1
                  l0,0l-0.2,1.4l0.5,0.5L74,141l0.7,2l-0.6-0.5l-0.2,0.5l1.6,1.2l3.2-1.2l-0.2-1.1l1-1.9l1.8,1.4l-0.2,0.9l0.5,1.7l-0.3,0.6l0.6,0.5
                  l-0.2,0.4l-0.7-0.6l-0.1,1l1.6,1.6l-0.6,1.2l-0.9-0.1l-1.6-3l-2.1-0.7l-0.1,0.9l-1,1.1l-0.8-0.3v-0.4l-1.3-1.2l-1.3-0.4l-1.5-1.2
                  l-0.8-1.3l0.5-2.5l-0.9-0.3l-1.1,1.2h0.6l-0.1,0.6l-0.8,0.1l-0.6-0.3l-2.4,1.3l-0.6-0.4l-2.8,0.2l-1.6-0.3l-0.5-0.5l-1.6-0.3
                  l-1.4,0.2l-0.4-0.5l-1.5-0.2l-2.3,0.2l-1.1-0.9l-0.8,0.4l0.8,0.8l1.1,2.8l0.6-0.3l1,0.5l0.3,0.9l0.8,0.4l0.6-1l0.7,0.5l0.1,1
                  l1.7,1.2l1.2,2.2l3.3,1.2l2.3,1.9l0.5,1.6v3.5l0.2,0.4l0.5-0.1l0.6,0.4l-0.1,0.8l0.5,0.3l0.5-0.4l2.4,1.5l0.8-0.7l2,0.3l1.2,0.6
                  l1.1,0.8l1.1,2l1.3,1.3h0.4l0.2-0.5l0.5-0.2l2.2,0.6l1.8,1.3l1.6,3.7l1.6,0.4l0.7,1.4l0.8,0.5l0.8,0.3l0.7-0.4V171l0.6-0.3l0.4-1.2
                  l0.8-0.9l1.4-0.2l0.5,0.2l-0.1,0.4l-0.5-0.4l-0.2,0.5l1.5,0.3l2.1,1.3h0.4l-0.1-1.8l0.4-0.8l0.7,0.2l0.6-0.5l0.4-3.2l0.6-0.7
                  l0.8,2.8l-0.4,1.3l-1.5,1.6l-0.5-0.2l-0.3,0.3l1.5,0.7l0.4-1.1l0.9,2l1.7,2.1l-0.4,0.6l0.4,0.5l-0.2,0.2l2.3,2l0.7-0.2l1.1,0.3
                  l1.1,0.8l-0.1,0.2l-1.3-0.9l-1-0.1l3.6,3h0.6v0.4l2,1.4l0.8,1.2l0.7-0.3l0.7,0.3l3.2,2.3l0.5-0.1l0.2-0.7l1.6,0.4l1.6,1.9l0.9,2.8
                  l1.9,1.1l0.9,1.2l2,5.4l0.3,2.9l0.8,1.1l0.1,1.3l-0.1,2.4h-0.3l-0.3,1l0.2,1.1l0.4,0.3l-0.6,0.4l-0.1,1.2l0.5,0.1l-0.1,2.5l-0.7,0.1
                  l-0.3,1.8l-0.9,2l-0.2,1.9l0.9-0.1v1l-0.7,1.7l-0.8,0.5l0.6,1.4l-0.8,1.5l0.5,1.2h0.7v-2.5l0.4-0.5l-0.3-0.8l0.6-0.9l0.4,0.5
                  l-0.2,0.5l0.4,0.1l-0.4,0.7l0.3,0.2l-0.6,1l0.2,0.8l0.6,0.4l-0.1,0.8h-0.5l0.3,0.7l2,1l1.5,0.2l-0.1-0.4l0.7-0.3l0.6,0.5l-0.3,0.2
                  l2.2,2.4l0.7,2l-0.2,1.5h0.6l0.1-0.8l2.4,0.2l0.1-1.1l1,0.3l0.5,0.6l-0.3,0.1l1,3l0.6,0.1l-0.1,0.5l1.6,0.2l1.2,1.2l-0.1,0.3
                  l10.8,6.5l11.6,11.5l6.2,3.3l1.8,2.4l2.5,4.6l1.5,7.1l1.2,2.8l2.4,2h1.2l0.6-0.7h0.9l0.9-0.7l0.5-1l2.1-1.1V273l1.2-0.8l2.2-0.5
                  l1-0.7l1.9-2.3l0.6-1.3l0.5-4.4l-0.4-0.4l0.2-0.7l-1.4-2.1l0.3-0.8l-5.4-2.6l-0.4-0.5l-0.3-1.7l0.3-2l-3.2-3.2l-0.1-2l0.7-0.9
                  l-0.5-0.5V245l-2.6,0.9l-1.2-0.3l-0.7-3.2l-2.1-1.6l-2.1-1l-0.4-1.1l-1.1-0.6v-0.8l-1.6-0.2l-0.7,0.4l-0.3,1.1l0.9,2.2l-0.1,1
                  l-1.2,1v0.8l-1.7,0.1l-0.2-1.5l0.4-0.2l0.8,0.6l1.3-0.5l-0.1-0.3l-1.2,0.1l-4.3-1l-1.5-1.4l-0.7-1.6l-1.1-1.2l-0.1-2.9l-1.1-1.4
                  l-0.2-1l0.2-3.1l0.9-0.9l0.7-1.8l0.2-1.2l-0.7-2.1l-1.6-2.2l-0.2-1.3l-0.8-0.6l-0.5,0.1l-0.5-0.9l-0.9-0.5l-0.4-1.3l-0.7-0.5v-1
                  l-0.6-0.8l-0.4-1.5l0.3-0.2l-0.3-1.1l-0.8-0.8l-1.2-3.1l0.2-1.6l-2.6-0.3l-1.8-2.4l-0.8-3.1l-0.2,0.2l-1.8-1.5v-1L145,196l-0.1-1.9
                  l-0.5-0.6l-0.1-1l0.5-0.7l-0.1-1.4l0.6-0.9l-2-5.2l0.4-0.7l-0.1-1.1l-0.2-0.5l-0.7-0.3l-1.2-1.9v-1.2l0.6-1.6l-2.7-0.8l-0.4-0.6
                  l0.2-3.5l-2.2-1.4l-0.5-0.8l-1.3-0.9l-0.7-1.1l-1.9-1.4L132,167l0.7,1.6l0.2,2.9l3.5,3.6l-1.5,1.4l-1-0.8l-0.7-1.7l-1.1-0.7
                  l-0.3-1.2l-1.2-0.7l0.5-1.3l0.7-0.5l-0.3-1.4l-0.9-0.7V167l-0.9-0.5l-1.7-2.4l0.2-1.6l0.9-1h0.6l-0.2-0.7h-0.9l-0.5-0.6l-2.5-0.7
                  l-2.6-2.1l0.4-0.8l-1-2.2l-1.6-1.8l-0.7-3.7l-0.7-1l-1.6-1.1l-0.9-0.2l-0.5-0.6l-2.8-0.9l-1.2-1.7H112l-1.1-1.3l-0.4-2l-1.1-0.9
                  l0.3-2.1l-0.3-1l-0.9-0.6l0.4-1.2l-0.6-1.5l0.5-2l-2-2.8l0.6-2.6l-0.2-0.7l0.4-0.5L107,124l-0.8,0.2l-0.1-0.7l-0.5-0.4l-2.4,0.6
                  l-2.6-1.5l-0.6-3.5l-0.8-0.8l-1.4-4.5l-1.1-0.6l-1.3,1h-1.1l-0.4-1l-0.1-2.1l-0.5-0.1v-0.4l-0.6,0.1l-0.4-0.8l-0.5,0.4l-0.5-0.3
                  l-0.4,0.6l0.4,0.4l-0.5,0.7l-0.8-0.1l-0.8-1.7l0.3-0.2l-0.5-1.6l0.6-1.2l-0.8-1.6l-2.1-2.5v-0.5l0.7-0.8l-0.3-0.9L85.7,99l-2-2.5
                  l-1.4-0.7l-0.1-0.6l-1.5-0.8L78.8,92l-1.6-0.8L76.4,90l-0.9-0.5l-1-1.2l-0.3,0.1L73,86.9l-1.8-0.8L70.9,87l-1.2-0.1l-0.4-0.7
                  l-0.8-0.3l-0.5-1v-1.8l-0.6-0.9l-1-0.2l-0.3-0.9l-1.2-0.6l-1.7-4l-0.6-0.4l-1-2.1l0.6-2.2l-0.4-0.3l0.5-2l-0.2-0.8l0.4-1.3v-2.2
                  l-1.7-4l0.1-5.2l-0.6-3.5l-2.8-1.8V50l0.5-0.7L56.6,48L56,45.8l0.2-2.2L55.9,43l0.8-3.2l0.1-3.5l0.7-2.4l1.1-1.5l-0.9-4l0.5-1.7H59
                  l0.3,0.4l-0.7-0.4L58.2,27L58,28.4l0.4,1l0.9,0.9l1,0.5l0.7-0.1l0.8,0.7l0.3-0.7l-0.5-1.1l-1.3-0.9l-0.5-1l0.2,0.2l1.3,0.6l2.2,0.1
                  l2.4,2.3l0.8,0.2l0.4,0.6l2.9,1.6l1.4,1.6l3.1,1.4l2.8,0.1l0.4-1.2l0.7,0.1l0.7-1l-0.2-0.5l-0.3,0.1l0.2-0.6l0.6-0.7l0.8,0.5
                  l0.4-0.6l0.2,0.5l0.4-0.1l0.1,0.6l4.3,1.9l1.2,1l0.5,0.9l-0.1,0.8l0.6,1.6l-0.2,1.5l1.3,0.2l0.6,0.3l0.1,0.5l2.6,0.5l0.3-0.2
                  l0.2,0.3l3.9,0.9l0.8-0.7l0.6,1l2.3,1.4h0.5l0.2,0.8l0.3-0.1l0.5,2.8l-0.1,1.1l-0.7,1l-0.3-0.1l-0.1,3l-0.7,2.3l0.9,3.4l2.5,4.7
                  l2.4,2.1l1,2l0.1,3l1.9,1.9l0.5,1.4l-0.1,3.5l0.6,1.5l-0.3,2.5l0.2,0.3l0.6-0.2l1.2,0.6l0.3,1.6l1.1,1.6l0.7,1.9l0.9,0.7l1.7,2.8
                  l1,0.8l0.2,1.2l1,0.5l0.3,0.6l-1,2.8l0.2,1.1l1.7,0.9l0.8-0.4h1.3l0.6,0.6l0.6,1.8l-0.5,1.8l0.7,0.1l0.1,0.6l0.4,0.1l0.5,1.1l-0.5,1
                  l0.3,0.2l0.1,1.3l0.4,0.8l-0.6,0.7l1.9,0.6l0.3,0.7l1,0.8l0.4,1.1l1.2,0.3l1.3,1l0.3-0.2l0.5,0.7l0.5-0.4l0.6,0.5v0.8l-0.6,0.4
                  l-0.5-1.2l-0.5,0.6l-0.6,0.1l0.5,1.2l4,3.7l1.2,2.6l0.2,1.1l5.5,2l0.9,0.8l0.1,1.4l1.2,1.1h0.4l0.5,1.6l0.4-0.1l0.7,0.9l0.1,0.9
                  l1.1,1.2l0.2,0.9l0.7,0.8l1,0.3l0.9,1.3l1,0.3l1.5,1.4l1.3-0.8l1.3,0.3v0.7l0.6,0.1l-0.4,0.6l1,1l1.2,0.4l0.2-1l-0.6-0.9l1.6-0.9
                  l0.3,0.8l3.9,0.9l0.6,0.5l0.5-0.5l0.8,0.2l1,0.8l-0.3,0.5l-0.9-0.2l-0.4,0.8l0.2,0.8l-0.5,0.4l0.3,1.1l0.7,0.1l-0.7,0.3L163,146
                  l0.2-0.8l0.8,0.1l-1.4,1l-0.1,0.8l0.8,0.8l-0.2,0.4l0.6,1.2l-0.2,2.1l0.4,0.8h0.4l0.2,1.3l0.7,0.5l0.5-0.4l0.6,0.4l-0.1,1.3l0.4,0.9
                  l-0.3,0.2l1.4,0.7l3,3l5,1.2l1,0.7l1.1-1l0.4,0.4l0.3-0.4l1.7,1.4l0.3,1.6l-0.2,0.4l0.6,0.4l-0.2,0.9l-1-1.4l-0.2,0.2l1.3,1.9l1,2.8
                  v1l0.9,1.3l1.2,1l2.5,1l0.5-0.7l2.7,0.1l-0.4-0.8l0.7-1.1l0.4,0.1l0.1,0.6l0.6-0.2l0.4,0.8h0.6l0.4,0.9v0.4l-1.1-0.2l0.9,0.1l1.5,1
                  l2.3,2.6l1.3,2.5l-0.1,1l1.3,1.7l0.2-0.5h0.4l0,0v0.7l0.9,1.8l0.5,0.2l0.3-0.3l0.2,0.5l-0.8,0.6l0.4,1.1l-1.8-1.5l0.4-0.3l0.1-1
                  l-0.5-0.4l0,0l-0.4-0.6H198l-0.1,0.5l0,0l-0.2,1.7l-0.8,1.7l-0.3-0.5l-0.2,0.3l0.3,0.6l-0.4,1l-0.3,0.2l-0.4-0.5l0.6-2.7l0.9-0.3
                  l0.2-1l-0.2-0.1l-1,1.1l-0.7,2.4l-2.1,3.4v0.8H193l-0.7,2.1v0.7l0.5,0.2l0.3,1.1l-0.2,0.1l-0.2,2.7l0.4,0.7l1.1-0.3l1.6,1.3h0.5
                  l-0.1,2l-2-0.3l0.2,0.3l2.9,0.5l1.6,1l-0.1-0.8l-1.6-1.2l0.5-0.5l1.7,1.6l0.4,1.1l0.6,0.1l0.2-0.5l1.6,0.5l0.9-1.8l1-0.6h1.1
                  l0.3,1.3l-0.5,0.5l-0.7-0.2l-0.2,1l-0.9,0.4l-0.9-0.9v0.8l-0.4,0.4l-1.2,0.2l1.8,2.1l0.8-0.2L203,206l1.2-0.2l0.8,0.3l-0.2,0.4
                  l0.4,0.2l0.1,0.6l0.5-0.2l0.7-1.1l-0.5-0.3l0.2-0.7l-0.2-0.6l0.4-0.2l1.3,0.1l0.4,1l1.2-0.4l0.4,0.6l-0.7,1.3l1.5,2.3l1.3-0.3
                  l0.4,0.5l-0.5,0.6l5.4,2.7l1.9,2.1l0.4-0.6l-0.3-0.6l0.6-0.8l1.2,0.6l-0.1,1.1h1.6l0.3,0.8l1.9,1.7l0.9,0.2v-0.5l1.5,1l0.5,0.7
                  l0.3,1.9l1,0.7l-0.1,0.8l-0.5,0.6v0.5l0.7,0.3l-0.5,0.5l-0.1,0.9h0.3l0.2,0.8l0.6,0.5l-0.7,1.2l-1.2-1.2l-0.6,0.3l1.4,1.6l-0.1,1.1
                  l0.8,1.1l1.1,0.5l0.6-0.4l0.2,0.5l2.1,0.9l1.6,1.5l0.2,0.9l1,0.2l0.6-0.5l1.1,1.4l1.1-0.2l-0.1-1.4h1.3l1.5,2l0.3,1.2v0.4l-0.7,0.2
                  l-0.1,0.7l0.5,0.6l-0.5,0.1l-0.8-1.1l-0.6,0.1l-0.5-0.8l-1-0.1l-0.5-0.7l-3.1-1.7l-0.6-0.7l-0.2,0.6l4.6,2.9l5,4l1.4,0.3l3.8,3
                  l0.5-0.2l0.2-0.5l0.6,0.1l-0.1,0.8l0.5,0.3l-0.3,0.4l-0.9-0.2l7.5,7l0.2,1.2l2.2,3.4l-0.4,0.5l2.6,1.9l0.6,1.1l1.4,1.2l-0.1,0.3
                  l2.5,2.5l1.2,2l-0.3,0.4l0.9,1.7l0.7,0.5l-0.1,0.7l0.4,0.3l0.2-0.6l0.5-0.2l1.5,1.1l-0.1,0.3l-1.1-1.3l-0.4,0.3l4.7,4.6l4.2,5.2
                  l1.8,1.1l3,2.9l3.7,5.8l0.4-0.6l-0.5-1.7l0.6-1.7l-0.5-0.5l-0.5-1.9l0.5-0.7l0.7,0.6l-0.7,0.3l-0.2,0.6l1.5,1.6l-0.2,1h-0.1
                  l-0.3,0.2l0.6,2.1l-0.2,0.7l0.6,0.4l-0.2,0.8l0.3,0.6l0.2,3.4l0.5,1l-0.1,0.7l0.3,0.3l0.3-0.4l0.5,0.1l0.1,0.6l-0.4,0.4l0.2,0.6
                  l1-0.3l0.3,0.8l0.2-0.2l1,0.7l-0.3,1.5l-2-1l-0.3-0.8l-0.6-0.1l-0.5-1.2l-0.8,0.4l-0.2,3.2l0.7,2.7l3,5.1l1.4,3.6l4.7,3.2l0.9-0.3
                  l0.7,0.8l0.2,1.2l-1.4,2.7l0.7,2.8l-0.5,3.1l0.3,1l-1.1,1.6l-1-0.4l-0.2,0.8l-0.9,1.2l-1.2,0.8l-0.9,1.6l-0.4-0.1l-0.9,2.1l-0.8,0.6
                  l3,1l0.9-0.7l0.5,0.1l1.2,1.7l1.3,1.1l0.3,1L297,340l-1.5,1.1l-7.4,1.2l-1,1.1l-1,0.5l0.5,1.7l2.2,2.3l0.1,0.6l0.7,0.2l0.3,1.2
                  l-0.2,2.2l1.1,2.3l3.9,5.3l0.4,1.1l1.4,1.5l0.3,0.7l2.8,2.1v0.4h0.8l0.8,0.7l0.2,1.5l0.5,0.2l-0.1,0.8l0.8,0.5l0.4,0.7l-0.4,0.7
                  l1.9,1.7l2,1.1l0.9-0.2l0.2-0.4l0.9,0.3l0.1,0.5l-0.5,0.5v0.6l0.9-0.1l0.5,0.3l0.7-0.3l0.1,0.5l0.6-0.1l0.6,0.5l0.6,0.2l-0.2,0.3
                  l-0.6-0.4L311,376l4.5,1.2l1.8,0.7l0.2,0.6l1.8-0.9l1.1,0.6l0.5,0.5l-0.1,0.6h-0.5l-0.1,0.8l4,1.4l5.2,2.8l5.5,4.4l0,0l1.6,1.9
                  l-0.4,0.8l2.9,2.2l1.8,4.1l3.8,2.3l0.5-0.2l5,1.9l3.8,0.7l5.1,2.4l7.9,1.7l4,1.2l3,1.5l1.3-0.5L375,408l0,0l0.5,0.3l0.7-0.8l1.4-0.2
                  l2.2,0.7l3.8,2.1l1.4,2.4l1.9,1.3l0.8,1.9l1,0.4l0.1,0.5l2.2,0.3l0.8,0.6l0.9,1.1l-0.2,0.8l6.2,2.6l0.8,1l2.5,1.8l0.5,0.6l-0.1,0.6
                  l26.6,9.5l0.9,0.4l1.1,1.7l0.6-0.2l-0.2-0.4h1l0.2,0.4L432,438l1,0.3l1.8,1.5l2.1,1.1l1.6,0.5h4l3.1,0.6l10.6,3.2l1.3,0.2l0.3-0.6
                  l1.7-0.2l1.9,2.5l3.6,3.6l0,0l3.8,1.4l4.7,0.8l5.4,2.9l5.7,3.7l2.4,0.4l0.4-0.4l2.6,0.4l0.7-0.2l2.6,0.7l2-0.1l3.3,0.6l3.8,1.7
                  l0.3,0.8l0.8,0.5l2.4,0.8l1.5,1l4,0.6l3.5,1.5h1.6l1.9-1l4.5,0.3l3-1.4l-0.2-0.3l1.5-0.4v-0.3l2.7-1.3l3.8-1l1.3-0.8l2.4-0.3l2-0.9
                  l0.1-0.5h2l0.1-0.6l1.5,0.2l0.2-0.5l1.4-0.5l-0.2-0.8l0.3-0.5l2-0.9l0.2-1h0.6l0.5-0.5l2-0.2l0.2-0.6l1.8,0.2l4-0.7l3.6-0.1
                  l-0.1-0.3l-1.8-0.2h-6.4l0.4-0.8l0.6-0.1l-0.2-0.9l0.9-0.8h1.2l1.3-2.2l1.7-0.4l1.4,1l-0.2,0.6l1.1,0.9l-1.1,0.9l0.1,0.4l0.5,0.1
                  l0.3-0.6h1l0.4-0.8l1.3-0.9l2.4,0.8l-0.4,1.1l-0.7,0.6l-2.6,0.9l0.2,0.5l7.7,1.1l3,0.9l4.7,2.1l0.2-0.6l-3.1-2.3l-4.4-0.3l-1.1-1
                  v-0.6h0.7v-1l1.1-0.4l0.9,1.5h0.9l0.8,0.9l0.7-0.1l0.5,0.4l0.5,0.1l1.9-0.9v0.3l0,0l0.2,1.3l0.7,0.9l4.7,1l1.1,1.8l-0.1,0.5
                  l-0.6,0.3l-0.3-0.6l-0.8,0.1l-0.3,0.4l3.8,1.8l6.1,4.2l5.4,4.3l11.2,10.5l0.8,0.2l0.1,0.8l11,11.6l4.5,4.1l0.9-0.7l0.4-1.5l0.7-1.2
                  l-0.9-4.3l1-1.4l-0.1-2.5l0.3-0.7l0.8,0.1l1-1.6l-3.9-5l12.2-21.1l32.1,0.3l-0.3-1.4h0.6v-0.4l-0.6-0.3l0.7-0.4l-0.8-1.1l0.8-1.6
                  l-0.4-0.4l0.2-0.6h0.5l0.3-0.9l-0.3-0.5l0.4-0.3l-0.1-0.6l-0.4-0.6h-1.7l0.2-0.5l-0.5-0.7l-0.6,0.3l-0.6-0.6l-0.9,0.3l-0.4-0.5
                  l-0.8,0.3l-0.2-0.4l0.7-0.2l-0.1-0.5l-0.8,0.1l-0.3-3.2l-1.4-2.2l-2.1-1.2v-0.5l-1.1,0.1l-0.9-0.7h-1l-0.2-0.8l-1.1-0.4l-0.3,0.3
                  l-0.5-0.6l-1.3-0.4l-0.1-0.6l-1.4-1.4l-0.3-1l-1-0.2l-1.1-1.2l-0.3-1l-0.6-0.3l-0.5-0.7v-0.8l-0.9-0.3l-0.8,0.4l-1-1.1h-0.8l-0.6-1
                  l0.7-0.1l0,0l10.5-0.2l0.2-14.5l0,0h45.9v-3.3l0,0l1.3-1.2l1.8-0.4l1,1.2h1l0.6,1l0.9,0.4l0.9,1l-0.1-1.6l1.6-1.3l0.6-1.4l1.4-0.8
                  l1.2-2.9l1.1-1.4l0.5-2l1.1-1.1l0.9-3l0.9-0.8l1.2,0.3l1.1-0.4l0.2,0.3l2.3-0.1l3.2-5.9l-1,0.4v-0.2l1.1-0.4l2.3-3.6l0.8,0.3
                  l-0.2,0.9l0.7,0.6l0.4,1.4L729,389l0.5,0.5l-0.9,1.7l-0.3,2L727,394l1,1.2l2.6,0.8l-0.2,1l0.8,0.2l0.2,0.6l0.5,0.3l-0.4,1.5l0.4-0.1
                  l0.1,1l-0.6,0.4v0.7l0.6-0.1l0.7,0.5l0.6-3.3l1.4-2.3v-2l0.5-0.9l0.8-4.8l0.9-1l1.1-4.8l2-4.1l0.3-3.2l2.2-2.6l-1,0.1l-0.3,1.1
                  l0.3-1.4l-0.5-0.2l-0.8,0.4l-2,2.8h-1.4l0.1-0.7l-0.4-0.1l0.7-0.8V373l0.6-1.7l2.5-1.5l-0.1,0.8h0.5l2-1.9l0.7-2.5l-0.5-0.8
                  l-1.7,0.2l0.3,0.4l-0.8,0.8l-0.6-0.6l-1.6,0.3l-0.9,1.3l-0.6,0.1l0.2-0.7l-0.4-0.1l0.1-0.8l-0.7,0.3L736,366l-1-0.7l0.2-1.9l2.4-0.4
                  l1.6-2.7l0.9-0.5l0.3,0.4l0.8-0.3l1-1.8l-0.1-1.3l0.6,0.4l-0.1-0.5l-0.4-0.1l-0.6-1.9v-1.9l1.4-4l1.5-1.7l1-2.5l1.7-2.4l3.9-3
                  l1.9-2.2l0.3-0.8l1.2-0.7V335l1.1-1.6l1.2-1.1l1.3-4l0.3-0.7h0.8l0.7-2.5L759,324l-0.2-0.8l0.2-1.4l-0.4-1.2l0.6-1.6l-0.1-1.7
                  l-0.7-0.2l0.7,1.1l0.1,0.9l-0.7,0.7l-0.2,1.6l-0.4,0.1l-1-4l-1.6-2.2v-0.8l-0.5-0.5l-0.3,0.2l-0.6-0.8l-1.4-0.4l-0.4-0.5l-0.5,0.2
                  l-0.6,0.8l0.6,0.3l-0.2,2l-2.7,0.9l-0.3,0.5l-0.4-0.4l-1.6-0.2l-0.7,0.2l-0.3-0.4l-2.1-0.6l-0.7,0.3l-0.6-0.3v-0.4l-1.3-0.1l0,0
                  l-5.2-1.2l3.8,0.9l-0.4,0.4l-1.9-0.5l-2.2-0.1l-1-0.6l-0.5-0.8l-3.6-0.2l-1.7-0.6l0.2-0.5l-2.1-0.5l-2.3,1.5l-1.3,0.4l-3.2-0.3
                  l-5.5,1.2l-0.6,1.4l-5,1.9l-16.6,2.2l-4,0.7l-0.7,0.4l0.1,0.3h-0.6l-0.1-0.4l-2.9,0.7l-1,0.3l-0.3,0.5h-0.9l-2.1,1.3l-2.5,0.6
                  l-5.6,3.5l-1,1.4l-0.6,4.5l0,0l-1.1,1.4l-0.4,3l-1.3,3.6l0.5,3.4l-0.3,0.8l0.4,4.5l-0.4,0.3l0.4,1.3l-0.3,1.4l1,2.7l-1.4,2.5
                  l-3.8,2.9l-0.2,1l-0.9,1.1v0.6l0.5,0.6l-0.7,1.8l0.2,2.2l-0.5,2l0.1,1l-0.5,0.9l-4.9,4.5l-4.8,3.5l-6.8,3.7l-2.5,2.6v0.2l0.8-0.6
                  l0.8-0.8h0.5l0.8-0.7l0.7-1.3l0.8-0.2l-1,1l0.1,0.8l-0.6,0.5l0.3,1l1.2,0.6l0.9-0.7l1.1,1l0.2,0.7l-0.3,1.3l-0.6,0.3l-0.8,2.9
                  l-4.5,1.5L641,395l-0.2,0.7l-1.4,0.1l-6.8-1.7l-0.2-0.6l-1.1-0.7l-0.6,0.1l-0.3-0.5h-0.8l0.5,1.1l-1.2,0.2l-0.6-0.7l0.5-0.6
                  l-0.2-0.7l0.2-0.2l0.7,0.4l0.7-0.8l1,1.3l0.3-0.3l0.3,0.4l0.6-1.2l-1.5-0.8l-0.9-1.4l-9.8,0.6l-3.1,0.6l-5.3,1l-2.3,2.8l-3,1.6
                  l-2.2,0.3l-2.9-0.3l-1.1,0.5l1.8,0.8l-0.4,0.6H601l-0.1-0.3l-0.8,0.4h-0.8l-0.1-0.9l0.7-0.6l-0.9-0.4l-5.4,0.2l-0.8,0.9l-0.2-0.7
                  l-3.3,0.8l0.1,1.2l-0.6,0.6l-1.3,0.2l-0.8-0.1l-0.2-0.4l-1,0.1l-0.7,0.4l0.3,1l-0.6,0.4l-2.7,0.5l-0.1-1.2l-4.5,1.5l0,0L570,403
                  l-3.8,0.4l-2.7-1.3l-0.6-2.4l-2.8-2.8l-0.1-0.7l-0.8-0.8l-0.6-1.8l-0.5-0.4l-3.3-0.3l-2.2-0.6l-0.6-1.2l-3-2.3l-9.5-0.2l-2.7-0.7
                  l-1.8-1.2l-0.2,1.2l-0.6-0.3l-0.9,0.3l0.1,0.7l-1.2,0.1l-0.2-0.5l0.3-0.3l0.7,0.3l0.1-0.2l-0.3-0.6l-0.8-0.3v-0.6l-0.5-0.2l0.1-0.3
                  l1,0.1l2,1.3v-0.7l-3.5-1.7l-0.9-0.9l-0.7-1.8l-0.3-2.5l-2.4-0.3l-0.8-0.7l-0.2-0.9l0.3-0.6l-1-1.4l-1-0.5l-0.2-0.7l-1.2-0.5
                  l-1.7-1.3l-0.7-2.6l0.2-1.8l-1.5-2.1l0.1-1.1l-0.6-1.1l-0.1-2l-1.2-3.3l-2.6-2.9l-0.6-1.4l-3.5-4.4l-5.9-6.4l-0.7-1.2l-4.2-4.1
                  l-0.8-1.4l-0.6-2.9l-4.7-9.9l-0.7-2.9l-0.5-0.2l-0.1-1.1l-1-0.8l-0.5-1.7l0.4-1.3l-0.5-0.8l-1.5,0.3l-1.8-3.3l-0.1-1.1l-0.8-0.9
                  l-0.4-3.3l-0.6-1.4l0.4-0.2l0.1-1l-1.7-4.5l-0.6-5.4l0.2-0.4l-1.2-2.7l-0.5,0.1l-0.6-2v-1h0.4v-2.8l-1-0.7l0.2-1.2l1-2.1l1.2-1.5
                  l0.4-1.9l0.5-0.6l0.2-3.6l-0.3-11l0.9-9.6l-0.5,0.3v-0.2l0.4-0.3v-0.4l-0.9-0.5v-7.1l-0.9-0.4v-0.5l0.6,0.1l-0.3,0.6l0.2,0.1
                  l0.3-0.5l0.7-6.4l-0.2-3.2l-0.8,0.7l-0.1,1.6l-0.6,0.1l0.2-0.7l-0.4-0.2l-0.9-2.2l0.3-1l-0.4-0.6l0.7-0.4l-0.2-0.9l0.9,0.7l1-0.3
                  l-0.1,1.4l0.3,0.5h0.5l0.9-4.2l-0.3-0.8l-0.4-0.1l0.5-3l-0.1-0.8l-0.6-0.4V224l0.4-0.1l0.2-1l1.5-1.1l-0.9-0.2l-0.4-0.7H485
                  l-0.4-0.5l1.3-2.9l-0.1-1.3l0.8-1.1l-0.9-0.7l0.2-0.8l-0.6-0.3l-0.3,0.2l-0.7-0.9l-0.6-0.1l0.2-0.6l0.9,0.6l0.5-0.1l0.3-0.9
                  l-0.5-0.8l0.9-0.8l-0.1-0.4l1.8,0.2v1.1l0.4,0.6l0.8-0.6l0.3,1.4l0.8-0.3l-0.3-1.2l-0.3-0.2l0.4-0.8l0.6-0.2l0.2,0.5l0.3-0.2
                  l-0.3-1.1l-0.2,0.2l-0.7-1.1l-0.7,0.1l1-1.1l0.6,0.8l1.5,0.2l-0.2,0.6l1.1-0.1l0.4,0.6l-0.5,0.6l0.7,0.6l-1.8,3.1l0.8,0.2l5.7-11.1
                  l1-3.8l0.3-4.9l-0.3-0.3h-1.4l-1.6,0.3l-0.1,0.5h-0.9l-0.2,0.4l-0.5-0.3l-0.7,0.6l0.1,1.7l-1.5,0.3l-0.6-0.4l0.2-0.3l-1.9-0.6
                  l-0.7-1.3l-0.4,0.3l-0.5-1l-0.5,0.1l-1.1-1.9h-2.9l-0.8-0.2l0.2-0.5l-0.4-0.2l-0.7,0.3l-0.7-0.4l-2.6,0.3l-0.3-0.4l-1.3,0.2
                  l-0.1,0.5h-0.7l-0.4-0.7l-1.7,0.5l-0.7-0.6l-0.5,0.5l-0.4-0.4l-0.8-0.1l-1.5-0.9l-0.8-0.8V188l-1.3,0.1l-1.4-1.2v-0.7l-1.6,0.3v-0.4
                  l-0.9-0.5l-0.5,0.5l-0.2-0.4l-0.3,0.1v-0.6l-2.4,0.1l-1.5-2l-1.3-0.3l-0.3-0.9h-1.9l-0.4,0.3l-0.7-0.6l-0.8,0.1v-0.6l-0.5-0.1
                  l-0.9,0.2l-0.8-0.5l-0.8,0.4l-1-1l0.5-1.3l-0.7-1.2l-1.2-0.6l-0.1-2.4l-0.4-0.2l-0.5-2.4l-0.9-1.1l0.1-0.8l-1-2.1l-0.8-0.3l-0.4-1.5
                  l-1.1-0.3l-0.5-0.7l0.3-0.4l-0.8-1.2l-0.8-0.2l-0.2-1.2l0.5-0.7l-0.3-0.5l0.4-2l-0.4-1.9l-0.4-0.6l-0.7,0.2l-0.3-0.3l0.1-0.9l-1-0.1
                  l1-2l0.3-2.9l-0.4-0.5h-0.8l0.4-1.7l-0.7-1.2l-0.4-0.2l-0.3,0.3l-0.7-1h-0.8l-0.2,0.4l-0.7-0.2l-0.1-0.7h-1.3l-0.2-0.3l-1.2-1.7
                  l-0.8-0.2l-0.2-0.9l-0.8,0.2l-0.3-0.8l-0.7-0.1V141l-0.7-1.1l0.2-1l-1-1v-1.1l-0.9-0.1l-0.8-1.2l-0.2-1l-0.8-0.5l-0.9-1.8l-3.1-1.4
                  l-0.3-1.1l-0.8-0.1l-1-1.1v-1.1l-1.5-2.4l0.2-1.4l-0.7-0.9l0.6-0.2l0.1-0.4l-1.2-0.4l-0.6-0.9l0.4-1.1l-1.2-0.8v-0.8l-1.3-0.6
                  l-0.2-2.1l-0.6-0.6l-0.1-1.3l-0.3-0.6l-0.7-0.1l-0.7-2l-0.7-0.1l-0.5-1.2l-0.4-3.7l-0.4-0.9l-2.4-1.8l0.2-0.4l-0.8-1.7l-2-1
                  l-0.3-0.8l-1.4-1l-1.6-0.8l-1.3-2.5l-2.2-0.5l-0.6-1l-1.9-0.2L397,93l0.5-1.1l-0.1-1.6l-0.5-0.1l-0.3,0.4l-0.2,1.3l-0.6-0.4l0.3-1.5
                  l-0.4-0.6l-1.2,0.2l-0.3-1.4l-0.5-0.4l-0.4-1l0.4-0.3l-0.2-0.2l-1.1,0.5l-0.2-1l-2,0.8l-0.2-1.5l-0.6,0.5l-0.1,0.6l-1.9,0.6
                  l-0.3-0.4l-0.4,0.3l-0.4-0.3l-0.4,0.2l-1.7-0.8l-0.8,0.2l0.1-0.5L383,85l-2,0.3l-0.5,0.4l-0.3-0.4l-1.6-0.2l-1,0.1v0.3l-0.5,0.1
                  l-1.4-0.2l-1.6-1.4l-2.1-0.3v-0.4l-1.4-0.3l-1.1,1l-0.4,1.6l-0.7,0.6l-2.7-0.5l0.1,0.5l-0.9,0.6l-0.6-0.3l-1.4,0.6l-1.1-0.2
                  l-0.7,1.6l0.1,0.4L360,90l-0.1,1.2l-0.5-0.1l-0.3,1.5l-0.7,0.6l0.1,1l-0.7,1.2v0.9l0.4,0.2l-0.7,0.9l0.1,0.3l-1,0.2l-0.2,1.8
                  l-0.4,0.8l0.8,0.5l0.2,0.7l-0.5,0.3l-0.6-0.2l-0.2,0.7l-1,0.5l-0.4-0.3l-0.6,0.2v0.6l-1.1,1.7l-0.8,0.1l-0.3,1.1l-0.3-0.2l-0.5,2.2
                  l-0.9,0.4l-0.8-0.4l-1.6,0.1l-0.3-0.4l-0.4,0.5l-0.1-0.5l-1.4-0.7l0.3-0.6l-0.4-0.1l-0.3,0.6L343.9,107.5 M484.8,254.1l0.1,0.6h0.2
                  l-0.1,2l-0.3-0.1l-0.2-0.7L484.8,254.1z M56.9,7.4L56.4,7h-1.2l0,0h1.3L56.9,7.4L56.9,7.4z"/>
                <path className="section_map__path section_map__path--fixed" d="M170,93.9c21,9,50,20,59,37s-0.9,64.9,16,74c36,19.4,68.1-42.6,112.6-20.1c28.8,14.6,71.3,84.6,33.2,90.9
                  c-22,3.7-72.7,17.7-72.4,35.2c0.3,17.9,13.5,58.9,66.5,76.9s79.2,1,100.1,6s36.1,46.7,71.1,44.7s42.5-28.4,54.8-32.7
                  c28.4-10.1,48.8,5.9,81-5c24.8-8.4-19-49,0-59s37-13.1,49-9"/>
                <path className="section_map__path section_map__path--animated js-path-animated" style={{ strokeDashoffset: this.context.page.point.path + 'px'}} d="M170,93.9c21,9,50,20,59,37s-0.9,64.9,16,74c36,19.4,68.1-42.6,112.6-20.1c28.8,14.6,71.3,84.6,33.2,90.9
                  c-22,3.7-72.7,17.7-72.4,35.2c0.3,17.9,13.5,58.9,66.5,76.9s79.2,1,100.1,6s36.1,46.7,71.1,44.7s42.5-28.4,54.8-32.7
                  c28.4-10.1,48.8,5.9,81-5c24.8-8.4-19-49,0-59s37-13.1,49-9"/>
                {this.context.routes.map(this.onRenderRoute)}
              </svg>
            </div>
        );
    }
}
