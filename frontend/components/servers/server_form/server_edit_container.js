import { connect } from "react-redux";

import ServerEdit from "./server_edit";
import { deleteServer, editServer } from "../../../actions/server_actions";
import { closeModal } from "../../../actions/modal_actions";
import { deleteServerMembership } from "../../../actions/server_membership_actions";

const mapStateToProps = state => {
      return {
            currentUserId: state.session.id,
            servers: state.entities.servers
      }
};

const mapDispatchToProps = dispatch => {
      return {
            editServer: server => dispatch(editServer(server)),
            deleteServer: serverId => dispatch(deleteServer(serverId)),
            deleteServerMembership: membership => dispatch(deleteServerMembership(membership)),
            closeModal: () => dispatch(closeModal())
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerEdit)
