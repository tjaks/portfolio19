import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';
import img1 from '../../media/smartbokr-web-startpage.png';
import img2 from '../../media/smartbokr-web-wireframe.png';
import img3 from '../../media/smartbokr-web-desktop-startpage.jpg';
import img4 from '../../media/refitness-movie.gif';
import img5 from '../../media/smartbokr-web-mobile-mockup.jpg';
import img6 from '../../media/smartbokr-app-States.png';


export default class smartbokrWebsite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
        this.pageTransition = this.pageTransition.bind(this);
    }

    pageTransition() {
        fixedBody();
    }

    scrollWindow() {
        let height = window.innerHeight;
        window.scroll({ top: height, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <article>
                <div className="page-transition">
                    <h2>SmartBokr Website</h2>
                </div>
                <section className="case-study__jumbotron">
                    <div className="case-study__headline">
                    <a className="open-external-link" href="https://www.quedro.com" rel="noopener noreferrer"
                           target="_blank">visit site<i
                            className="fa fa-external-link"></i></a>
                        <h1>
                            <span>Smartbokr.com</span>
                        </h1>
                        <h5>Landing page for SmartBokr App.</h5>
                    </div>

                    <div className="case-study__textline">
                        <p>
                            A product page to promote the smartbokr application, high end landing page to feel modern
                            and smart.
                        </p>
                        <p> Scroll down to see the result.</p>
                        <button onClick={ this.scrollWindow } className="button button__round"><i
                            className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                    </div>
                </section>
                <img className="case-study__header__img case-study__info--shadow" src={ img1 }
                     alt="Refitness Case Study"/>
                <section className="case-study__info container">
                    <div>
                        <h3>Project</h3>
                        <p>If it’s not online - it does not exist. The old way, picking up the phone and call, does not
                            work anymore. Customers want to have access to your calendar, scheduling a meeting whenever
                            it suits the
                            customer.</p>
                        <p>
                            Without calling or visiting you. Exactly the same way we book a taxi, cinema tickets, test
                            drive for a new car etc. </p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p> Create a website for Quedro's SmartBokr application that promotes the product,<br/>
                            with a feeling of high end, digital and modern. </p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>
                            The project where a team of three, me; as designer and developer, the project manager and
                            the sales manager.
                        </p>
                    </div>
                </section>

                <section className="container">
                    <div>
                        <h3>The process</h3>
                    </div>

                    <img className="case-study__info--100" src={ img2 } alt="Refitness Case Study wireframe"/>
                    <img className="mobile-mockup case-study__info--shadow" src={ img5 } alt="Smartbokr logo"/>
                    <img className="case-study__info--100 case-study__info--shadow" src={ img3 }
                         alt="Refitness Case Study startpage"/>
                </section>
                <Link onClick={ this.pageTransition } to="/case/nookstockholm">
                    <section className="contactMe">
                        <h2>Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i> Nook Stockholm Web</h2>
                    </section>
                </Link>
            </article>
        );
    }
}