import React from 'react'
import {ParallaxProvider, Parallax} from 'react-scroll-parallax'
import "./LandingPage.css"
import background from "../../background.png"
import people from "../../people.png"
import man1 from "../../man1.png"
import man2 from "../../man2.png"
import hand from "../../hand.png"
import logo from "../../landingPageLogo.png"
import grass from "../../screen.png"

class LandingPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        y: -9.5
      }
      this.scrollAction = this.scrollAction.bind(this)
    }
    componentDidMount(){
      document.addEventListener('wheel', this.scrollAction);
    }
    componentWillUnmount(){
      document.removeEventListener('wheel', this.scrollAction);
    }
    /* delay(gap){
        var now, then;
        then = new Date().getTime();
        now = then;
        while(now-then < gap){
          now = new Date().getTime();
        }
    } */
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
      hand.style.top = this.state.y + 'vw'
      if(this.state.y >= -1){
        setTimeout(()=> {
          man1.style.display = 'none'
          man2.style.display = 'block'
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
                <div className="backgroundWrapper">
                    <img className="background2" id="bg2" src={people} alt=""></img>
                    <img className="background" src={background} alt=""></img>
                    <img className="hand" id="hand" src={hand} alt=""></img>
                    <img className="grass" id="grass" src={grass} alt=""></img>
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
