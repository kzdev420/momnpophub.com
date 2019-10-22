import React, { Component } from 'react';
import DefaultTemplate from '../../templates/default';
import ReactPlayer from 'react-player';
import { HowItWorks, Plans } from '../../components';
import { Redirect } from 'react-router-dom';
import './styles.scss';
import backgroundImg from '../../assets/images/home-back.png';
import manImg from '../../assets/images/man.png';
import simplifyBenefitImg from '../../assets/images/simplify-logo.png';
import powerBenefitImg from '../../assets/images/power-logo.png';
import retainBenefitImg from '../../assets/images/retain-logo.png';

const styles = {
    back: {
        backgroundImage: `url(${backgroundImg})`
    }
}

class AboutUsScreen extends Component {
    constructor() {
        super()
        this.state = {
            gotoBusinessInvitation: false
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        if (this.state.gotoBusinessInvitation) {
            return (
                <Redirect to="/free-business-invitation"/>
            )
        }

        return (
            <DefaultTemplate path="aboutus">
                <div className="aboutus-back" style={styles.back}/>
                <div className="mnph-main-container">
                    <div className="main-frame">
                        <img src={manImg} alt="about logo in desktop" className="man-img" />
                        <div className="aboutus-title">
                            <span>WE HELP SMALL BUSINESSES SUCCEED</span>
                        </div>
                        <div className="aboutus-btn-free-business-invitation">
                            <button onClick={() => this.setState({gotoBusinessInvitation: true})}>Free Business Invitation</button>
                            <div className="aboutus-btn-desc" align="center">
                                <span>In a rush? Text 'Invite' to (901) 437-6146</span>
                            </div>
                        </div>
                    </div>

                    <div className="aboutus-frame" align="left">
                        <span className="title">About us</span>

                        <div className="content">
                            <p>28 million small businesses exist across the US. These small businesses employ 50% of the workforce and invest heavily in their local communities, yet these businesses struggle to survive due to rising costs, shrinking their customer base, as competition from large businesses continues to rise.<br /><br />At Mom n’ Pop Hub we highlight small businesses, bringing awareness to your products and services. We take pride in being the only platform that focuses exclusively on small businesses. Using the power of marketing, analytics, and technology to help you grow, we take the guesswork out of customer acquisition.</p>
                        </div>
                    </div>

                    <div className="video-frame">
                        <div className="title"><span>story of small businesses (2:41)</span></div>
                        <ReactPlayer
                            playsinline
                            url='https://www.youtube.com/watch?v=dSwYHxV5lLY'
                            // url='https://www.youtube.com/watch?v=ygVxTTKWvdA'
                            config={{
                                wistia: {
                                    playerVars: { 
                                        autoPlay: false,
                                        videoFoam: true,
                                        autoSize: true
                                    }
                                },
                                youtube: {
                                    playerVars: {
                                        autoPlay: false,
                                        controls: true
                                    }
                                }
                            }}
                            width="100%"
                            height="100%"
                        />
                    </div>

                    <div className="benefits-frame" align="center">
                        <span className="title">Benefits for small business owners</span>
                        <div className="benefits">
                            <div className="benefit-item" align="center">
                                <img src={simplifyBenefitImg} alt="simplify benefit" />
                                <p>Simplify customer acquisition through small business promotion on a single platform as  opposed to multiple marketing platforms.</p>
                            </div>

                            <div className="benefit-item" align="center">
                                <img src={retainBenefitImg} alt="power benefit" />
                                <p>Retain and engage customers locally and nationally at a cost 90% cheaper than other platforms.</p>
                            </div>

                            <div className="benefit-item" align="center">
                                <img src={powerBenefitImg} alt="retain benefit" />
                                <p>Use the power of analytics and marketing to drive your small business growth, just like larger business at a fraction of the cost.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <HowItWorks />

                <Plans contactus path="aboutus"/>
            </DefaultTemplate>
        )
    }
}

export default AboutUsScreen;