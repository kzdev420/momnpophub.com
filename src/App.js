import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.scss';
import {
    AboutUsScreen,
    FreeBusinessInvitationScreen,
    CustomerInvitationScreen,
    LoginScreen,
    TermsAndComditionsScreen
} from './screens'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={props => <AboutUsScreen {...props} />} />
                    <Route path="/aboutus" render={props => <AboutUsScreen {...props} />} />
                    <Route path="/free-business-invitation" render={props => <FreeBusinessInvitationScreen {...props} />} />
                    <Route path="/customer-invitation" render={props => <CustomerInvitationScreen {...props} />} />
                    <Route path="/login" render={props => <LoginScreen {...props} />} />
                    <Route path="/terms-conditions" render={props => <TermsAndComditionsScreen {...props} />} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}