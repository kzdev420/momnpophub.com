import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoImg from '../../assets/images/momnpophub-logo.png'
import './styles.scss';

class NavDot extends Component {
    render() {
        return (
            <div className={this.props.navActive ? "active-dot" : "no-dot"}></div>
        )
    }
}

class NavItem extends Component {
    render () {
        const { path, cpath, name } = this.props
        
        if(path === cpath)
            return (
                <div className="nav-item active-item">
                    <NavDot navActive />
                    {name}
                </div>
            )

        return (
            <Link to={"/" + path}>
                <div className="nav-item general-item">
                    <NavDot />
                    {name}
                </div>
            </Link>
        )
    }
}

export default class MomnpophubHeader extends Component {
    constructor() {
        super()
        this.state = {
            navOpen: false
        }
    }

    render () {
        if(this.state.navOpen) {
            document.getElementsByTagName('body')[0].classList.add('nav-open')
        } else {
            document.getElementsByTagName('body')[0].classList.remove('nav-open')
        }

        return (
            <div className="mnph-header" align="center">
                <div className="mnph-main-container">
                    <div className="header-container">

                        <div className="header-content">
                            <div className="mnph-logo">
                                <Link to="/">
                                    <img src={logoImg} alt="Mom n Pop Hub Logo"/>
                                </Link>
                            </div>

                            <button 
                                type="button" 
                                onClick={() => this.setState({navOpen: !this.state.navOpen})} 
                                className={this.state.navOpen ? "navbar-toggler toggled" : "navbar-toggler"}>

                                <span className="navbar-toggler-bar nav-top-bar"></span>
                                <span className="navbar-toggler-bar nav-middle-bar"></span>
                                <span className="navbar-toggler-bar nav-bottom-bar"></span>
                            </button>
                        </div>
                        
                        <div className="mnph-main-navigation" onClick={() => this.setState({navOpen: false})}>
                            <div className="mnph-navigation-container">
                                <ul className="mnph-navbar">
                                    <li className={this.props.path === "aboutus" ? "mm-nav-item" : "mm-nav-item non-active"}>
                                        <NavItem cpath={this.props.path} path="aboutus" name="About Us" />
                                    </li>
                                    <li className={this.props.path === "free-business-invitation" ? "mm-nav-item" : "mm-nav-item non-active"}>
                                        <NavItem cpath={this.props.path} path="free-business-invitation" name="Free Business Invitation" />
                                    </li>
                                    <li className={this.props.path === "customer-invitation" ? "mm-nav-item" : "mm-nav-item non-active"}>
                                        <NavItem cpath={this.props.path} path="customer-invitation" name="Customer Invitation" />
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-login">
                                <a href="https://business.momnpophub.com/login">
                                    <i className="fa fa-user"/>&nbsp;&nbsp;Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}