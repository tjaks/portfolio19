import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';
import img1 from '../../media/Startpage-2019april.png';
import img2 from '../../media/nookvideo2.mp4';


export default class quedrCrm extends Component {

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
                    <h2>Quedro CRM</h2>
                </div>
                <section className="case-study__jumbotron">
                    <div className="case-study__headline">
                        <a className="open-external-link" href="https://www.quedro.com" rel="noopener noreferrer"
                           target="_blank">visit site<i
                            className="fa fa-external-link"></i></a>
                        <h1><span>Quedro CRM</span></h1>
                        <h5>Customer Relationship Manager for the digital Real Estate Agent.</h5>

                    </div>
                    <div className="case-study__textline">
                        <p>
                            Quedro CRM enables real estate chains to effectively build, manage and
                            maintain their sales process and sales pipe. Built explicitly for real estate agents,
                            Quedro CRMenables you to save money, time and improve your performance.
                        </p>
                        <p>
                            <b>Scroll down to see the result.</b>
                        </p>
                        <button onClick={ this.scrollWindow } className="button button__round"><i
                            className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                    </div>

                </section>
                <img className="case-study__header__img case-study__info--shadow" src={ img1 }
                     alt="Refitness Case Study"/>

                <section className="case-study__info container">
                    <div>
                        <h3>Project</h3>
                        <p>-</p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p>-</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>
                            Im proud to say that my job, as the <b>Design Lead</b>,
                            is to make sure that the design system is updated and that the whole team keeps our
                            <b>UX/UI-standards</b> and keep brand consistency.
                            I deliver data based prototypes to ensure our users a simple, beautiful and user friendly
                            UI, in which helps them be more efficient in their work.
                            I am also proud to be responsible for the CSS(SASS and BEM), HTML and animations.
                            The product team is based on 10 people, backend developers, frontend developers, project
                            manager, product owner and me as a designer.
                        </p>
                    </div>
                </section>
                <section className="case-study__info container coming-soon">
                    <h3>More coming soon!</h3>
                </section>

                { /*<section className="container">*/ }
                { /*<img  className="case-study__header__img" src={ img1 }  alt="Refitness Case Study" />*/ }
                { /*</section>*/ }
                <Link onClick={ this.pageTransition } to="/case/smartbokrapp">
                    <section className="contactMe">
                        <h2>Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i> SmartBokr App</h2>
                    </section>
                </Link>
            </article>
        );
    }
}