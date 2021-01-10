import React from 'react'
import {ParallaxProvider, Parallax} from 'react-scroll-parallax'
import "./LandingPage.css"
import landingPageLogo from "../../landingPageLogo.png"
import background from "../../background.jpeg"

class LandingPage extends React.Component {
    

    render(){
        return (
            <div class="landingPage">
                <ParallaxProvider>
                    <div class="backgroundWrapper">
                        <img class="background" src={background} alt=""></img>
                    </div>          
                    <Parallax y={[0,0]}>
                        <div class="LogoWrapper">
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </div>
        )   
    }
}

export default LandingPage
