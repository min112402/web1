import React from 'react'
import {ParallaxProvider, Parallax} from 'react-scroll-parallax'
import "./LandingPage.css"
import landingPageLogo from "../../landingPageLogo.png"
import img1 from "../../img2.png"

class LandingPage extends React.Component {
    

    render(){
        return (
            <div class="landingPage">
                <ParallaxProvider>
                    <h1>Home</h1> 
                    <Parallax y={[-80,100]}>
                        <div class="logoWrapper">
                            <img class="landingPageLogo" src={landingPageLogo} alt=""></img>
                        </div>
                    </Parallax>
                    <Parallax y={[0,0]}>
                    <img class="landingPageLogo" src={img1} alt=""></img>
                    </Parallax>
                </ParallaxProvider>
            </div>
        )   
    }
}

export default LandingPage
