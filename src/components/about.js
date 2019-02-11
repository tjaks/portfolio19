import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
            <article className="about transition-item detail-page">
                <div className="page-transition">
                    <h2>About</h2>
                </div>
                <section className="container">
                <section className="about__start">
                     <h1>Lorem,<span /> ipsum not too chill.</h1>
                    <div className="about__textContent">
                            <h3>Im based in Stockholm and have been working professionally as a frontend developer for almost 2 years.</h3>
                            <h3>Im based in Stockholm and have been working professionally as a frontend developer for almost 2 years.</h3>
                        <i className="fa fa-long-arrow-down fa-2x" aria-hidden="true"></i>
                    </div>
                    </section>

                    <section className="about__companies">
                        <header className="about__textContent">
                            <h3>Companies I have worked with & for</h3>
                        </header>
                        <ul className="about__textContent">
                            <li> <a className="p hoverBG"> <span> Riktiga Vykort, PostNord</span></a></li>
                            <li> <a className="p hoverBG"> <span>Nordea Retail Banking</span></a></li>
                            <li> <a className="p hoverBG"> <span>Capgemini</span></a></li>
                            <li> <a className="p hoverBG"> <span>Nowo.se</span></a></li>
                            <li> <a className="p hoverBG"> <span>Nook Stockholm</span></a></li>
                            <li> <a className="p hoverBG"> <span>Vinoteket.se</span></a></li>
                            <li> <a className="p hoverBG"> <span>Huvudsta Centrum</span></a></li>
                            <li> <a className="p hoverBG"> <span>Villa Kärnbo B&B</span></a></li>
                        </ul>
                    </section>
                </section>
            </article>
        );
    }
}