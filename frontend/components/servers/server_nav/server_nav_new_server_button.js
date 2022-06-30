import React from 'react'

const ServerNavNewServerButton = (props) => {
      return (
            <div className="server-navigation-button server-extra-button" onClick={() => props.openModal('formServer')}>
                  <svg
                        aria-hidden="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                  >
                        <path
                              fill="currentColor"
                              d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        ></path>
                  </svg>
            </div>
      )
}

export default ServerNavNewServerButton;