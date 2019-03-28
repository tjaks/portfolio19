import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Preloader, Placeholder } from 'react-preloading-screen';
import './App.scss';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about';
import smartbokrWebb from './components/case/smartbokr-webb';
import nookstockholm from './components/case/nookstockholm';
import refitness from './components/case/refitness';
import smartbokrApp from './components/case/smartbokr-app';
import smartbokrWebsite from './components/case/smartbokr-website';
import nookstockholmWebsite from './components/case/nookstockholm-website';


class App extends Component {
    render() {
        return (
            <Preloader>
                <div className="App">
                    <BrowserRouter>
                        <div className="animations">
                            <Header/>
                            <Switch>
                                <Route path="/case/nookstockholm" component={ nookstockholmWebsite }/>
                                <Route path="/case/smartbokrwebsite" component={ smartbokrWebsite }/>
                                <Route path="/case/smartbokrapp" component={ smartbokrApp }/>
                                <Route path="/case/refitness" component={ refitness }/>
                                <Route path="/case/smartbokr-webb" component={ smartbokrWebb }/>
                                <Route path="/about" component={ About }/>
                                <Route path="/" component={ Home }/>
                            </Switch>
                            <Footer/>
                        </div>
                    </BrowserRouter>
                </div>
                <Placeholder>
                    <div className="animations">
                        <div className="startpage__headline">
                            <h1 style={{fontSize: '1.7rem', margin: '.5rem 0 0 0'}}>Digital Product Designer <br/> based in Stockholm.</h1>
                        </div>
                    </div>
                </Placeholder>
            </Preloader>
        );
    }
}

export default App;
