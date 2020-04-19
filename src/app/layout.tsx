// Imports
import { TweenMax } from 'gsap';
import { ILayoutProps, ILayoutState } from 'Interfaces';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PagesService } from 'Services';

// Components
import Animations from 'Animations';
import {
    Footer,
    FooterExpComponent,
    HeaderExpComponent,
    MobileComponent,
    PageComponent
} from 'Components';
import * as Content from 'Content';


export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
    public enterTrans: (node: any) => void = this.enter.bind(this);
    public exitTrans: (node: any) => void = this.exit.bind(this);
    public pagesService: PagesService = new PagesService();
    public onSetContent: (page: any) => void = this.setContent.bind(this);
    public routes: any = [];
    constructor(props: any) {
        super(props);
        this.state = {
            page: { chapter: undefined, name: undefined },
            pageEnter: '',
            pageLeave: '',
        };
        Object.keys(Content)
          .forEach((key: any) => {
            const content = Content[key];
            if (content.isPage) {
              this.routes.push(content);
            }
          });
        console.log(this.routes);
    };

    public setContent(page: any): void {
      this.setState({ page });
    };

    public enter(node: any): void {
      this.animatePage(
        node,
        'pageEnter',
        () => {
          const animation = Animations[this.state.pageEnter + 'Animation'];
          animation.enter(
              node,
              animation.duration,
              this.state.pageLeave !== '' ? animation.duration : 0
          );
        }
      );
    }

    public exit(node: any): void{
      this.animatePage(
        node,
        'pageLeave',
        () => {
          const animationLeave = Animations[this.state.pageLeave + 'Animation'];
          animationLeave.exit(node, animationLeave.duration);
        }
      );
    }

    public animatePage(node: HTMLElement, newState: string, animationCallback: () => void): void {
      let page;
      const state = {};
      TweenMax.killTweensOf(node);
      if (node === null) {
        this.props.history.push('/404');
        return;
      }
      page = node.getAttribute('data-page');
      if (page === null) {
        page = 'Common';
      }
      state[newState] = page;
      this.setState(state, animationCallback);
    }

    public renderPage(content: any, props: any): any {
      return <PageComponent {...props} content={content} setContent={this.onSetContent} />;
    };

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
              <MobileComponent />
              {this.state.page && this.state.page.isExperience &&
                  <HeaderExpComponent page={this.state.page} />
              }

              <TransitionGroup component="div" id="content">
                  <Transition
                      key={this.props.location.pathname}
                      timeout={2000}
                      onEnter={this.enterTrans}
                      onExit={this.exitTrans}
                      appear={true}
                  >
                      <Switch location={this.props.location}>
                        {this.routes.map((route: any, index: number) =>
                          <Route key={index} path={route.url} exact={route.exact} render={this.renderPage.bind(this, route)} />
                        )}
                      </Switch>
                  </Transition>
              </TransitionGroup>

              {this.state.page && this.state.page.isExperience &&
                  <FooterExpComponent
                      footerText={this.pagesService.getTextButtonNextPage(null, this.state.page)}
                      codexDatas={this.state.page.content.codex}
                      nextPage={this.pagesService.getNextPage(null, this.state.page) }
                      history={this.props.history}
                  />
              }

              <Footer/>
            </React.Fragment>
        );
    }
}
