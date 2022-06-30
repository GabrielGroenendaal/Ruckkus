import React from 'react'

import { Link } from "react-router-dom";

const SplashNav = (props) => {
      let linkText = props.currentUser ? 'Join the Ruckus' : 'Login'
      let new_url = (props.currentUser) ? '/channels' : '/login'
      return (
            <header className="splash-navbar">
                  <nav className="splash-nav-header-container">
                        <div className="splash-logo">
                              <span className="splash-discord-logo">
                                    <i className="fab fa-discord"></i>
                              </span>
                              <span>Ruckus</span>
                        </div>
                        <ul className="splash-navigation-links">
                              <li><a href="https://github.com/GabrielGroenendaal/DiscordClone/" target="_blank">Github</a></li>
                              <li><a href="https://www.linkedin.com/in/gabriel-groenendaal-2b3b4515b/" target="_blank">LinkedIn</a></li>
                              <li><a href="https://www.gabrielgroenendaal.com/" target="_blank">Portfolio</a></li>
                        </ul>
                        <button className="nav-splash-button" onClick={() => { props.history.push(new_url) }}>{linkText}</button>

                  </nav>
            </header>

      )
}

export default SplashNav;