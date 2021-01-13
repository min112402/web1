import React from 'react'
import Footer from "../Footer/Footer.js"
import contactBackground from "../../contactBackground.jpeg"
import "./Contact.css"
export default function Contact() {
    return (
        <div>
            <div className="body">
                <div className="contactContainer">
                    <a href="https://www.instagram.com/kwon_thefact0ry/" target="_blank">
                    <img className="contactBackground" src={contactBackground} alt=""></img></a>
                    <div>
                        <h2>Contact</h2>
                        Instagram : <a href="https://www.instagram.com/kwon_thefact0ry/" target="_blank">@kwon_thefact0ry</a>
                        <br></br>
                        e-mail : naxya0517@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}
