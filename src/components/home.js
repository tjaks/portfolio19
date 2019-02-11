import React, { Component } from 'react';
import Jumbotron from './startpage/jumbotron';
import IntroContent from './startpage/intro-content';
import ContactMe from './startpage/contactme';


export default class Home extends Component {
    render() {
        return (
            <span>
                    <Jumbotron />
                    <IntroContent />
                    <ContactMe />
            </span>
        );
    }
}