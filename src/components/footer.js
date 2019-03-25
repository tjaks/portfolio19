import React, { Component } from 'react';
import facebook from '../media/socialMediaIcons/facebook-logo.png';
import instagram from '../media/socialMediaIcons/instagram-logo.png';
import linkedin from '../media/socialMediaIcons/linkedin-logo.png';

export default class OurFunctions extends Component {
    render() {
        return (
            <footer className="footer">
                        <div className="footer__section">
                            <div className="">
                                <h3>Contact.</h3>
                            </div>
                            <div className="">
                                <a href="#" className="p hoverBG"> <span> 079-313 37 47 </span></a>
                                <a href="#" className="p hoverBG"> <span> hello@tommyjaks.com </span></a>
                            </div>
                        </div>
                        <div className="footer__section">
              
                                <h3> Sociala media.</h3>
                    
                            <div className="">
                                <img src={ facebook } />
                                <img src={ instagram } />
                                <img src={ linkedin } />
                            </div>
                        </div>
            </footer>
        );
    }
}