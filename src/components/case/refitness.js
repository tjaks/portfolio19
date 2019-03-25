import React, { Component } from 'react';
import ScrollDownArrow from '../../media/arrow-down-animation.gif';
import img1 from '../../media/refitness-mobile.png';
import img2 from '../../media/refitness-wireframe.png';



export default class refitness extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }

    _onMouseMove(e) {
        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }

    render() {
        const styles = {
            transform: `rotateX(` + -this.state.y/30 + `deg) rotateY(` + -this.state.x/30 + `deg) scale3d(1, 1, 1)`
        }
        return (
            <article>
                <div className="page-transition">
                    <h2>reFitness</h2>
                </div>
                <section className="startpage">
                    {/*<img className="arrow__animation" src={ ScrollDownArrow } alt="arrow down"/>*/}
                    <div className="startpage__headline-container">
                    </div>
                    <div className="startpage__headline">
                        <h1>reFitness, Swedens second largest<span>Online Personal Trainer</span>
                        </h1>
                    </div>

                    <div className="startpage__textline">
                        <p>
                            I was lucky to be trusted with the redesign of reFitness webb.
                            With 75% of all their website visits coming from mobile, It was obvious of having a mobile first approach.
                            80% of all their visitors are females between 25-40 years old,
                            so I designed for them, but I didn't want to scare away the rest, being men 30-50 years old.
                        </p>
                        <p> Scroll down to see the result.</p>
                        <button onClick={this.scrollWindow} className="button button__round"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></button>
                    </div>

                    {/*<img className="startpage__image" src={ GlitchImage } style={styles} alt="Glitch Profile" />*/}
                </section>

                <section className="case-study__info container">
                    <img className="case-study__header__img" src={ img1 } style={styles} alt="Refitness Case Study" />
                    <div>
                        <h3>Client</h3>
                        <p>ReFitness.se, <br/> At reFitness you  get personal training and diet plans online from a trained PT.</p>
                    </div>
                    <div>
                        <h3>Brief</h3>
                        <p>A total redesign of their website. With wireframes and Information Architecture. Delivered in invision studio and balsamiq.</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>My Role as a Designer is to work across the entire product lifecycle, from product discovery to product development and through multiple product iterations.
                        </p>
                        <p> To ensure the best possible experience for the users. </p>
                    </div>
                </section>

                <section className="case-study__info container">
                    <div>
                        <h3>I started of with interviews, competitions analysis and creating personas</h3>
                    </div>
                    <img className="" src={ img2 } style={styles} alt="Refitness Case Study wireframe" />

                    <div>
                        <h3>Next was creating different lo-fi versions, to discuss with my customer to get input and feedback.</h3>
                        <p>We decided to go with images in column 2 , with column 3 as an example of showing a banner for campaigns.</p>
                    </div>
                    <img className="" src={ img2 } style={styles} alt="Refitness Case Study wireframe" />
                </section>
            </article>
        );
    }
}