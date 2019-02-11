import React, { Component } from 'react';


export default class OurFunctions extends Component {
    render() {
        return (
            <footer className="footer">
                        <div className="footer__section">
                            <div className="">
                                <h3>Kontakta mig.</h3>
                            </div>
                            <div className="">
                                <a href="#" className="p hoverBG"> <span> 070-346 93 03 </span></a>
                                <a href="#" className="p hoverBG"> <span> tommy@tommyjaks.com </span></a>
                            </div>
                        </div>
                        <div className="footer__section">
              
                                <h3> Sociala medier.</h3>
                    
                            <div className="">
                                <img src="/media/socialMediaIcons/facebook-logo.png" />
                                <img src="/media/socialMediaIcons/instagram-logo.png" />
                                <img src="/media/socialMediaIcons/linkedin-logo.png" />
                            </div>
                        </div>
            </footer>
        );
    }
}