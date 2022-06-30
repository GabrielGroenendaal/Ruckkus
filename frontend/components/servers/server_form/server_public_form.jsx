import React from "react";
import ModalCloseButton from "../../modal/modal_close_button";


class ServerPublicForm extends React.Component {
      constructor(props) {
            super(props)
      }

      handleClick(bool) {
            bool ? this.props.make_public() : this.props.make_private();
            this.props.openModal('createServer');
      }

      render() {
            return (
                  <div className="public-server-form-shell modal-light-theme">
                        {ModalCloseButton(this.props)}

                        <div className="public-server-header server-modal-header">
                              <h3>Tell us more about your server</h3>
                              <div>
                                    In order to help you with your setup,
                                    is your new server for just a few friends or a larger community?
                              </div>
                        </div>
                        <div className="public-server-content">
                              <div className="server-button-shell" onClick={() => this.handleClick(false)}>
                                    <div className="server-button-imagetext">
                                          <img src="https://i.imgur.com/s0Ft3iR.png" alt="create-server-icon" className="server-form-icon"/>
                                          <div>For me and my friends</div>
                                    </div>
                                    <img src="https://i.imgur.com/6QdDPXJ.png"
                                          alt="create-server-icon"
                                          className="server-form-icon"
                                    />
                              </div>
                              <div className="server-button-shell" onClick={() => this.handleClick(true)}>
                                    <div className="server-button-imagetext">
                                          <img src="https://i.imgur.com/SD9FXet.png" alt="create-server-icon" className="server-form-icon"/>
                                          <div> For a club or community</div>
                                    </div>
                                    <img src="https://i.imgur.com/6QdDPXJ.png" alt="create-server-icon" className="server-form-icon"/>
                              </div>
                              <div>Not sure? You can <span className="server-modal-link-text" onClick={() => this.handleClick(false)}>skip this question</span> for now.</div>
                        </div>
                        <div className="public-server-footer">
                              <div onClick={() => this.props.openModal('formServer')} className="server-modal-back-button">Back</div>
                        </div>
                  </div>
            )
      }
}

export default ServerPublicForm