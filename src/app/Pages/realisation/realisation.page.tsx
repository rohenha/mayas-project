// Imports
import { IRealisationProps, IRealisationState } from 'Interfaces';
import * as React from 'react';

// Styles

// Components
import { DetailsComponent, EntryChapterComponent, QuoteImgComponent } from 'Components';

// Content
import { RealisationContent } from 'Content';

export class PageRealisation extends React.Component<IRealisationProps, IRealisationState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="page page__realisation" data-page="Common">
                <DetailsComponent>
                  <EntryChapterComponent
                      imgs={[
                          RealisationContent.background.image,
                          RealisationContent.background.video
                      ]}
                      video={RealisationContent.background.isVideo}
                      subtitle={RealisationContent.text.title.subtitle}
                      text={RealisationContent.text.title.title}
                      introduction={RealisationContent.text.content}
                      {...this.props}
                  />
                  {RealisationContent.text.realisateurs.map((realisateur: any, index: number) =>
                    <QuoteImgComponent
                    imgs={[realisateur.image]}
                    top={index % 2 === 0}
                    title="Hello World"
                    key={index}
                    >
                    <p>{index % 2 === 0}</p>
                    <p>{realisateur.content}</p>
                    </QuoteImgComponent>
                  )}
                </DetailsComponent>
            </div>
        );
    }
}
