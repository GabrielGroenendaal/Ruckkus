import React from "react";

import ServerIndexContent from "./server_index_content";
import ModalCloseButton from "../../modal/modal_close_button";
class ServerIndex extends React.Component {
      constructor(props) {
            super(props)
            this.handleClick = this.handleClick.bind(this)
      }

      componentDidMount() {
            this.props.fetchServers();
      }

      handleClick(id) {
            this.props.createServerMembership({
                  user_id: this.props.currentUser.id,
                  server_id: id
            })
            this.props.closeModal()
      }

      render() {
            return (
                  <div className="modal-light-theme">
                        {ModalCloseButton(this.props)}

                        <div className="server-index-modal-shell">
                              <div className="server-modal-header">
                                    <h3>Join a Server</h3>
                              </div>
                              <ServerIndexContent handleClick={this.handleClick} servers={this.props.servers} />
                        </div>

                  </div>
            )
      }
}

export default ServerIndex;