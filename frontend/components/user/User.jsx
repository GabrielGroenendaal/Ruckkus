import React from 'react';
import { fetchServers } from '../../actions/server_actions';


class User extends React.Component {
      constructor(props) {
            super(props)
      }

      render() {
            return (
                        <div className="user-options-shell">
                              <div className="user-info-shell">

                              </div>
                              <div className="user-icon-shell">

                              </div>
                        </div>
            )
      }
}

export default User;