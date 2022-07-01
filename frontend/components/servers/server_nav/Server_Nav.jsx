import React from 'react';

import ServerNavNewServerButton from './server_nav_new_server_button';
import ServerNavServerSearch from './server_nav_server_search';
import ServerNavConversations from './server_nav_conversations';
import ServerNavList from './server_nav_list';
import { matchPath } from 'react-router-dom';


class ServerNav extends React.Component {
      constructor(props) {
            super(props)
      }

      componentDidMount() {
            const match = matchPath(this.props.history.location.pathname, { path: `/channels/:serverid/channelId` })
            this.props.fetchConversations()
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

                              {ServerNavConversations(this.props)}

                              <div className="gulf"></div>

                              {ServerNavList(this.props)}

                              <div className="gulf"></div>

                              {ServerNavNewServerButton(this.props)}

                              {ServerNavServerSearch(this.props)}

                        </div>
                  </div>
            )

      }
}

export default ServerNav