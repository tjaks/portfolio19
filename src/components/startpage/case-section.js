import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';
import ScrollableAnchor, { configureAnchors, removeHash, goToAnchor } from 'react-scrollable-anchor';
import nookImg from '../../media/nook-bg.jpg';
import smartBokr from '../../media/smartBokr-mockup.png';
import smartBokrApp from '../../media/skandia-bg.jpg';
import walkingSuit from '../../media/walking-suit.jpg';
import nordeaCase from '../../media/nordeacase.png';
import { fixedBody } from '../utils';


export default class CaseSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#FFF",
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
            backgroundColor: "#f9f9f9",
            activeCase: "",
            rollUpAnimation: true,
        });
    }

    render() {
        return (
            <article className="case-section" style={{ background: `${this.state.backgroundColor}` }} >
                <Waypoint onEnter={this.caseWaypointEnter.bind(this)} />
                <section className="case-section__item">
                    <div className="case-section__item--text">
                        <h2>SmartBokr.com</h2>
                        <p>UI/UX</p>
                        <p>Developer</p>
                        <p>wordpress</p>
                    </div>
                    <figure style={{  backgroundImage: 'url(' + smartBokr + ')' }}></figure>
                    <div className="overlay"></div>
                </section>

                <section className="case-section__item">
                    <div className="case-section__item--text">
                        <h2>SmartBokr App</h2>
                        <p>UI/UX</p>
                        <p>CSS & Animations</p>
                        <p>React.js</p>
                    </div>
                    <figure style={{  backgroundImage: 'url(' + smartBokrApp + ')' }}></figure>
                    <div className="overlay"></div>
                </section>

                <section className="case-section__item nook">
                    <div className="case-section__item--text">
                        <h2>Quedro.com</h2>
                        <p>UI/UX</p>
                        <p>Developer</p>
                        <p>Wordpress</p>
                    </div>
                    <figure style={{  backgroundImage: 'url(' + walkingSuit + ')' }}></figure>
                    <div className="overlay"></div>
                </section>

                <section className="case-section__item nook">
                    <div className="case-section__item--text">
                        <h2>Nook Stockholm</h2>
                        <p>UI/UX</p>
                        <p>Developer</p>
                        <p>Wordpress</p>
                    </div>
                    <figure style={{  backgroundImage: 'url(' + nookImg + ')' }}></figure>
                    <div className="overlay"></div>
                </section>

                <section className="case-section__item nook">
                    <div className="case-section__item--text">
                        <h2>Nordea Retail</h2>
                        <p>Frontend Developer</p>
                        <p>Javascript</p>
                    </div>
                    <figure style={{  backgroundImage: 'url(' + nordeaCase + ')' }}></figure>
                    <div className="overlay"></div>
                </section>
            </article>
        );
    }
}