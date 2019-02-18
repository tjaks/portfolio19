import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';
import ScrollableAnchor, { configureAnchors, removeHash, goToAnchor } from 'react-scrollable-anchor';
import NordeaCaseImg from '../../media/nordeacase.png';
import { fixedBody } from '../utils';


export default class IntroContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#f9f9f9",
            activeCase: "",
            sideNav: false,
            rollUpAnimation: false
        };

        //bind to not lose context
        this.nookWaypointEnter = this.nookWaypointEnter.bind(this);
        this.huvudstaWaypointEnter = this.huvudstaWaypointEnter.bind(this);
        this.villaWaypointEnter = this.villaWaypointEnter.bind(this);
        this.nordeaWaypointEnter = this.nordeaWaypointEnter.bind(this);
        this.postnordWaypointEnter = this.postnordWaypointEnter.bind(this);
        this.vinoteketWaypointEnter = this.vinoteketWaypointEnter.bind(this);
        this.pageTransition = this.pageTransition.bind(this);
    }


    nookWaypointEnter() {
        this.setState({
            backgroundColor: "#FFC966",
            activeCase: "nook",
            rollUpAnimation: true,
        });
    }

    nookWaypointLeave() {
        this.setState({
            backgroundColor: "#FFF"
        });
    }
    huvudstaWaypointEnter() {
        this.setState({
            backgroundColor: "#5CB85C",
            activeCase: "huvudsta",
            rollUpAnimation: true,
        });
    }

    huvudstaWaypointLeave() {
        this.setState({ backgroundColor: "#FFF" });
    }

    villaWaypointEnter() {
        this.setState({
            backgroundColor: "#F9E6C3",
            activeCase: "villa",
            rollUpAnimation: true,
        });
    }

    nordeaWaypointEnter() {
        this.setState({
            backgroundColor: "#9cf",
            activeCase: "nordea",
            rollUpAnimation: true,
        });
    }

    postnordWaypointEnter() {
        this.setState({
            backgroundColor: "#1aa1d4",
            activeCase: "postnord",
            rollUpAnimation: true,
        });
    }

    vinoteketWaypointEnter() {
        this.setState({
            backgroundColor: "#fe6a00",
            activeCase: "vinoteket",
            rollUpAnimation: true,
        });
    }

    clearWaypointLeave() {
        this.setState({ backgroundColor: "#FFF" });
    }

    sidenavWaypointEnter() {
        this.setState({
            sideNav: true
        });
    }

    sidenavWaypointLeave() {
        this.setState({
            sideNav: false,
        });
    }

    pageTransition() {
        fixedBody();
    }

    render() {
        return (
            <section style={{ background: `${this.state.backgroundColor}` }} id="intro-content" className="intro-content">
                <Waypoint onEnter={this.sidenavWaypointLeave.bind(this)} />

                <div className={"sideNav " + (this.state.sideNav ? 'show' : 'hide')}>
                    <ul>
                        <a onClick={this.postnordWaypointEnter} className="p" href="#postnord"><li className={this.state.activeCase === "postnord" ? 'activeCase' : ''}>#1</li></a>
                        <a onClick={this.nordeaWaypointEnter} className="p" href="#nordea"><li className={this.state.activeCase === "nordea" ? 'activeCase' : ''}>#2</li></a>
                        <a onClick={this.nookWaypointEnter} className="p" href="#nook"><li className={this.state.activeCase === "nook" ? 'activeCase' : ''}>#3</li></a>
                        <a onClick={this.vinoteketWaypointEnter} className="p" href="#vinoteket"><li className={this.state.activeCase === "vinoteket" ? 'activeCase' : ''}>#4</li></a>
                        <a onClick={this.huvudstaWaypointEnter} className="p" href="#huvudsta"><li className={this.state.activeCase === "huvudsta" ? 'activeCase' : ''}>#5</li></a>
                        <a onClick={this.villaWaypointEnter} className="p" href="#villa"><li className={this.state.activeCase === "villa" ? 'activeCase' : ''}>#6</li></a>
                    </ul>
                </div>

                <section className="container">
                    <Waypoint onEnter={this.postnordWaypointEnter.bind(this)} />
                    <article id="postnord" className="case case__screenshot">
                        <section>
                            <Link onClick={this.pageTransition} to="/case/riktiga-vykort-postnord" className="hoverBG">
                                <h2>Riktiga Vykort, PostNord</h2>
                            </Link>
                            <Waypoint onEnter={this.postnordWaypointEnter.bind(this)} />
                            <div className="underline"> </div>
                            <p>Technical Project Manager &#38; Designer, Consult</p>
                        </section>
                        <Waypoint onEnter={this.sidenavWaypointEnter.bind(this)} />
                        <section>
                            <img className={this.state.activeCase === "postnord" ? 'top0' : 'top100'} src="/media/rvpost.png" />
                        </section>
                    </article>

                    <Waypoint onEnter={this.nordeaWaypointEnter.bind(this)} />
                    <article id="nordea" className="case case__screenshot">
                        <section>
                            <h2>Nordea Retail</h2>
                            <Waypoint onEnter={this.nordeaWaypointEnter.bind(this)} />
                            <div className="underline"> </div>
                            <p>Frontend Development, Consult</p>
                        </section>
                        <section>
                            <img className={this.state.activeCase === "nordea" ? 'top0' : 'top100'} src={NordeaCaseImg} alt="Logo" />
                        </section>
                    </article>

                    <Waypoint onEnter={this.nookWaypointEnter.bind(this)} />
                    <article id="nook" className="case case__screenshot">
                        <section>
                            <h2>Nook Stockholm</h2>
                            <Waypoint onEnter={this.nookWaypointEnter.bind(this)} />
                            <div className="underline"> </div>
                            <p>Wordpress, Development &#38; Design</p>
                        </section>
                        <section>
                            {/*<img className={this.state.activeCase === "nook" ? 'top0' : 'top100'} src="/media/nook.png" /> */}
                            <video className={this.state.activeCase === "nook" ? 'top0' : 'top100'} src="/media/nookvideo2.mp4" loop autoPlay controls poster="/media/nook.png">
                            </video>
                        </section>
                    </article>

                    <Waypoint onEnter={this.vinoteketWaypointEnter.bind(this)} />
                    <article id="vinoteket" className="case case__screenshot">
                        <section>
                            {/*<img className={this.state.activeCase === "vinoteket" ? 'top0' : 'top100'} src="/media/vinoteket.png" />*/}
                            <h2>Vinoteket.se</h2>
                            <Waypoint onEnter={this.vinoteketWaypointEnter.bind(this)} />
                            <div className="underline"> </div>
                            <p>Fullstack Developer</p>
                        </section>
                        <section>
                            <video className={this.state.activeCase === "vinoteket" ? 'top0' : 'top100'} src="/media/vinoteketvideo.mp4" loop autoPlay poster="/media/vinoteket.png">
                            </video>
                        </section>
                    </article>

                    <Waypoint onEnter={this.huvudstaWaypointEnter.bind(this)} />
                    <article id="huvudsta" className="case case__mockup">
                        <section>
                            <h2>Huvudsta Centrum</h2>
                            <div className="underline"> </div>
                            <p>Wordpress, Development &#38; Design</p>
                        </section>
                        <section>
                            <img className={this.state.activeCase === "huvudsta" ? 'top0' : 'top100'} src="/media/huvudsta-devices.png" />
                        </section>
                    </article>


                    <Waypoint onEnter={this.villaWaypointEnter.bind(this)} />
                    <div id="villa" className="case case__mockup">
                        <section>
                            <h2>Villa Kärnbo Bed &#38; Breakfast </h2>
                            <div className="underline"> </div>
                            <p>Development, SEO &#38; Design</p>
                        </section>
                        <section>
                            <img className={this.state.activeCase === "villa" ? 'top0' : 'top100'} src="/media/villa.png" />
                        </section>
                    </div>

                </section>

            </section>
        );
    }
}