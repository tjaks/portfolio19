import React, { Component } from 'react';
import ScrollDownArrow from '../../media/arrow-down-animation.gif';
import GlitchImage from '../../media/profil-glitch.gif';


export default class Jumbotron extends Component {

    constructor(props) {
        super(props);
        this.changeFixedbody = this.changeFixedbody.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.changeFixedbody);
    }

    changeFixedbody() {
        setTimeout(() => {
            document.body.style.overflow = 'scroll';
            document.body.style.position = 'relative';
        }, 2000);
    }

    scrollWindow() {
        let height = window.innerHeight;
        window.scroll({top: height, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <article className="startpage">
                <div className="loading">
                </div>
                <span className="arrow__animation" > scroll down </span>
                <img className="arrow__animation" src={ ScrollDownArrow } alt="arrow down"/>
                <div className="startpage__headline-container">
                </div>
                <div className="startpage__headline">
                    <h1>Digital Product Designer <span> based in Stockholm.</span>
                    </h1>
                </div>

                <div className="startpage__textline">
                    <p>
                        My name is Tommy, I am passionate about
                            creating the best experiences on the web with a combination of design and code.
                    </p>
                    <p> Scroll down to see my selected work.</p>
                    <button onClick={this.scrollWindow} className="button button__round"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                </div>

                <img className="startpage__image" src={ GlitchImage } alt="Glitch Profile" />
            </article>

        );
    }
}