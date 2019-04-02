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
                                <a href="tel:+46793133747" className="p hoverBG hoverBG--black-text"> <span> +46 79-313 37 47 </span></a>
                                <a href="mailto:tommyjaks@hotmail.com" className="p hoverBG hoverBG--black-text"> <span> hello@tommyjaks.com </span></a>
                            </div>
                        </div>
                        <div className="footer__section">
              
                                <h3> Social media.</h3>
                    
                            <div>
                                <img alt="tommy facebook link" src={ facebook } />
                                <img alt="tommy insta link" src={ instagram } />
                                <img alt="tommy linkedin link" src={ linkedin } />
                            </div>
                        </div>
            </footer>
        );
    }
}