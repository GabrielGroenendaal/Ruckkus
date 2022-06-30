
import React from 'react'
import ModalCloseButton from '../../modal/modal_close_button'




class ServerCreateForm extends React.Component {

      constructor(props) {
            super(props)

            const defaultServer = `${props.currentUser.username}'s server`
            console.log(props)
            this.state = {
                  name: defaultServer,
                  is_public: props.is_public
            }

            this.handleSubmit = this.handleSubmit.bind(this)

      }

      handleSubmit(e) {
            e.preventDefault();
            this.props.createServer(this.state).then(() => this.props.closeModal())
      }

      update() {
            return e => this.setState({ name: e.currentTarget.value })
      }

      render() {
            let error = (this.props.errors.length > 0) ? 'Must be between 3 and 100 in length' : '';

            return (
                  <form className="create-server-shell modal-light-theme" onSubmit={this.handleSubmit}>
                        {ModalCloseButton(this.props)}

                        <div className="create-server-header">
                              <h3>Customize your server</h3>
                              <div>
                                    Give your new server a personality with a name and icon.
                                    You can always change it later.
                              </div>
                        </div>

                        <div className="create-server-content">
                              <div>{error}</div>
                              <div className="create-server-input">
                                    <label>SERVER NAME</label>
                                    <input
                                          type="text"
                                          value={this.state.name}
                                          onChange={this.update()}
                                    />
                              </div>
                              <div className="server-disclaimer">
                                    By creating a server, you agree to Discord's <span><a className="server-modal-link-text" href="https://discord.com/guidelines">Community Guidelines</a></span>
                              </div>
                        </div>
                        <div className="create-server-footer">
                              <div
                                    type="button"
                                    onClick={() => this.props.openModal('serverPublicForm')}
                                    className="server-modal-back-button"
                              >Back</div>
                              <button type="submit">Create</button>
                        </div>
                  </form>

            )
      }
}

export default ServerCreateForm