import React from 'react'
import Footer from "../Footer/Footer.js"
import contactBackground from "../../contactBackground.jpeg"
import "./Contact.css"
export default function Contact() {
    return (
        <div>
            <div className="body">
                <div className="contactContainer">
                    <img className="contactBackground" src={contactBackground} alt=""></img>
                    <div>
                        <h2>Contact</h2>
                        Instagram : <a href="https://www.instagram.com/kwon_thefact0ry/">@kwon_thefact0ry</a>
                        <br></br>
                        e-mail : naxya0517@gmail.com
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
