import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

export default class MomnpophubFooter extends Component {
    render () {
        return (
            <div className="mnph-footer" align="center">
                <div className="mnph-main-container">
                    <div className="bottom-nav">
                        <Link to="/">About Us</Link>
                        <Link to="/free-business-invitation">Free Business Invitation</Link>
                        <Link to="/customer-invitation">Customer Invitation</Link>
                        <a href="https://app.termly.io/document/terms-of-use-for-website/cfb6f95a-3618-425f-b4c8-44bd59264001">Terms & Conditions</a>
                    </div>
                    <div className="copyright">
                        <span>© 2019 Mom&Pop. All rights reserved.</span>
                    </div>
                </div>
            </div>
        )
    }
}