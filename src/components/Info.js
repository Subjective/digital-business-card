import React from "react";

import portrait from "../images/portrait.jpeg"
import email_icon from "../images/email-icon.svg"
import linkedin_icon from "../images/linkedin-icon.svg"

export default function About() {
    return (
        <div className="info">
            <img src={portrait} className="info--portrait" />
            <h1 className="info--name">Joshua Yin</h1>
            <h2 className="info--title">Interlake Senior</h2>
            <h3 className="info--website">joshuayin.website</h3>
            <div className="info--buttons">
            <a href="mailto:joshjyin@email.com" target="_blank">
                <button className="info--email">
                    <img src={email_icon} /><h1>Email</h1>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/joshua-yin-a01544231/" target="_blank">
                <button className="info--linkedin">
                    <img src={linkedin_icon} /><h1>LinkedIn</h1>
                </button>
            </a>
            </div>
        </div>
    )
}