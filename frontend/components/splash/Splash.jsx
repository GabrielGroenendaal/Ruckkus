import React from 'react';
import SplashNav from './splash_nav';
import SplashMain from './splash_main';


class Splash extends React.Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (
                  <div className="splash-container">
                        <div className="splash-content">
                              {SplashNav(this.props)}
                              {SplashMain(this.props)}
                        </div>
                  </div>
            )
      }
}

export default Splash;