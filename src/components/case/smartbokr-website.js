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

    pageTransition(){
        fixedBody();
    }

    render() {
        return (
            <article>
                <div className="page-transition">
                    <h2>SmartBokr Website</h2>
                </div>
                <section className="case-study__jumbotron">
                    { /*<img className="arrow__animation" src={ ScrollDownArrow } alt="arrow down"/>*/ }
                    <div className="case-study__headline">
                        <h1>
                            <span>Smartbokr.com</span>
                        </h1>
                        <h5>Landing page for SmartBokr App.</h5>
                    </div>

                    <div className="case-study__textline">
                        <p>
                        A product page to promote the smartbokr application, high end landing page to feel modern and smart.
                        </p>
                        <p> Scroll down to see the result.</p>
                        <button onClick={ this.scrollWindow } className="button button__round"><i
                            className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                    </div>

                    { /*<img className="startpage__image" src={ GlitchImage } style={styles} alt="Glitch Profile" />*/ }
                </section>
                <img className="case-study__header__img case-study__info--shadow" src={ img1 } alt="Refitness Case Study"/>
                {/*<div className="case-study__header__img">*/}
                    {/*<video src={img1} loop autoPlay controls poster={img1} />*/}
                {/*</div>*/}
                <section className="case-study__info container">
                    <div>
                        <h3>Project</h3>
                        <p>Website for SmartBokr App </p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p> Create a website for Quedros SmartBokr application that promotes the product.<br/>
                            It should feel high end and digital. </p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>
                            The project where a team of three, me, as designer and programmer, the project manager and the sales manager. 
                        </p>
            
                    </div>
                </section>

                <section className="case-study__info container">
                    <div>
                        <h3>The process</h3>
                    </div>
           
                    <img className="case-study__info--100" src={ img2 } alt="Refitness Case Study wireframe"/>
                    <img className="mobile-mockup case-study__info--shadow" src={ img5 } alt="Smartbokr logo"/>
                    <img className="case-study__info--100 case-study__info--shadow" src={ img3 }
                         alt="Refitness Case Study startpage"/>
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