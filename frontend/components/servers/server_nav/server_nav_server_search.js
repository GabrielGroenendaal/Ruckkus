import React from 'react'

const ServerNavServerSearch = (props) => {
      return (
            <div
                  className="server-navigation-button server-extra-button"
                  onClick={() => props.openModal('indexServer')}>
                  <i className="fas fa-compass"></i>
            </div>
      )
}

export default ServerNavServerSearch;