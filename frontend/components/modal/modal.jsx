import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { closeModal } from '../../actions/modal_actions'
import ServerIndexContainer from '../servers/server_index/server_index_container'
import ServerFormContainer from '../servers/server_form/server_form_container'
import ServerPublicFormContainer from '../servers/server_form/server_public_form_container'
import ServerCreateFormContainer from '../servers/server_form/server_create_form_container'
import ServerEditFormContainer from '../servers/server_form/server_edit_container'
import UserOptionsContainer from '../user/user_options_container'
import CreateChannelContainer from '../channels/create_channel_container'
import EditChannelContainer from '../channels/edit_channel_container'
class Modal extends React.Component {
      constructor(props) {
            super(props)
            this.state = { is_public: false }
            this.make_public = this.make_public.bind(this);
            this.make_private = this.make_private.bind(this);
      }

      make_public() {
            this.setState({ is_public: true });
      }

      make_private() {
            this.setState({ is_public: false });
      }

      render() {
            let component;


            switch (this.props.modal) {
                  case 'formServer':
                        component = <ServerFormContainer />;
                        break;
                  case 'formMakeServerPublic':
                        component = <ServerPublicFormContainer serverPublic={this.state.is_public} make_public={this.make_public} make_private={this.make_private} />
                        break;
                  case 'editServer':
                        component = <ServerEditFormContainer history={this.props.history} />;
                        break;
                  case 'createServer':
                        component = <ServerCreateFormContainer is_public={this.state.is_public} />;
                        break;
                  case 'indexServer':
                        component = <ServerIndexContainer />
                        break;
                  case 'userOptions':
                        component = <UserOptionsContainer />
                        break;
                  case 'createChannel':
                        component = <CreateChannelContainer />
                        break;
                  case 'editChannel':
                        component = <EditChannelContainer history={this.props.history} />
                        break;
                  // case 'createChannel':
                  // case 'editChannel':
                  default:
                        return null;
            }
            if (!this.props.modal) { return null }

            return (
                  <div className="modal-underlay" onClick={this.props.closeModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                              {component}
                        </div>
                  </div>
            )
      }
}

const mapStateToProps = state => {
      return {
            modal: state.ui.modal
      }
}

const mapDispatchToProps = dispatch => {
      return {
            closeModal: () => dispatch(closeModal())
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Modal));