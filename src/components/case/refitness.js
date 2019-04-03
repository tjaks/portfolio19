import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';
import img1 from '../../media/refitnessmockup.png';
import img2 from '../../media/refitness-mockups.png';
import img3 from '../../media/refitness-start.jpg';
import img4 from '../../media/refitness-movie.gif';



export default class refitness extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
        this.pageTransition = this.pageTransition.bind(this);
    }

    pageTransition(){
        fixedBody();
    }

    scrollWindow() {
        let height = window.innerHeight;
        window.scroll({top: height, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <article>
                <div className="page-transition">
                    <h2>reFitness</h2>
                </div>

                <section className="case-study__jumbotron">
                    {/*<img className="arrow__animation" src={ ScrollDownArrow } alt="arrow down"/>*/}
                    <div className="case-study__headline">
                        <a className="open-external-link" target="_blank">site coming soon</a>
                        <h1><span>reFitness.se </span>
                        </h1>
                        <h5>The second largest online personal trainer in Sweden.</h5>
                    </div>

                    <div className="case-study__textline">
                        <p>
                            I was trusted with the redesign of reFitness website.
                            With 75% of all their website visits coming from mobile, it was obvious to design with a mobile first approach.
                        </p>
                        <p> Scroll down to see the result.</p>
                        <button onClick={this.scrollWindow} className="button button__round"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                    </div>

                    {/*<img className="startpage__image" src={ GlitchImage } style={styles} alt="Glitch Profile" />*/}
                </section>
                <img  className="case-study__header__img" src={ img1 }  alt="Refitness Case Study" />
                <section className="case-study__info container">
                    <div>
                        <h3>Client</h3>
                        <p>ReFitness.se, <br/> At reFitness you get personal training and diet plans online from a trained PT.</p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p>A total redesign of their website. With wireframes and Information Architecture. Delivered in Invision studio and Balsamiq.<br/>
                        The new website is supposed to increase conversion, answer questions and represent the company as a modern and easier way to get healthier and stronger.</p>
                        <p>80% of all their visitors are females between 25-40 years old, so the design should be appealing for them.
                            But without scaring away the rest, which is men 30-50 years old.</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>My Role as the designer is to work across the entire product lifecycle, from product discovery to product development and through multiple product iterations.
                        </p>
                        <p> To ensure the best possible experience for the users. </p>
                    </div>
                </section>

                <section className="container">
                    <div>
                        <h3>The process</h3>
                        <p>I started of with interviews, competitive analysis and creating personas.</p>
                    </div>
                    <div>
                        <p>Next was creating different lo-fi versions, for each page.</p>
                        <p>Here is an example where we decided to go with images in column 2, with column 3 as an example of showing a banner for campaigns.</p>
                    </div>
                    <img className="case-study__info--100" src={ img2 }  alt="Refitness Case Study wireframe" />

                    <h3>A mobile first approach</h3>
                    <p>With a client base almost only coming from social media platforms, the numbers are really high for mobile visitors. Having an mobile first approach was a given.</p>
                    <p>The color palette is inspired by the ocean, with the 2019 years color, "Living Coral" and a background inspired from deep sea.</p>
                    <img className="mobile-mockup case-study__info--shadow" src={ img3 }   alt="Refitness Case Study startpage" />
                    <h3>An example of animations for desktop.</h3>
                    <img className="case-study__info--100 case-study__info--shadow" src={ img4 }  alt="Refitness Case Study movie" />
                </section>

                <Link onClick={this.pageTransition} to="/case/smartbokrapp">
                    <section className="contactMe">
                        <h2>Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i> SmartBokr App</h2>
                    </section>
                </Link>
            </article>
        );
    }
}