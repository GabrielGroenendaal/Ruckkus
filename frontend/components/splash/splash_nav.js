import React from 'react'

import { Link } from "react-router-dom";

const SplashNav = (props) => {
      let linkText = props.currentUser ? 'Join the Ruckkus' : 'Login'
      let new_url = (props.currentUser) ? '/channels' : '/login'
      return (
            <header className="splash-navbar">
                  <nav className="splash-nav-header-container">
                        <div className="splash-logo">
                              <span className="splash-discord-logo">
                                    <i className="fab fa-discord"></i>
                              </span>
                              <span>Ruckkus</span>
                        </div>
                        <div className="splash-navigation-links">
                          
                                    <a href="https://github.com/GabrielGroenendaal/DiscordClone/" rel="noopener noreferrer" target="_blank">Github</a>
                            
                                    <a href="https://www.linkedin.com/in/gabriel-groenendaal-2b3b4515b/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                              
                              <a href="https://www.gabrielgroenendaal.com/" rel="noopener noreferrer" target="_blank">Portfolio</a>
                              <a href="https://angel.co/u/gabriel-groenendaal" rel="noopener noreferrer" target="_blank">AngelList</a>

                          
                        </div>
                        <button className="nav-splash-button" onClick={() => { props.history.push(new_url) }}>{linkText}</button>

                  </nav>
            </header>

      )
}

export default SplashNav;