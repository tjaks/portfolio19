import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about';
import caseRV from './components/case/riktiga-vykort';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="animations">
            <Header />
            <Switch>
              <Route path="/case/riktiga-vykort-postnord" component={caseRV} />
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
