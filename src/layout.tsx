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
  Header,
  HeaderExpComponent,
  MobileComponent,
  PageComponent
} from 'Components';
import { ThemeContext } from 'Providers';

export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
    public static contextType = ThemeContext;
    public enterTrans: (node: any) => void = this.enter.bind(this);
    public exitTrans: (node: any) => void = this.exit.bind(this);
    public pagesService: PagesService = new PagesService();
    constructor(props: any) {
        super(props);
        this.state = {
            pageEnter: '',
            pageLeave: '',
        };

    };

    public enter(node: any): void {
      this.animatePage(
        node,
        'pageEnter',
        () => {
          const animation = Animations[this.state.pageEnter + 'Animation'];
          const animationLeave = Animations[this.state.pageLeave + 'Animation'];
          animation.enter(
              node,
              this.state.pageLeave !== '' ? animationLeave.duration.leave : 0
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
          animationLeave.exit(node);
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
      return <PageComponent {...props} content={content} />;
    };

    public renderHeader(): any {
      if (this.context.page && this.context.page.isExperience && this.context.page.hasParent !== '') {
        return <Header />;
      }
    };

    public renderExperience(): any {
      if (this.context.page && this.context.page.isExperience) {
        return (
          <React.Fragment>
            <HeaderExpComponent page={this.pagesService.getParent(this.context.page)} />
            <FooterExpComponent
              history={this.props.history}
            />
          </React.Fragment>
        );
      }
    };

    public render(): React.ReactElement<any> {
      return (
          <React.Fragment>
            {this.renderHeader()}
            {this.renderExperience()}
            <TransitionGroup component="div" id="content">
                <Transition
                    key={this.props.location.pathname}
                    timeout={2000}
                    onEnter={this.enterTrans}
                    onExit={this.exitTrans}
                    appear={false}
                >
                    <Switch location={this.props.location}>
                      {this.context.routes.map((route: any, index: number) =>
                        <Route key={index} path={route.url} exact={route.exactUrl} render={this.renderPage.bind(this, route)} />
                      )}
                    </Switch>
                </Transition>
            </TransitionGroup>
            <MobileComponent />
            <Footer />
          </React.Fragment>
      );
    }
}
