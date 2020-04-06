// Imports
import { TweenMax } from 'gsap';
import { ILayoutProps, ILayoutState, IPath} from 'Interfaces';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PagesService } from 'Services';

// Styles
// Components
import Animations from 'Animations';
import {
    Footer,
    FooterExpComponent,
    HeaderExpComponent,
    MobileComponent
    // LoadingComponent
} from 'Components';
import Routes from 'Routes';


export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
    public enterTrans: (node: any) => void = this.enter.bind(this);
    public exitTrans: (node: any) => void = this.exit.bind(this);
    public pagesService: PagesService = new PagesService();
    constructor(props: any) {
        super(props);
        this.state = {
            page: { chapter: undefined, name: undefined },
            pageEnter: '',
            pageLeave: '',
        };
    }

    public enter(node: any): void {
      this.setState({
        page: Routes.ExpRoutes.find((route: any) =>  {
          return route.content.url === this.props.history.location.pathname;
        })
      });
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

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
              <MobileComponent />
              {this.state.page && this.state.page.content ?
                  <HeaderExpComponent page={this.state.page} />
              : null}

              <TransitionGroup component="div" id="content">
                  <Transition
                      key={this.props.location.pathname}
                      timeout={2000}
                      onEnter={this.enterTrans}
                      onExit={this.exitTrans}
                      appear={true}
                  >
                      <Switch location={this.props.location}>
                          {Routes.AppRoutes.map((route: IPath, index: number) =>
                              <Route key={index} path={route.path} exact={route.exact} {...this.props} component={route.component}/>
                          )}
                      </Switch>
                  </Transition>
              </TransitionGroup>

              {this.state.page && this.state.page.content && this.state.page.type !== "quiz" ?
                  <FooterExpComponent
                      footerText={this.pagesService.getTextButtonNextPage(Routes, this.state.page)}
                      codexDatas={this.state.page.content.codex}
                      nextPage={this.pagesService.getNextPage(Routes, this.state.page) }
                      history={this.props.history}
                  />
              : null}

              <Footer/>
            </React.Fragment>
        );
    }
}
