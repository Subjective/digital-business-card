import React from "react";
import twitter_icon from "../images/twitter-icon.svg"
import facebook_icon from "../images/facebook-icon.svg"
import instagram_icon from "../images/instagram-icon.svg"
import github_icon from "../images/github-icon.svg"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/ijaeshi" target="_blank"><img src={twitter_icon} /></a>
            <a href="https://www.facebook.com/joshua.yin.1253/" target="_blank"><img src={facebook_icon} /></a>
            <a href="https://www.instagram.com/ijaeshi/" target="_blank"><img src={instagram_icon} /></a>
            <a href="https://github.com/Subjective/" target="_blank"><img src={github_icon} /></a>  
        </div> 
    )
}