import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from './utils';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: "",
            contactOverlay: false,
            pageTransition: false,
        };
        //bind to not lose context
        this.handleScroll = this.handleScroll.bind(this);
        this.showContact = this.showContact.bind(this);
        this.closeContact = this.closeContact.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.pageTransition = this.pageTransition.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener('mousedown', this.handleClickOutside);
        window.addEventListener('mousedown', this.showContact)
        window.addEventListener('mousedown', this.closeContact)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener('mousedown', this.showContact)
        window.removeEventListener('mousedown', this.closeContact)
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        if (scrollTop > 200) {
            this.setState({ isScrolled: "navigation--background" })
        }
        else {
            this.setState({ isScrolled: "" })
        }
    }

    pageTransition() {
        fixedBody();
    }

    showContact(e) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        this.setState({ contactOverlay: true })
    }

    closeContact(e) {
        document.body.style.overflow = 'scroll';
        document.body.style.position = 'relative';
        this.setState({ contactOverlay: false })
    }
    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    /**
     * if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.closeContact(event);
        }
    }
    
    render() {
        return (
            <header>
                <nav className={"navigation " + (this.state.isScrolled)}>
                    <Link to="/" >
                        {/*<img src="/media/logo.png" />*/}
                        tommyjaks.
                    </Link>
                    <ul>
                        <li>
                            <a onClick={this.showContact} className="hoverBG">
                                <span>Contact</span>
                            </a>
                        </li>
                        <li>
                            <Link onClick={this.pageTransition} to="/about" className="hoverBG">
                                <span>About</span>
                            </Link>
                        </li>
                        <li> 
                            <Link onClick={this.pageTransition} to="/" className="hoverBG">
                                <span>Home & Work</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={"contact " + (this.state.contactOverlay ? 'top0' : 'top-100')}>
                    <section className="container contact__container">
                        <div className="contact__close">
                            <a onClick={this.closeContact} className="p hoverCloseBG"><span>close</span></a>
                        </div>

                        <div className="row contact__element">
                  
                                <h1>Let's do it.</h1>
                                <div className="col-md-6">
                                    <h2><a className="hoverBG" href="mailto:tommy@tommyjaks.se" target="_blank"><span>tommy@tommyjaks.se</span></a></h2>
                                    <h2><a className="hoverBG" href="tel:+46793133747" target="_blank"><span>079 - 313 37 47</span></a></h2>
                                    <h2><a className="hoverBG" href="https://www.google.se/maps/place/Stockholm/@59.326242,17.8419719,11z/data=!3m1!4b1!4m5!3m4!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808" target="_blank"><span>Stockholm, Sweden</span></a></h2>
                                </div>
                                <div className="col-md-6">
                                    <h2><a className="hoverBG" href="https://github.com/tjaks" target="_blank"><span>github.com/tjaks</span></a></h2>
                                    <h2><a className="hoverBG" href="https://www.linkedin.com/in/tommyjaks/" target="_blank"><span> linkedin.com/tommyjaks</span></a></h2>
                                    <h2><a className="hoverBG" href="https://www.instagram.com/tommeh" target="_blank"><span>@tommyjaks</span></a></h2>
                                </div>
       
                        </div>
                    </section>
                </div>
            </header>
        );
    }
}