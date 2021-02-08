import React, { useState } from 'react'
import logo from "../../landingPageLogo.png"
import './Nav.css'
import * as Nav from './Nav'
import jh from "../../jh.jpg"
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
                  <img className="img" src={profile} />
              </div>
              <div className="information">
                <strong> 권혁진 </strong> <br />
                <a href="https://www.instagram.com/kwon_thefact0ry/" target="_blank"> @??? </a> <br/>
                designer
              </div>
            </div>
            <div className = "profile">
              <div>
                <img className="img" src={profile} />
              </div>
              <div className="information">
                <strong> 이상민 </strong> <br />
                <a href="https://www.instagram.com/kwon_thefact0ry/" target="_blank"> @??? </a> <br/>
                full-stack web dev.
              </div>
            </div>
          </div>
          <div className="foot">
           TEAM ???
          </div>
        </div>
      </div>
    );
  }
}

export default Easter
