// Imports
import { IVideoFooterProps, IVideoFooterState } from 'Interfaces';
import * as React from 'react';

// Styles
import './video-footer.component.scss';

// Components
// import { ButtonExpComponent } from 'Components';

export class VideoFooterComponent extends React.Component<IVideoFooterProps, IVideoFooterState> {
    public onChangePage: () => void = this.changePage.bind(this);
    constructor(props: any) {
        super(props);
        this.state = {
            videoDone: false
        };
    }

    public changePage(): any {
        this.props.history.push(this.props.nextPage);
    }

    public componentWillReceiveProps(nextProps: any): any {
        if(nextProps.videoState === 100 && this.state.videoDone === false) {
            this.setState({ videoDone: true, }, () => { 
                setTimeout(() => {
                    this.changePage();
                }, 1000);
            });
        }
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="video__footer">
                <div className="video__footer--status">
                    <p><span>{this.props.duree.current}</span> / <span>{this.props.duree.total}</span></p>
                    <progress value={this.props.videoState} max="100" />
                </div>
            </div>
        );
    }
}