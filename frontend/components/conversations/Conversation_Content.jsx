
import React from 'react';
import { fetchServers } from '../../actions/server_actions';
import UserContainer from '../user/user_container';
class ConversationContent extends React.Component {
      constructor(props) {
            super(props)
      }

      render() {
            return (
                  <div className="server-content-shell">
                        <div className="conversation-list-shell">
                              <header>
                                    
                              </header>
                        </div>
                        <UserContainer />
                  </div>
            )
      }
}


export default ConversationContent;