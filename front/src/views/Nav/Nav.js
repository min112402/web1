import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './Nav.css'
import logo from "../../logo.png"
import img2 from "../../img2.png"
import { render } from '@testing-library/react'
import Easter from "./Easter"

function Nav() {
        var cnt = 0;
        const [isModalOn, setIsModalOn] = useState(false);
        function easterEgg(e){
          cnt++;
          if(cnt==3){
            setIsModalOn(true)
            cnt=0;
          }else setIsModalOn(false);
        }
        function toggleNavbar(e){
            e.preventDefault();
            var x = document.getElementById("linkWrapper");
            if(x.className === "linkWrapper"){
                x.className += " responsive";
            }else{
                x.className = "linkWrapper";
            }
        }
        function closeNavbar(e){
            var x = document.getElementById("linkWrapper");
            x.className = "linkWrapper";
        }
        return (
          <div>
            <div className="nav">
                <div className="logoWrapper" >
                    <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                </div>
                <div className="linkWrapper" id ="linkWrapper">
                    <Link to="/"><img className="logo responsive" src={logo} alt="logo"onClick={closeNavbar}/></Link>
                    <Link to="/shop" style={{ textDecoration: 'none' }}onClick={closeNavbar}>SHOP</Link>
                    <Link to="/portfolio" style={{ textDecoration: 'none' }}onClick={closeNavbar}>PORTFOLIO</Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}  onClick={closeNavbar}>CONTACT</Link>
                    <a href="#" className="icon" onClick={toggleNavbar}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <div className="imageWrapper">
                    <Link to="/"><img className="image" src={img2} alt="img2" onClick={easterEgg}/></Link>
                </div>
            </div>
            <div>
              { isModalOn && <Easter
                                setIsModalOn = {setIsModalOn} /> }
            </div>
          </div>
        )
}


export default Nav
