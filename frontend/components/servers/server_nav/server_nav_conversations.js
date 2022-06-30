

import React from "react";


const ServerNavConversations = (props) => {
      return (
            <div
                  className="server-navigation-button server-navigation-icon-button"
                  onClick={() => { props.history.push('/channels/@me') }}>
                  <i className="fab fa-discord"></i>
            </div>
      )
}

export default ServerNavConversations;