import React, { useState } from 'react'
import logo from "../../landingPageLogo.png"
import './Nav.css'
import * as Nav from './Nav'
import jh from "../../jh.jpg"
import hj from "../../hj.jpg"
import profile from "../../profile.png"

class Easter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOn: true
    }
  }

  render(){

    return (
      <div className = "modalWrapper" onClick = {()=>(this.props.setIsModalOn(false))} >
          <div className = "modalContainer" onClick = {(e)=>e.stopPropagation()}>
            <div className = "modalNav">
                CREDIT
            </div>
          <div className="profileWrapper">
            <div className = "profile">
                <div>
                  <a href="https://www.instagram.com/kwon_thefact0ry/" target="_blank">
                    <img className="img" src={jh} />
                  </a>
                </div>
              <div className="information">
                <strong> 강지혁 </strong> <br />
                <a href="https://www.instagram.com/kangjirm/" target="_blank"> @kangjirm </a> <br/>
                full-stack web dev. <br />
                +8210-3623-1620
              </div>
            </div>
            <div className = "profile">
              <div>
                  <img className="img" src={hj} />
              </div>
              <div className="information">
                <strong> 권혁진 </strong> <br />
                <a href="https://www.instagram.com/kwon__hkj1n/" target="_blank"> @kwon__hkj1n </a> <br/>
                designer <br />
                naxya0517@gmail.com
              </div>
            </div>
            <div className = "profile">
              <div>
                <img className="img" src={profile} />
              </div>
              <div className="information">
                <strong> 이상민 </strong> <br />
                <a href="https://github.com/min112402" target="_blank"> @min112402 </a> <br/>
                full-stack web dev. <br />
              min112402@gmail.com
              </div>
            </div>
          </div>
          <div className="foot">
           &lt; TEAM HRSH &gt;
          </div>
        </div>
      </div>
    );
  }
}

export default Easter
