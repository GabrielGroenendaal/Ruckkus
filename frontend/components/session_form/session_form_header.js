import React from 'react'

const SessionFormHeader = (props) => {
      if (props.formType === 'signup') {
            return (
                  <div className="session-form-header">
                        <h3>Create an account</h3>
                  </div>
            )
      } else {
            return (
                  <div className="session-form-header">
                        <h3>Welcome back!</h3>
                        <div>We're so excited to see you again!</div>
                  </div>
            )
      }
}

export default SessionFormHeader;