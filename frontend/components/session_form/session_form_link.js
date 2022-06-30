import React from 'react'
import { Link } from 'react-router-dom'

const SessionFormLink = (props) => {
      if (props.formType === 'signup') {
            return (
                  <div className="session-link-container">
                        <Link to="/login">Already have an account?</Link>
                  </div>
            )
      } else {
            return (
                  <div className="session-link-container">
                        <span>Need an account? <Link to="/signup">Register</Link></span>
                  </div>
            )
      }
}

export default SessionFormLink;