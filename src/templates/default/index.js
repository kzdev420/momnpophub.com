import React, { Component } from 'react';
import {
    MomnpophubHeader,
    MomnpophubFooter,
    MomnpophubSocialInfo
} from '../../components'
import './styles.scss';

class DefaultTemplate extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <div className="momnpop" id="momnpop">
                <MomnpophubHeader path={this.props.path}/>
                {this.props.children}
                <MomnpophubSocialInfo />
                <MomnpophubFooter />
            </div>
        )
    }
}

export default DefaultTemplate;