
import React from "react"; 

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    if (this.props.user) {
        return (
          <div>
            <h1>Welcome {this.props.user.username}!</h1>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )
    } else {
        return (
          <div>
              <h1>You are not logged in to Ruckus!</h1>
              
          </div>
        )
    }
  }
}
export default Greeting;