// Imports
import { IPartenairesProps, IPartenairesState } from 'Interfaces';
import * as React from 'react';

// Styles
import './partenaires.page.sass';

// Components
import { DetailsComponent, EntryChapterComponent, ImageComponent } from 'Components';

// Content
import { PartenairesContent } from 'Content';

export class PagePartenaires extends React.Component<IPartenairesProps, IPartenairesState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
          <div className="page page-partenaires" data-page="Common">
              <DetailsComponent>
                <EntryChapterComponent
                    imgs={[
                        PartenairesContent.background.image,
                        PartenairesContent.background.video
                    ]}
                    video={PartenairesContent.background.isVideo}
                    subtitle={PartenairesContent.text.title.subtitle}
                    text={PartenairesContent.text.title.title}
                    introduction={PartenairesContent.text.content}
                    {...this.props}
                />
                <ImageComponent path={"http://voyageterreshistoire.imgix.net/" + "john-salzarulo-37827-unsplash.jpg" } />
              </DetailsComponent>
          </div>
        );
    }
}
