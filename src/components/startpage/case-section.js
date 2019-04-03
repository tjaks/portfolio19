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

    refitnessCaseWaypointEnter() {
        this.setState({
            activeCase: "refitness",
            rollUpAnimation: true,
        });
    }
    smartbokrappCaseWaypointEnter() {
        this.setState({
            activeCase: "smartbokrapp",
            rollUpAnimation: true,
        });
    }
    smartbokrwebsiteCaseWaypointEnter() {
        this.setState({
            activeCase: "smartbokrwebsite",
            rollUpAnimation: true,
        });
    }
    quedroCaseWaypointEnter() {
        this.setState({
            activeCase: "quedro",
            rollUpAnimation: true,
        });
    }
    nookCaseWaypointEnter() {
        this.setState({
            activeCase: "nook",
            rollUpAnimation: true,
        });
    }
    nordeaCaseWaypointEnter() {
        this.setState({
            activeCase: "nordea",
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
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link className={this.state.activeCase === "refitness" ? 'transform0' : 'transform100'} onClick={ this.pageTransition } to="/case/refitness">
                            <Waypoint onEnter={this.refitnessCaseWaypointEnter.bind(this)} />
                            <figure style={ { backgroundImage: 'url(' + refitness + ')' } }>
                                <div className="case-section__item--text">
                                    <h2>reFitness.se</h2>
                                    <p>#ProductDesign</p>
                                </div>
                            </figure>
                            <div className="overlay"></div>
                        </Link>
                    </Tilt>
                </section>

                <section className="case-section__item">
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link className={this.state.activeCase === "smartbokrapp" ? 'transform0' : 'transform100'} onClick={ this.pageTransition } to="/case/smartbokrapp">
                            <Waypoint onEnter={this.smartbokrappCaseWaypointEnter.bind(this)} />
                            <figure style={ { backgroundImage: 'url(' + smartBokrApp + ')' } }>
                                <div className="case-section__item--text">
                                    <h2>SmartBokr App</h2>
                                    <p>#UI/UX #CSS #Animations #React.js</p>
                                </div>
                            </figure>
                            <div className="overlay"></div>
                        </Link>
                    </Tilt>
                </section>

                <section className="case-section__item">
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link className={this.state.activeCase === "smartbokrwebsite" ? 'transform0' : 'transform100'} onClick={ this.pageTransition } to="/case/smartbokrwebsite">
                            <Waypoint onEnter={this.smartbokrwebsiteCaseWaypointEnter.bind(this)} />
                            <figure style={ { backgroundImage: 'url(' + smartBokr + ')' } }>
                                <div className="case-section__item--text">
                                    <h2>SmartBokr.com</h2>
                                    <p>#UI/UX #Developer #Wordpress</p>
                                </div>
                            </figure>
                            <div className="overlay"></div>
                        </Link>
                    </Tilt>
                </section>

                <section className="case-section__item nook">
                    <Tilt options={ { max: 25, scale: 1 } }>
                        <a className={this.state.activeCase === "quedro" ? 'transform0' : 'transform100'} href="https://www.quedro.com" target="_blank" rel="noopener noreferrer">
                            <Waypoint onEnter={this.quedroCaseWaypointEnter.bind(this)} />
                            <figure style={ { backgroundImage: 'url(' + walkingSuit + ')' } }>
                                <div className="case-section__item--text">
                                    <h2>Quedro.com</h2>
                                    <p>#UI/UX #Developer #Wordpress</p>
                                </div>
                            </figure>
                            <div className="overlay"></div>
                        </a>
                    </Tilt>
                </section>

                <section className="case-section__item nook">

                    <Tilt options={ { max: 25, scale: 1 } }>
                        <Link className={this.state.activeCase === "nookstockholm" ? 'transform0' : 'transform100'} onClick={ this.pageTransition } to="/case/nookstockholm">
                            <Waypoint onEnter={this.nookCaseWaypointEnter.bind(this)} />
                            <figure style={ { backgroundImage: 'url(' + nookImg + ')' } }>
                                <div className="case-section__item--text">
                                    <h2>Nook Stockholm</h2>
                                    <p>#UI/UX #Developer #Wordpress</p>
                                </div>
                            </figure>
                            <div className="overlay"></div>
                        </Link>
                    </Tilt>
                </section>

                <section className="case-section__item nook">
                    <Tilt options={ { max: 25, scale: 1 } }>
           

                        <a className={this.state.activeCase === "nordea" ? 'transform0' : 'transform100'} href="https://www.nordea.se" target="_blank" rel="noopener noreferrer">
                            <Waypoint onEnter={this.nordeaCaseWaypointEnter.bind(this)} />
                            <figure style={ { backgroundImage: 'url(' + nordeaCase + ')' } }>
                                <div className="case-section__item--text">
                                    <h2>Nordea Retail</h2>
                                    <p>#FrontendDev #ES6</p>
                                </div>
                            </figure>
                            <div className="overlay"></div>
                        </a>
                    </Tilt>
                </section>
            </article>
        );
    }
}