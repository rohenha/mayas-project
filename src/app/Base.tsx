// Imports
import { TweenMax } from 'gsap';
import { IBaseProps, IBaseState, IPath} from 'Interfaces';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import {  Transition, TransitionGroup } from 'react-transition-group';

// Styles
import './Base.scss';

// Components
import Animations from 'Animations';
import { 
    Footer, 
    FooterExpComponent, 
    HeaderExpComponent, 
    // LoadingComponent 
} from 'Components';
import Routes from 'Routes';


export default class Base extends React.Component<IBaseProps, IBaseState> {
    public enterTrans: (node: any) => void = this.enter.bind(this);
    public exitTrans: (node: any) => void = this.exit.bind(this);
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
            } )
        });
        TweenMax.killTweensOf(node);
        if (node !== null) {
            const page = node.getAttribute('data-page');
            this.setState({
                pageEnter: page
            }, () => {
                Animations[this.state.pageEnter + 'Animation'].enter(
                    node,
                    Animations[this.state.pageEnter + 'Animation'].duration,
                    this.state.pageLeave !== '' ? Animations[this.state.pageLeave + 'Animation'].duration : 0
                );
            });
        } else {
            this.props.history.push("/404");
        }
    }

    public exit(node: any): void{
        TweenMax.killTweensOf(node);
        if (node !== null) {
           const  page = node.getAttribute('data-page');
            this.setState({
                pageLeave: page
            }, () => {
                Animations[this.state.pageLeave + 'Animation'].exit(node, Animations[this.state.pageLeave + 'Animation'].duration);
            });
        } else {
            this.props.history.push("/404");
        }
    }

    public render(): React.ReactElement<any> {
        return (
            <React.Fragment>
                {/* <LoadingComponent /> */}
                {this.state.page && this.state.page.content ? 
                    <HeaderExpComponent page={ {chapter: this.state.page.content.chapter, name: this.state.page.content.pageName} } /> 
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
                        footerText={ Routes.ExpRoutes[Routes.ExpRoutes.indexOf(this.state.page) + 1] !== undefined ? { text1: "Poursuivre", text2: "l'expérience" } : { text1: "Terminer", text2: "l'expérience" }}
                        codexDatas={this.state.page.content.codex}
                        nextPage={
                            Routes.ExpRoutes[Routes.ExpRoutes.indexOf(this.state.page) + 1] !== undefined ?
                            Routes.ExpRoutes[Routes.ExpRoutes.indexOf(this.state.page) + 1].content.url : ''
                        }
                        history={this.props.history}
                    /> 
                : null}
                <Footer />
            </React.Fragment>
        );
    }
}