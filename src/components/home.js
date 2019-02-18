import React, { Component } from 'react';
import Jumbotron from './startpage/jumbotron';
import IntroContent from './startpage/intro-content';
import CaseSection from './startpage/case-section';
import ContactMe from './startpage/contactme';


export default class Home extends Component {
    render() {
        return (
            <span>
                    <Jumbotron />
                    {/*<IntroContent />*/}
                    <CaseSection />
                    <ContactMe />
            </span>
        );
    }
}