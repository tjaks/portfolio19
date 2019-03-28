import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fixedBody } from '../utils';

export default class RiktigVykort extends Component {

    render() {
        return (
            <section>
                <div className="page-transition">
                    <h2>Riktiga vykort</h2>
                </div>
                <div className="container">
                    <h1>Riktiga vykort, postnord</h1>
                    <img src="/media/rvpost.png" />
                </div>
            </section>
        );
    }
}