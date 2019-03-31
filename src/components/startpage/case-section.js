import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';
import nookImg from '../../media/nook-bg.jpg';
import smartBokr from '../../media/smartbokr-website.png';
import smartBokrApp from '../../media/smartbokr-app-start.jpg';
import walkingSuit from '../../media/walking-suit.jpg';
import nordeaCase from '../../media/nordeacase.png';
import refitness from '../../media/refitnessmockup.png';
import { fixedBody } from '../utils';
import Tilt from 'react-tilt'


export default class CaseSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#ccc",
            activeCase: "",
            sideNav: false,
            rollUpAnimation: false
        };

        //bind to not lose context
        this.pageTransition = this.pageTransition.bind(this);
    }

    pageTransition() {
        fixedBody();
    }

    caseWaypointEnter() {
        this.setState({
            backgroundColor: "#000",
            activeCase: "",
            rollUpAnimation: true,
        });
    }

    caseWaypointLeave() {
        this.setState({
            backgroundColor: "#ccc",
            activeCase: "",
            rollUpAnimation: true,
        });
    }

    render() {
        return (
            <article className="case-section" style={ { background: `${this.state.backgroundColor}` } }>
                <Waypoint onEnter={ this.caseWaypointEnter.bind(this) }/>

                <section className="case-section__item">
                    <div className="case-section__item--text">
                        <h2>reFitness.se</h2>
                        <p>#ProductDesign</p>
                    </div>
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link onClick={ this.pageTransition } to="/case/refitness">
                            <figure style={ { backgroundImage: 'url(' + refitness + ')' } }></figure>
                            <div className="overlay"></div>
                        </Link>
                        { /*<a href="https://www.smartbokr.com" target="_blank" rel="noopener noreferrer">*/ }
                        { /*<figure style={{ backgroundImage: 'url(' + smartBokr + ')' }}></figure>*/ }
                        { /*<div className="overlay"></div>*/ }
                        { /*</a>*/ }
                    </Tilt>
                </section>

                <section className="case-section__item">
                    <div className="case-section__item--text">
                        <h2>SmartBokr App</h2>
                        <p>#UI/UX #CSS #Animations #React.js</p>
                    </div>
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link onClick={ this.pageTransition } to="/case/smartbokrapp">
                            <figure style={ { backgroundImage: 'url(' + smartBokrApp + ')' } }></figure>
                            <div className="overlay"></div>
                        </Link>
                    </Tilt>
                </section>

                <section className="case-section__item">
                    <div className="case-section__item--text">
                        <h2>SmartBokr.com</h2>
                        <p>#UI/UX #Developer #Wordpress</p>
                    </div>
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link onClick={ this.pageTransition } to="/case/smartbokrwebsite">
                            <figure style={ { backgroundImage: 'url(' + smartBokr + ')' } }></figure>
                            <div className="overlay"></div>
                        </Link>
                        { /*<a href="https://www.smartbokr.com" target="_blank" rel="noopener noreferrer">*/ }
                        { /*<figure style={ { backgroundImage: 'url(' + smartBokr + ')' } }></figure>*/ }
                        { /*/!*<div className="overlay"></div>*!/*/ }
                        { /*</a>*/ }
                    </Tilt>
                </section>

                <section className="case-section__item nook">
                    <div className="case-section__item--text">
                        <h2>Quedro.com</h2>
                        <p>#UI/UX #Developer #Wordpress</p>
                    </div>
                    <Tilt options={ { max: 25, scale: 1 } }>
                        { /* <Link onClick={this.pageTransition} to="/case/smartbokr-webb">
                            <figure style={{  backgroundImage: 'url(' + walkingSuit + ')' }}></figure>
                            <div className="overlay"></div>
                        </Link> */ }

                        <a href="https://www.quedro.com" target="_blank" rel="noopener noreferrer">
                            <figure style={ { backgroundImage: 'url(' + walkingSuit + ')' } }></figure>
                            <div className="overlay"></div>
                        </a>
                    </Tilt>
                </section>

                <section className="case-section__item nook">
                    <div className="case-section__item--text">
                        <h2>Nook Stockholm</h2>
                        <p>#UI/UX #Developer #Wordpress</p>
                    </div>
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link onClick={ this.pageTransition } to="/case/nookstockholm">
                            <figure style={ { backgroundImage: 'url(' + nookImg + ')' } }></figure>
                            <div className="overlay"></div>
                        </Link>
                        { /*// <a href="http://www.nookstockholm.com" target="_blank" rel="noopener noreferrer">*/ }
                        { /*// <figure style={ { backgroundImage: 'url(' + nookImg + ')' } }></figure>*/ }
                        { /*// <div className="overlay"></div>*/ }
                        { /*// </a>*/ }
                    </Tilt>
                </section>

                <section className="case-section__item nook">
                    <div className="case-section__item--text">
                        <h2>Nordea Retail</h2>
                        <p>#FrontendDev #ES6</p>
                    </div>
                    <Tilt options={ { max: 25, scale: 1 } }>
                        { /* <Link onClick={this.pageTransition} to="/case/smartbokr-webb">
                            <figure style={{  backgroundImage: 'url(' + nordeaCase + ')' }}></figure>
                            <div className="overlay"></div>
                        </Link> */ }

                        <a href="https://www.nordea.se" target="_blank" rel="noopener noreferrer">
                            <figure style={ { backgroundImage: 'url(' + nordeaCase + ')' } }></figure>
                            <div className="overlay"></div>
                        </a>
                    </Tilt>
                </section>
            </article>
        );
    }
}