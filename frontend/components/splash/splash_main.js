import React from "react";

const SplashMain = (props) => {
      let new_url = (props.currentUser) ? '/channels' : '/login'

      return (
            <main className="splash-main">
                  <div className="main-splash-content">
                        <h1 className="splash-main-h1">IMAGINE A PLACE...</h1>
                        <div className="splash-main-description">
                              ...where you can belong to a school club, a gaming group, or a worldwide art community.
                              Where just you and a handful of friends can spend time together.
                              A place that makes it easy to talk every day and hang out more often.
                        </div>
                        <button className="splash-button" onClick={() => { props.history.push(new_url) }}>Join the Ruckus</button>
                  </div>
            </main>
      )
}

export default SplashMain;