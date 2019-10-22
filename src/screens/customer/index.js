import React, { Component } from 'react';
import DefaultTemplate from '../../templates/default';
import isEmail from 'validator/lib/isEmail';
import database from '../../config';
import './styles.scss';
import backgroundImg from '../../assets/images/custom-back.png';
import icCheck from '../../assets/icons/ic_check.png';

const styles = {
    back: {
        backgroundImage: `url(${backgroundImg})`
    }
}

class CustomerInvitationScreen extends Component {
    constructor() {
        super()
        this.state = {
            isSubmitted: false,
            email: '',
            errors: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    onBack = () => {
        this.setState({isSubmitted: false});
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                if (value === '') {
                    errors.email = 'Enter your email address.';
                } else if (!isEmail(value)){
                    errors.email = 'Invalid email address.';
                } else {
                    errors.email = null;
                }
                break;
            default:
                break;
        }
    
        this.setState({errors, [name]: value});
    }

    onSubmit = () => {

        let errors = this.state.errors;
        if (this.state.email === ''){
            errors.email = 'Enter your email address.';
        }

        if (errors.email === null) {
            const ref = database.ref('custom-invitation').push();
            ref.set({
                id: ref.key,
                email: this.state.email
            }).then(() => {
                this.setState({isSubmitted: true});
            }).catch(error => {
                console.log(error)
            })
        } else {
            this.setState({errors})
        }
    }

    render() {
        let errors = this.state.errors;
        return (
            <DefaultTemplate path="customer-invitation">
                <div className="custom-back" style={styles.back}/>
                <div className="mnph-main-container">
                    {
                        this.state.isSubmitted ? (
                            <div className="confirm-frame" align="center">
                                <img src={icCheck} alt="got it!"/>
                                <div className="got-it">
                                    <span className="title">Got It!</span>
                                    <p>Thank you for your interest in joining Mom N’ Pop Hub. We will keep you posted as we get closer to our launch. </p>
                                </div>
                                <span className="back-to-home" onClick={() => this.onBack()}>back to home</span>
                            </div>
                        ) : (
                            <div className="c-main-frame" align="center">
                                <span className="title">Request Customer Invitation</span>
                                <div className="desc">
                                    <p>We are working hard to bring our customers access to Mom n’ Pop Hub. Our platform promises to be one stop shop for customers to connect with small businesses locally & nationally. We would love to keep in touch and send a personal invitation. Please leave your email address and we will keep in touch. </p>
                                </div>
                                <div className="c-form">
                                    <div className="form-input">
                                        {
                                            this.state.errors.email ? (
                                                <input className="npmh-input invalid" name="email" value={this.state.email} type="email" placeholder="Enter Email Address..." onChange={(event) => this.handleChange(event)} />
                                            ) : (
                                                <input className={this.state.errors.email === undefined ? "npmh-input" : "npmh-input valid"} name="email" value={this.state.email} type="email" placeholder="Enter Email Address..." onChange={(event) => this.handleChange(event)} />
                                            )
                                        }
                                        <span className="input-error">{this.state.errors.email}</span>
                                    </div>
                                    <button className={errors.email === null ? "submit" : "submit invalid"} onClick={() => this.onSubmit()}><i className="fa fa-long-arrow-right "/></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </DefaultTemplate>
        )
    }
}

export default CustomerInvitationScreen;