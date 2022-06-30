
import React from 'react';
import { fetchServers } from '../../../actions/server_actions';
import User from '../../user/User';

class ServerContent extends React.Component {
      constructor(props) {
            super(props)
      }

      render() {
            return (
                  <div className="server-content-shell">
                        <div className="server-info-header">
                              
                        </div>
                        <User />
                  </div>
            )
      }
}

export default ServerContent; 