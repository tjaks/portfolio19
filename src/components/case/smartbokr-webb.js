import React, { Component } from 'react';
import nookVideoImg from '../../media/nook.png';
import nookVideo from '../../media/smartbokr-video.mp4';

export default class RiktigVykort extends Component {

    render() {
        return (
            <section className="case-study">
                <div className="page-transition">
                    <h2>SmartBokr.com</h2>
                </div>
           
                    <div className="case-study__header">
                    <h1>SmartBokr.com</h1>
                    <p>UI/UX, Development, Wordpress</p>
                    </div>

                    <div className="case-study__header-image--smartbokrwebb"></div>
          
                <div className="container">
                    <h2>A website to represent a modern hairdresser.</h2>
                    <p>
                        Nook Stockholm reached out to me to get a new website,<br/>
                         that represents them and their style and to revempt their online presence.
                    </p>
                    <hr />
                    <section className="case-study__info">
                        <div>
                            <h3>Client</h3>
                            <p>lorem....</p>
                        </div>
                        <div>
                            <h3>Brief</h3>
                            <p>lorem....</p>
                        </div>
                        <div>
                            <h3>Solution</h3>
                            <p>lorem....</p>
                        </div>
                        <div>
                            <h3>Role</h3>
                            <p>lorem....</p>
                        </div>
                    </section>
                </div>
                <div className="case-study__video-section">
                        <video src={nookVideo} loop autoPlay poster={nookVideoImg} />     
                </div>
            </section>
        );
    }
}