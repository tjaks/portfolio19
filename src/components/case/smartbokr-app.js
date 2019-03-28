import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';
import img1 from '../../media/3.jpg';
import img2 from '../../media/smartbokr-app-lofi.png';
import img3 from '../../media/smartbokr-app-mobile-mockup.jpg';
import img4 from '../../media/refitness-movie.gif';
import img5 from '../../media/smartbokr-logo.png';
import img6 from '../../media/smartbokr-app-States.png';


export default class smartbokrApp extends Component {

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

    render() {
        return (
            <article>
                <div className="page-transition">
                    <h2>SmartBokr App</h2>
                </div>
                <section className="case-study__jumbotron">
                    { /*<img className="arrow__animation" src={ ScrollDownArrow } alt="arrow down"/>*/ }
                    <div className="case-study__headline">
                        <h1><span>SmartBokr App</span><span>A modern tool for the digitalisation of the Real Estate Business.</span>
                        </h1>
                    </div>

                    <div className="case-study__textline">
                        <p>
                            With the challenge of it being a customisable product with features like
                            custom colors, fonts and elements.
                        </p>
                        <p> Scroll down to see the result.</p>
                        <button onClick={ this.scrollWindow } className="button button__round"><i
                            className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                    </div>

                    { /*<img className="startpage__image" src={ GlitchImage } style={styles} alt="Glitch Profile" />*/ }
                </section>
                <img className="case-study__header__img" src={ img1 } alt="Refitness Case Study"/>
                <section className="case-study__info container">
                    <div>
                        <h3>Project</h3>
                        <p>Smartbokr App <br/> A easy way to book a Real Estate Agent for a housing valuation. </p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p> Create an web application to sell to different Real Estate Agents companies, in different
                            countries.<br/>
                            It should be customisable and every client should be able to put their own graphic profile
                            on it, too feel like a part of their website.</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>
                            I had the role as Product Designer in a theme of 4 people including a project manager, back
                            end developer,
                            front end developer.
                            I was responsible to ensure the best possible
                            experience for our users.
                        </p>
                        <p>
                            By working across the entire product lifecycle, from product discovery to product
                            development and through multiple
                            The app was developed in React.JS and I was also responsible for JSX, CSS and animations.
                        </p>
                    </div>
                </section>

                <section className="case-study__info container">
                    <div>
                        <h3>The process</h3>
                        <p>We started of with interviews with Real Estate Agents and their bosses. Potential users in
                            the age of 30-50.</p>
                        <p>Then we did competitive analysis to collect data to help us get started. Then we move on to
                            create personas. </p>

                    </div>


                    <div>
                        <p>Here's an example of lo-fi mockups I created in Balsamiq based on the research.</p>
                    </div>
                    <img className="case-study__info--100" src={ img2 } alt="Refitness Case Study wireframe"/>
                    <h3>Branding and Design guidelines</h3>
                    <img className="mobile-mockup" src={ img5 } alt="Smartbokr logo"/>
                    <img className="mobile-mockup case-study__info--100" src={ img6 } alt="Smartbokr design guidelines"/>
                    <h3>A mobile first approach</h3>
                    <p>Our interviews learned that most of our clients would promote the application via social media
                        platforms, so it was a natural thing for us to have a mobile first approach.</p>
                </section>
                <img className="mobile-mockup case-study__info--100" src={ img3 }
                     alt="Refitness Case Study startpage"/>

                <Link onClick={this.pageTransition} to="/case/smartbokrwebsite">
                    <section className="contactMe">
                        <h2>Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i> SmartBokr Product Landing Page</h2>
                    </section>
                </Link>

            </article>
        );
    }
}