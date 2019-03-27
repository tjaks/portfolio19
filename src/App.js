import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about';
import smartbokrWebb from './components/case/smartbokr-webb';
import nookstockholm from './components/case/nookstockholm';
import refitness from './components/case/refitness';
import smartbokrApp from './components/case/smartbokr-app';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="animations">
            <Header />
            <Switch>
              <Route path="/case/smartbokrapp" component={smartbokrApp} />
            <Route path="/case/refitness" component={refitness} />
            <Route path="/case/nookstockholm" component={nookstockholm} />
              <Route path="/case/smartbokr-webb" component={smartbokrWebb} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
