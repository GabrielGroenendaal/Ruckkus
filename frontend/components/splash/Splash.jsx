import React from 'react';

class Splash extends React.Component {
      constructor(props) {
            super(props)
      }

      navigation_bar() {
            let linkText = this.props.currentUser ? 'Join the Ruckus' : 'Login'
            let new_url = (this.props.currentUser) ? '/channels' : '/login'

            return (
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
                        <button className="nav-splash-button" onClick={() => { this.props.history.push(new_url) }}>{linkText}</button>

                  </nav>
            )
      }

      render() {
            let new_url = (this.props.currentUser) ? '/channels' : '/login'
            
            return (
                  <div className="splash-container">
                        <div className="splash-content">
                              <header className="splash-navbar">
                                    {this.navigation_bar()}
                              </header>
                              <main className="splash-main">
                                    <div className="main-splash-content">
                                          <h1 className="splash-main-h1">IMAGINE A PLACE...</h1>
                                          <div className="splash-main-description">
                                                      ...where you can belong to a school club, a gaming group, or a worldwide art community. 
                                                      Where just you and a handful of friends can spend time together. 
                                                      A place that makes it easy to talk every day and hang out more often.
                                          </div>
                                          <button className="splash-button" onClick={() => { this.props.history.push(new_url) }}>Join the Ruckus</button>
                                    </div>
                              </main>
                        </div>
                  </div>
            )
      }
}

export default Splash;