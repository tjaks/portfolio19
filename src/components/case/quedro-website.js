import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';
import img1 from '../../media/quedro-startpage.png';
import img2 from '../../media/quedro-startpage-video.mp4';
import img3 from '../../media/smartbokr-web-desktop-startpage.jpg';
import img4 from '../../media/refitness-movie.gif';
import img5 from '../../media/smartbokr-web-mobile-mockup.jpg';
import img6 from '../../media/smartbokr-app-States.png';


export default class quedroWebsite extends Component {

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
                    <h2>Quedro Website</h2>
                </div>
                <section className="case-study__jumbotron">
                    <div className="case-study__headline">
                        <a className="open-external-link" href="www.quedro.com" target="_blank">visit site<i className="fa fa-external-link"></i></a>
                        <h1>
                            <span>Quedro.com</span>
                        </h1>
                        <h5>Company website.</h5>
                    </div>

                    <div className="case-study__textline">
                        <p>
                        A company website to promote Quedro as a leader in the CRM for Real estate agents -business.
                        </p>
                        <p> Scroll down to see the result.</p>
                        <button onClick={ this.scrollWindow } className="button button__round"><i
                            className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                    </div>
                </section>
                <img className="case-study__header__img case-study__info--shadow" src={ img1 } alt="Refitness Case Study"/>
                <section className="case-study__info container">
                    <div>
                        <h3>Project</h3>
                        <p>Company Website for Quedro. </p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p> ... </p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>
                            The project where a team of three, me; as designer and developer, the project manager and the sales manager.
                        </p>
                    </div>
                </section>

                <section className="container">
                    <div>
                        <h3>Screens</h3>
                    </div>

                    <video className="case-study__info--shadow case-study__info--100" src={ img2 } loop autoPlay
                           poster={ img1 }/>
                </section>
                <Link onClick={this.pageTransition} to="/case/nookstockholm">
                    <section className="contactMe">
                        <h2>Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i> Nook Stockholm Web</h2>
                    </section>
                </Link>
            </article>
        );
    }
}