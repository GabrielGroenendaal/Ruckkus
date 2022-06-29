import React from 'react';
import ServerNavItems from './Server_Nav_Items'
import { matchPath } from 'react-router-dom';


class ServerNav extends React.Component {
      constructor(props) {
            super(props)
      }

      componentDidMount() {
            const match = matchPath(this.props.history.location.pathname, { path: `/channels/:serverid/channelId` })
            this.props.fetchConversations
            this.props.currentUser.servers.map(serverId => {
                  this.props.fetchServer(serverId).then(
                        () => {
                              if (match && match.params.serverId !== '@me') {
                                    this.props.fetchServer(match.params.serverId)
                              }
                        })
            })
      }

      render() {
            return (
                  <div className="server-navigation-container">
                        <div className="server-navigation-bar-container">

                              <div className="server-navigation-button server-navigation-icon-button" onClick={() => { this.props.history.push('/channels/@me') }}><i className="fab fa-discord"></i></div>
                              <div className="gulf"></div>

                              <ul>
                                    {
                                          this.props.servers.map(server => {
                                                return (
                                                      <ServerNavItems server={server} history={this.props.history} fetchServer={this.props.fetchServer} key={server.id} />
                                                )
                                          })
                                    }
                              </ul>
                              <div className="gulf"></div>

                              <div className="server-navigation-button server-extra-button" onClick={() => this.props.openModal('serverForm')}>
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


                              <div className="server-navigation-button server-extra-button" onClick={() => this.props.openModal('serverIndex')}><i className="fas fa-compass"></i></div>
                        </div>
                  </div>
            )

      }
}

export default ServerNav