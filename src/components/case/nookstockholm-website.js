import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';
import img1 from '../../media/nook-bg.jpg';
import img2 from '../../media/nookvideo2.mp4';
import img3 from '../../media/smartbokr-web-desktop-startpage.jpg';
import img4 from '../../media/refitness-movie.gif';
import img5 from '../../media/smartbokr-web-mobile-mockup.jpg';
import img6 from '../../media/smartbokr-app-States.png';


export default class nookstockholmWebsite extends Component {

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
        window.scroll({top: height, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <article>
                <div className="page-transition">
                    <h2>Nook Stockholm Website</h2>
                </div>
                <section className="case-study__jumbotron">
                    <div className="case-study__headline">
                        <a className="open-external-link" href="http://www.nookstockholm.com" target="_blank">visit site<i
                            className="fa fa-external-link"></i></a>
                        <h1><span>nookstockholm.com</span></h1>
                        <h5>Website based on Wordpress for a hairdresser studio.</h5>

                    </div>
                    <div className="case-study__textline">
                        <p>
                            A website to promote the Nook stockholm as a high end, trendsetting hairdresser studio. With
                            all the latest technologies and products.
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
                        <h3>Client</h3>
                        <p>
                            Nook Stockholm always strive to ensure that you as a customer receive a professional and
                            safe approach.</p><p> Whether you cut the tops or want a brand new look, the idea is that you
                            should leave us with a feel-good feeling.</p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p> Nook Stockholm reached out to me to get a new website, that is easy to edit content and works for
                            all devices. <br/>The design should represent the company and promote them as fashionable
                            hairdressers.</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>
                            Freelance, Design and Development.
                        </p>
                    </div>
                </section>

                <section className="container">
                    <video className="case-study__info--shadow case-study__info--100" src={ img2 } loop autoPlay
                           poster={ img1 }/>
                </section>
                <Link onClick={ this.pageTransition } to="/case/nordea">
                    <section className="contactMe">
                        <h2>Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i> Nordea</h2>
                    </section>
                </Link>
            </article>
        );
    }
}