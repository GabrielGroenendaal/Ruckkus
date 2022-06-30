import React from 'react';
import { fetchServers } from '../../../actions/server_actions';
import UserContainer from '../../user/user_container';
import CreateChannel from './server_content_channel_create';
import ChannelOptions from './server_content_channel_options';
import { matchPath } from 'react-router-dom';


class ServerContent extends React.Component {
      constructor(props) {
            super(props)
            console.log(props)
            this.closeDropdown = this.closeDropdown.bind(this)
            this.serverInfo = this.serverInfo.bind(this)
            this.serverOptions = this.serverOptions.bind(this)
      }
      
      // componentDidMount() {
      //       const match = matchPath(this.props.history.location.pathname, { path: `/channels/:serverId/channelId` })
      //       this.props.fetchConversations
      //       this.props.currentUser.servers.map(serverId => {
      //             this.props.fetchServer(serverId).then(
      //                   () => {
      //                         if (match && match.params.serverId !== '@me') {
      //                               this.props.fetchServer(match.params.serverId)
      //                         }
      //                   })
      //       })
      //       this.props.server = window.getState().entities.servers[this.props.serverId]
      // }
      
      serverOptions() {
            const dropdown_items = document.querySelector('.dropdown-container');
            if (dropdown_items) { 
                  dropdown_items.classList.add("show")
            }
      }

      closeDropdown() {
            const dropdown_items = document.querySelector('.dropdown-container');
            if (dropdown_items) { 
                  dropdown_items.classList.remove("show")
            }
      }

      handleLeave() {
            this.props.deleteServerMembersip({ user_id: this.props.currentUser.id, server_id: this.props.server.id })
            this.props.history.push(`/channels/@me`)
      }
      
      dropdown() {
            let dropdown = ''
            if (this.props.server.owner_id === this.props.currentUser.id) {
                  dropdown = (
                        <div className="dropdown-container" onClick={() => this.closeDropdown()}>
                              <div onClick={() => this.props.openModal('editServer')}>
                                    <div className="dropdown-option" id="server-settings">
                                          Server Settings
                                          <svg
                                                aria-hidden="false"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
                                          </svg>
                                    </div>
                              </div>
                        </div>
                  )
            } else {
                  dropdown = (
                        <div className="dropdown-container" onClick={() => this.closeDropdown()}>
                              <div onClick={() => this.handleLeave('leave')}>
                                    <div className="dropdown-option" id="leave-server">
                                          Leave Server
                                          <svg
                                                aria-hidden="false"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"><path fill="currentColor" d="M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"></path>
                                          </svg>
                                    </div>
                              </div>
                        </div>
                  )
            }
            return dropdown;
      }

      serverInfo() {
            return (
                  <div>
                              <div className="server-info-header" >
                                    <h3>{this.props.server.name}</h3>
                                    <svg className="server-info-button" onClick={() => this.serverOptions()} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                              </div>

                              <div className="server-dropdown">
                                    {this.dropdown()}
                              </div>

                              <div className="server-channels">
                                    <div className="server-nav-channels-header">
                                          <div> TEXT CHANNELS</div>
                                          { CreateChannel(this.props) }
                                    </div>
                                    <ul>
                                          {
                                                this.props.channels.map(channel => {
                                                      return (
                                                            <li className="server-nav-channel" key={channel.id} onClick={() => this.props.history.push(`/channels/${this.props.server.id}/${channel.id}`)}>
                                                                  <div className="channel-handle">
                                                                        <div className="channel-hashtag">
                                                                              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>
                                                                        </div>
                                                                        <div className="server-nav-channel-name">
                                                                              {channel.name}
                                                                        </div>
                                                                  </div>
                                                                  {ChannelOptions(this.props)}
                                                            </li>
                                                      )
                                                })
                                          }
                                    </ul>
                              </div>
                        </div>
            )
      }

      render() {

            return (
                  <div className="server-content-shell">
                        {this.serverInfo()}
                        <UserContainer />
                  </div>
            )
      }
}

export default ServerContent;