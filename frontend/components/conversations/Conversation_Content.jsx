
import React from 'react';
import { fetchServers } from '../../actions/server_actions';
import User from '../user/User';
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
                        <User />
                  </div>
            )
      }
}


export default ConversationContent;