import React from "react";
import twitter_icon from "../images/twitter-icon.svg"
import facebook_icon from "../images/facebook-icon.svg"
import instagram_icon from "../images/instagram-icon.svg"
import github_icon from "../images/github-icon.svg"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/ijaeshi"><img src={twitter_icon} /></a>
            <a href="https://www.facebook.com/joshua.yin.1253/"><img src={facebook_icon} /></a>
            <a href="https://www.instagram.com/ijaeshi/"><img src={instagram_icon} /></a>
            <a href="https://github.com/Subjective/"><img src={github_icon} /></a>  
        </div> 
    )
}