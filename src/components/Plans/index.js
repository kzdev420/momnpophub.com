import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './styles.scss'
import background3Img from '../../assets/images/home-back3.png'

const styles = {
    back: {
        backgroundImage: `url(${background3Img})`
    }
}

export default class Plans extends Component {
    constructor() {
        super()
        this.state = {
            gotoBusinessInvitation: false
        }
    }

    render() {
        if (this.state.gotoBusinessInvitation) {
            return (
                <Redirect to="/free-business-invitation"/>
            )
        }

        return (
            <div className="back3" style={styles.back}>
                <div className="mnph-main-container">
                    <div className="plans-frame">
                        <span className="title">Plans</span>
                        <div className="desc">
                            <p>We have 3 plans which were created keeping in mind small businesses. Our rates are 90% lower than competitors. Request for a free business invite by clicking {
                                this.props.path === 'aboutus' ? (
                                <Link to="/free-business-invitation">here</Link>
                                ) : (
                                    <a href="#momnpop">here</a>
                                )
                            } and our representatives will help you with the application process to be on platform and plan selection process.</p>
                        </div>
                        <div className="plans">
                            <div className="plan-item">
                                <span className="plan-title">starter</span>
                                <div className="title-divid"></div>
                                <div className="price-section">
                                    <div className="currency-unit"><span>$</span></div>
                                    <div className="price"><span>4</span></div>
                                    <div className="type"><span>&nbsp;&nbsp;/&nbsp;</span><span>coupon redemed</span></div>
                                </div>

                                <div className="actions" align="center">
                                    <button onClick={() => this.setState({gotoBusinessInvitation: true})}>
                                        <span className="free">Free</span><br />
                                        <span className="reg">Business Registration</span>
                                    </button>
                                </div>

                                <div className="content-item">
                                    <span className="val">Advertise max 5</span><br />
                                    <span className="desc">Coupons per month</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Personal Coupon Analytics</span><br />
                                    <span className="desc">Dashboard & Analytics</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">No</span><br />
                                    <span className="desc">Customer Acquisition Consultation</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Local-50 miles radius</span><br />
                                    <span className="desc">Customer Acquisition Radius</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Email</span><br />
                                    <span className="desc">Support</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">No contract, Monthly</span><br />
                                    <span className="desc">Billing frequency</span>
                                </div>
                            </div>

                            <div className="plan-item">
                                <span className="plan-title">growth</span>
                                <div className="title-divid"></div>
                                <div className="price-section">
                                    <div className="currency-unit"><span>$</span></div>
                                    <div className="price"><span>40</span></div>
                                    <div className="type"><span>&nbsp;&nbsp;/&nbsp;monthly</span></div>
                                </div>

                                <div className="actions">
                                    <button onClick={() => this.setState({gotoBusinessInvitation: true})}>
                                        <span className="free">Free</span><br />
                                        <span className="reg">Business Registration</span>
                                    </button>
                                </div>

                                <div className="content-item">
                                    <span className="val">Advertise max 10</span><br />
                                    <span className="desc">Coupons per month</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Personal & local coupon analytics</span><br />
                                    <span className="desc">Dashboard & Analytics</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">1 email consultation every 3 months</span><br />
                                    <span className="desc">Customer Acquisition Consultation</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Local & National</span><br />
                                    <span className="desc">Customer Acquisition Radius</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Email</span><br />
                                    <span className="desc">Support</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">No contract, Monthly</span><br />
                                    <span className="desc">Billing frequency</span>
                                </div>
                            </div>

                            <div className="plan-item">
                                <span className="plan-title">unlimited</span>
                                <div className="title-divid"></div>
                                <div className="price-section">
                                    <div className="currency-unit"><span>$</span></div>
                                    <div className="price"><span>99</span></div>
                                    <div className="type"><span>&nbsp;&nbsp;/&nbsp;monthly</span></div>
                                </div>

                                <div className="actions">
                                    <button onClick={() => this.setState({gotoBusinessInvitation: true})}>
                                        <span className="free">Free</span><br />
                                        <span className="reg">Business Registration</span>
                                    </button>
                                </div>

                                <div className="content-item">
                                    <span className="val">Advertise unlimited</span><br />
                                    <span className="desc">Coupons per month</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Personal, local & national coupon analytics</span><br />
                                    <span className="desc">Dashboard & Personal Analytics</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">30 min call every month</span><br />
                                    <span className="desc">Customer Acquisition Consultation</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Local & National</span><br />
                                    <span className="desc">Customer Acquisition Radius</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">Personal consultant & Email</span><br />
                                    <span className="desc">Support</span>
                                </div>

                                <div className="content-item">
                                    <span className="val">No contract, Monthly</span><br />
                                    <span className="desc">Billing frequency</span>
                                </div>
                            </div>
                        </div>

                        <div className="aboutus-btn-free-business-invitation">
                            <button onClick={() => this.setState({gotoBusinessInvitation: true})}>Free Business Invitation</button>
                            <div className="aboutus-btn-desc" align="center">
                                <span>In a rush? Text 'Invite' to (901) 437-6146</span>
                            </div>
                        </div>
                    </div>

                    {
                        this.props.contactus && (
                            <div className="contactus-frame">
                                <span className="title">Contact us</span>
                                <div className="desc">
                                    <p>Please feel free to send your questions to <a href="mailto:contact@momnpophub.com">contact@momnpophub.com</a>.<br />We love helping small businesses.</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}