// Imports
import { TweenMax } from 'gsap';
import { IExperience,ILayoutProps, ILayoutState, IRoute } from 'Interfaces';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PagesService } from 'Services';

// Components
import Animations from 'Animations';
import {
  CursorComponent,
  Footer,
  FooterExpComponent,
  Header,
  HeaderExpComponent,
  MobileComponent,
  PageComponent,
  PreloaderComponent
} from 'Components';
import Providers from 'Providers';

export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
  public static contextType = Providers['ThemeContext'];
  public enterTrans: (node: HTMLElement) => void = this.enter.bind(this);
  public exitTrans: (node: HTMLElement) => void = this.exit.bind(this);
  public pagesService: PagesService = new PagesService();
  public onInitContent: () => void = this.initContent.bind(this);
  public content: HTMLElement;
  public container: HTMLElement | null;
  constructor(props: ILayoutProps) {
    super(props);
    this.state = {
      pageEnter: '',
      pageLeave: '',
    };
  };

  public componentDidMount(): void {
    this.container = document.querySelector('#content');
    this.content = this.container!.children[0] as HTMLElement;
  };

  public initContent(): void {
    this.container!.style.display = 'block';
    this.enter(this.content);
  };

  public enter(node: HTMLElement): void {
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
  };


  public exit(node: HTMLElement): void{
    this.animatePage(
      node,
      'pageLeave',
      () => {
        const animationLeave = Animations[this.state.pageLeave + 'Animation'];
        animationLeave.exit(node);
      }
    );
  };

  public animatePage(node: HTMLElement, newState: string, animationCallback: () => void): void {
    let page;
    const state = {};
    TweenMax.killTweensOf(node);
    if (!node) {
      this.props.history.push('/404');
      return;
    }
    page = node.getAttribute('data-page');
    if (page === null) {
      page = 'Common';
    }
    state[newState] = page;
    this.setState(state, animationCallback);
  };

  public renderPage(route: IRoute | IExperience, props: ILayoutProps): React.ReactElement<any> {
    return <PageComponent {...props} content={route} />;
  };

  public renderHeader(): React.ReactElement<any> | void {
    if (this.context.page && this.context.page.isExperience && this.context.page.hasParent !== '') {
      return <Header />;
    }
  };

  public renderExperience(): React.ReactElement<any> | void {
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
        <PreloaderComponent callback={this.onInitContent} />
        <TransitionGroup component="div" id="content">
          <Transition
            key={this.props.location.pathname}
            timeout={2000}
            onEnter={this.enterTrans}
            onExit={this.exitTrans}
            appear={false}>
            <Switch location={this.props.location}>
              {this.context.routes.map((route: IRoute | IExperience, index: number) =>
                <Route key={index} path={route.url} exact={route.exactUrl} render={this.renderPage.bind(this, route)} />
              )}
            </Switch>
          </Transition>
        </TransitionGroup>
        <CursorComponent />
        <MobileComponent />
        <Footer />
      </React.Fragment>
    );
  };
}
