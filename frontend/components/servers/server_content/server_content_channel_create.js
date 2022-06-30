import React from 'react'

const CreateChannel = props => {
      if (props.server.owner_id === props.currentUser.id) {
            return (
                  <div
                        className="server-nav-channels-plus"
                        onClick={() => props.openModal("createChannel")}
                  >
                        <svg aria-hidden="false" width="18" height="18" viewBox="0 0 18 18"><polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                  </div>
            )
      }
}

export default CreateChannel;
