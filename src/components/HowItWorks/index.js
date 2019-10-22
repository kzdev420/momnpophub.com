import React, { Component } from 'react';
import './styles.scss';
import background2Img from '../../assets/images/home-back2.png'

const styles = {
    back: {
        backgroundImage: `url(${background2Img})`
    }
}

export default class HowItWorks extends Component {
    render() {
        return (
            <div className="back2" style={styles.back}>
                <div className="mnph-main-container">
                    <div className="howitworks-frame">
                        <span className="title">How it works</span>
                        <div className="desc">
                            <p>We are the only platform connecting small businesses to millions of customers who love supporting you! The 3 steps below show how Mom N’ Pop Hub’s platform works.</p>
                        </div>
                        <div className="contents">
                            <div className="content-item">
                                <div className="item-no">
                                    <span>01.</span>
                                </div>
                                <div className="item-desc" align="left">
                                    <div className="item-title">
                                        <span>Get Free Invitation</span>
                                    </div>
                                    <p>Our goal is to ensure we are an exclusive platform for small businesses, aka mom n’ pop shops. Our platform is tailored to assist in growing your small business. Submit your information to receive your free invitation to join our platform.</p>
                                </div>
                            </div>
                            <div className="content-item">
                            <div className="item-no">
                                <span>02.</span>
                                </div>
                                <div className="item-desc" align="left">
                                    <div className="item-title">
                                        <span>Promoting Your Business</span>
                                    </div>
                                    <p>Attract new customers locally and nationally in an instant by offering coupons for your products and services. 57% of shoppers are motivated to complete a first time purchase when coupons are available.</p>
                                </div>
                            </div>
                            <div className="content-item">
                            <div className="item-no">
                                <span>03.</span>
                                </div>
                                <div className="item-desc" align="left">
                                    <div className="item-title">
                                        <span>Analyze and Maintain Growth</span>
                                    </div>
                                    <p>Track your customer growth progress by reviewing our analytics dashboard, personalized to your business. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}