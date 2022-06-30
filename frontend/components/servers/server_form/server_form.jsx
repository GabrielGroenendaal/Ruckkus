import React from "react";
import ModalCloseButton from "../../modal/modal_close_button";

class ServerForm extends React.Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (
                  <div className="form-server-shell  modal-light-theme">
                        {ModalCloseButton(this.props)}

                        <div className="form-server-header server-modal-header">
                              <h3>Create a server</h3>
                              <div>
                                    Your server is where you and your friends hang out.
                                    Make yours and start talking.
                              </div>
                        </div>

                        <div className="form-server-content" >
                              <div className="server-button-shell" onClick={() => this.props.openModal('formMakeServerPublic')}>
                                    <div className="server-button-imagetext">
                                          <img
                                                src={window.server_create}
                                                alt="create-server-icon"
                                                className="server-form-icon"
                                          />
                                          <div>Create My Own</div>
                                    </div>
                                    <img src={window.server_modal_arrow} alt="create-server-icon" className="server-form-icon"/>
                              </div>
                        </div>
                        <div className="form-server-footer">
                              <div onClick={() => this.props.openModal('indexServer')} className="server-form-search">Join a Server</div>
                        </div>
                  </div>
            )
      }
}

export default ServerForm;