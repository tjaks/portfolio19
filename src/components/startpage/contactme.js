import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';


export default class ContactMe extends Component {
    constructor(props){
        super(props);
        this.pageTransition = this.pageTransition.bind(this);
    }

    pageTransition(){
        fixedBody();
    }

    render() {
        return (

            <Link onClick={this.pageTransition} to="/about">
                <section className="contactMe">
                    <h2>About me <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h2>
                </section>
            </Link>
        );
    }
}