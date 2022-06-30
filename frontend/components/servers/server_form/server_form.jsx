import React from "react";
import ModalCloseButton from "../../modal/modal_close_button";

class ServerForm extends React.Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (
                  <div className="server-form-container modal-light-theme">
                        {ModalCloseButton(this.props)}

                        <div className="server-form-header server-modal-header">
                              <h3>Create a server</h3>
                              <div>
                                    Your server is where you and your friends hang out.
                                    Make yours and start talking.
                              </div>
                        </div>

                        <div className="server-form-content" >
                              <div className="server-button-shell" onClick={() => this.props.openModal('formMakeServerPublic')}>
                                    <div className="server-button-imagetext">
                                          <img
                                                src="https://i.imgur.com/5QFRLV0.png"
                                                alt="create-server-icon"
                                                className="server-form-icon"
                                          />
                                          <div>Create My Own</div>
                                    </div>
                                    <img src="https://i.imgur.com/6QdDPXJ.png" alt="create-server-icon" className="server-form-icon"/>
                              </div>
                        </div>
                        <div className="server-form-footer">
                              <div onClick={() => this.props.openModal('indexServer')} className="server-form-search">Join a Server</div>
                        </div>
                  </div>
            )
      }
}

export default ServerForm;