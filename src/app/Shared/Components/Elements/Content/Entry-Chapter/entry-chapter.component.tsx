// Imports
import { IEntryChapterProps, IEntryChapterState } from 'Interfaces';
import * as React from 'react';

// Styles
import './entry-chapter.component.sass';

// Components
import { VideoComponent } from 'Components';

export class EntryChapterComponent extends React.Component<IEntryChapterProps, IEntryChapterState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="content__entryChapter">
                { this.props.video ?
                    <VideoComponent
                        sources={this.props.imgs[1]}
                        poster={this.props.imgs[0]}
                        controls={false}
                        autoplay={true}
                        loop={true}
                        muted={true}
                        {...this.props}
                        nextPage=""
                    />
                : <img className="bg" src={this.props.imgs[0]} />
                }
                <div className="content__entryChapter-content">
                    <p className="quiz-screen__title--chapter"><span>Chapitre {this.props.chapter.number}</span> {this.props.chapter.name}</p>
                    <h1>{this.props.text}</h1>
                    <p className="content__entryChapter-content--desc">{this.props.introduction}</p>
                    <p className="content__entryChapter-content--scroll">Scroll <span className="content__entryChapter-content--scroll-arrow"/></p>
                </div>
            </div>
        );
    }
}
