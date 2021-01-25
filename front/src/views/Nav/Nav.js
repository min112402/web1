import React from 'react'
import {Link} from "react-router-dom"
import './Nav.css'
import logo from "../../logo.png"
import img2 from "../../img2.png"
import { render } from '@testing-library/react'
function Nav() {
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
            <div className="nav">
                <div className="logoWrapper" >
                    <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                </div>
                <div className="linkWrapper" id ="linkWrapper">                   
                    <Link to="/"><img className="logo responsive" src={logo} alt="logo"onClick={closeNavbar}/></Link>                      
                    <Link to="/shop" style={{ textDecoration: 'none' }}onClick={closeNavbar}>SHOP</Link>                       
                    <Link to="/portfolio" style={{ textDecoration: 'none' }}onClick={closeNavbar}>PORTFOLIO</Link>                      
                    <Link to="/contact" style={{ textDecoration: 'none' }}  onClick={closeNavbar}>CONTACT</Link>                      
                    <a href="#" class="icon" onClick={toggleNavbar}>
                        <i class="fa fa-bars"></i>
                    </a>                                 
                </div>
                <div className="imageWrapper">
                    <Link to="/"><img className="image" src={img2} alt="img2"/></Link>
                </div>
            </div>
        )
}


export default Nav
