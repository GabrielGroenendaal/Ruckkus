import { connect } from "react-redux";

import { createServer, fetchServers } from "../../../actions/server_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { createServerMembership } from "../../../actions/server_membership_actions";
import ServerCreateForm from "./server_create_form";

const mapStateToProps = (state) => {
      return {
            currentUser: state.entities.users[state.session.id],
            errors: state.errors.server
      }
}

const mapDispatchToProps = dispatch => {
      return {
            fetchServers: () => dispatch(fetchServers()),
            createServer: server => dispatch(createServer(server)),
            closeModal: () => dispatch(closeModal()),
            openModal: modal => dispatch(openModal(modal)),
            createServerMembership: membership => dispatch(createServerMembership(membership))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerCreateForm);