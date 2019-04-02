import React, { Component } from 'react';
import img1 from '../media/tommy-bildspel.gif';

export default class About extends Component {
    render() {
        return (
            <article className="about transition-item detail-page">
                <div className="page-transition">
                    <h2>About Tommy </h2>
                </div>
                <section className="container">
                    <section className="about__start">
                        <h1>Chill,<span/> but not too chill.</h1>
                        <div className="about__header">
                            <div>
                                <h3>Hello!</h3>

                                <h4 className="about__header--grey">
                                    My name is Tommy Jaks, I am based in Stockholm and have been working professionally
                                    as a Product Designer and
                                    Frontend Developer for 5 years.
                                </h4>
                            </div>
                            <div>
                                <h3>Creative, data driven problem solver.</h3>
                                <h4 className="about__header--grey">
                                    I always strive to make my design choices on arguments based on customer insights
                                    and best practice for digital service development.</h4>
                            </div>
                            <i className="fa fa-long-arrow-down fa-2x" aria-hidden="true"></i>

                        </div>
                    </section>
                    <section className="about__companies">
                        <header className="about__paragraph">
                            <h3>Companies I have worked with & for</h3>
                        </header>
                        <ul className="about__paragraph">
                            <li><span>reFitness</span></li>
                            <li><span>Skimsafe</span></li>
                            <li><span>Quedro</span></li>
                            <li><span>Nordea Retail Banking</span></li>
                            <li><span>Capgemini</span></li>
                            <li><span>Nowo</span></li>
                            <li><span>Nook Stockholm</span></li>
                            <li><span>Vinoteket.se</span></li>
                            <li><span>Huvudsta Centrum</span></li>
                            <li><span>Villa Kärnbo B&B</span></li>
                        </ul>
                    </section>

                    <div className="about__paragraph">
                        <h3>Tommy Jaks</h3>
                        <p>As a creative and <b>rigorous</b> designer with background as a developer, I regard user-centered
                            design, empathy, and creativity as my design philosophy. With a <b>deep understanding</b> of
                            technology and development.</p>
                        <p>
                            I believe it is <b>essential for a designer</b> to think about problems, outside the box, and
                            always
                            create user experience from a panoramic view.
                            Get familiar with the life-cycle of product development and explore the potential needs of
                            consumers through <b>multiple iterations.</b>
                        </p>
                    </div>
                    <hr/>
                    <div className="about__paragraph">
                        <img className="case-study__info--100" src={ img1 } alt="Refitness Case Study wireframe"/>
                        <h3>I am also...</h3>
                        <p>
                            <b>A football fan</b>, I love watching Premier League, play FIFA and play football with my
                            friends.
                        </p>
                        <p>
                            <b>Pianist</b>, I have been playing the piano for over 13 years. Mostly covering my own
                            versions of
                            popular rock or pop music. <br/>
                            But also creating my own.
                        </p>
                        <p>
                            Interested in <b>gym and fitness.</b> I am working out 3-5 days a week, which today is a
                            sanctuary for me. Like a therapy session. <br/>
                        </p>
                        <p>
                            Interested in <b>furniture and interior design.</b> I have designed some furniture and
                            together with my father, we created them as well. Which I someday may take further! <br/>
                        </p>
                        <p>
                            <b>A traveler.</b> I love going on trips and traveling the world, to explore new cultures,
                            try new food and see different architectural styles. <br/>
                        </p>

                        <p>
                            <b>An Adrenaline seeker.</b> I am a big fan of different board sports, like snowboarding and
                            longboard. Recently I learned to surf in Sri Lanka, which is my new thing to get better at! <br/>
                        </p>
                    </div>
                </section>
            </article>
        );
    }
}