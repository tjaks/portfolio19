import React, { Component } from 'react';
import ScrollDownArrow from '../../media/arrow-down-animation.gif';
import GlitchImage from '../../media/profil-glitch.gif';


export default class Jumbotron extends Component {

    constructor(props) {
        super(props);
        this.changeFixedbody = this.changeFixedbody.bind(this);
        this.state = { 
            x: 0, 
            y: 0,
        };
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

    _onMouseMove(e) {
        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
      }

    render() {
        const styles = {
            transform: `rotateX(` + -this.state.y/30 + `deg) rotateY(` + -this.state.x/30 + `deg) scale3d(1, 1, 1)`
        }
        return (
            <article  onMouseMove={this._onMouseMove.bind(this)}>
             <section className="startpage">
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
                        My name is Tommy Jaks, I am passionate about
                            creating the best experiences on the web with a combination of design and code.
                    </p>
                    <p> Scroll down to see my selected work.</p>
                    <button onClick={this.scrollWindow} className="button button__round"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                </div>

                <img className="startpage__image" src={ GlitchImage } style={styles} alt="Glitch Profile" />
                </section>
            </article>

        );
    }
}