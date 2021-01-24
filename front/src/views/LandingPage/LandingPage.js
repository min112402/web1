import React from 'react'
import {ParallaxProvider, Parallax} from 'react-scroll-parallax'
import "./LandingPage.css"
import background from "../../background.png"
import people from "../../people.png"
import man1 from "../../man1.png"
import man2 from "../../man2.png"

class LandingPage extends React.Component {
    

    render(){
        return (
            <div class="landingPage">      
                <div class="backgroundWrapper">
                    <img class="background" src={background} alt=""></img>
                    <img class="background2" src={people} alt=""></img>
                </div>          
                <div class="manWrapper">
                    <img class="man1" src={man1} alt=""></img>
                </div>             
            </div>
        )   
    }
}

export default LandingPage
