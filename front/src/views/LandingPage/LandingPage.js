import React from 'react'
import {ParallaxProvider, Parallax} from 'react-scroll-parallax'
import "./LandingPage.css"
import background from "../../background.png"
import people from "../../people.png"
import man1 from "../../man1.png"
import man2 from "../../man2.png"
import hand from "../../hand.png"
import phone from "../../phone.png"
import ringing from "../../ringing.png"
import logo from "../../landingPageLogo.png"
import grass from "../../screen.png"
import mobile from "../../mobile.png"

class LandingPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        y: -9.5
      }
      this.scrollAction = this.scrollAction.bind(this)
      this.ringring = this.ringring.bind(this)
    }
    componentDidMount(){
      document.addEventListener('wheel', this.scrollAction);
    }
    componentWillUnmount(){

      document.removeEventListener('wheel', this.scrollAction);
    }
    ringring(){
      let phone = document.getElementById("phone")
      let ringing = document.getElementById("ringing")
      let loop = setInterval(()=>{
            if(this.state.y == -1){
              clearInterval(loop)
              clearTimeout(ringaring)
              return;
            }
            phone.style.display = 'none'
            ringing.style.display = 'block'
            var ringaring = setTimeout( () => {
                if(this.state.y == -1){
                  return;
                }
                phone.style.display = 'block'
                ringing.style.display = 'none'
            }, 1500)

        }, 2500)
    }
    scrollAction(event){
      if(event.deltaY>0){
        this.setState((state)=>({y: this.state.y + 1}))
      }
      else{
        this.setState((state)=>({y: this.state.y - 1}))
      }
      let man1 = document.getElementById("man1")
      let man2 = document.getElementById("man2")
      let hand = document.getElementById("hand")
      let bg2 = document.getElementById("bg2")
      let logo = document.getElementById("mainlogo")
      let grass = document.getElementById("grass")
      let phone = document.getElementById("phone")
      let ringing = document.getElementById("ringing")
      hand.style.top = this.state.y + 'vw'
      if(this.state.y >= -1){
        setTimeout(()=> {
          man1.style.display = 'none'
          man2.style.display = 'block'
          man1.className = "man11"
          man2.className = "man22"
          phone.className = "phonee"
          ringing.className = "ringingg"
          phone.style.display = 'none'
          ringing.style.display = 'block'
        }, 400)
        setTimeout(()=> {
          bg2.style.display = 'block'
        }, 1400)
        setTimeout(()=> {
          logo.style.display = 'block'
        }, 2400)
        this.state.y = -1
        document.removeEventListener('wheel', this.scrollAction)
      }else if(this.state.y <= -9.75){
        this.state.y = -9.75
        hand.style.display = 'none'
        grass.style.display = 'block'
      }else{
        hand.style.display = 'block'
        grass.style.display = 'none'
      }
    }


    render(){
        return (
            <div className="landingPage">
                <div className="mobileWrapper">
                    <img className="mobile" src={mobile} alt=""></img>
                </div>
                <div className="backgroundWrapper" onLoad={this.ringring}>
                    <img className="background2" id="bg2" src={people} alt=""></img>
                    <img className="background" src={background} alt=""></img>
                    <img className="hand" id="hand" src={hand} alt=""></img>
                    <img className="grass" id="grass" src={grass} alt=""></img>
                    <img className="phone" id="phone" src={phone} alt=""></img>
                    <img className="ringing" id="ringing" src={ringing} alt=""></img>
                </div>
                <div className="manWrapper">
                    <img className="man1" id="man1" src={man1} alt="" ></img>
                    <img className="man2" id="man2" src={man2} alt="" ></img>
                    <img className="mainlogo" id="mainlogo" src={logo} alt="" ></img>
                </div>
            </div>
        )
    }
}

export default LandingPage
