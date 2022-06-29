import { connect } from "react-redux";

import ConversationContent from "./Conversation_Content";
import { fetchCurrentUser, logout } from "../../actions/session_actions";
import { fetchServer, fetchServers, deleteServer } from "../../actions/server_actions";
import { deleteServerMembership } from "../../actions/server_membership_actions";
import { fetchConversations } from "../../actions/conversation_actions";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {
      return {
            currentUser: state.entities.users[state.session.id],
            channels: Object.values(state.entities.channels),
            conversations: Object.values(state.entities.conversations)
      }
}

const mapDispatchToProps = dispatch => {
      return {
            fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
            logout: () => dispatch(logout()),
            openModal: modal => dispatch(openModal(modal)),
            fetchConversations: () => dispatch(fetchConversations()),
            fetchServers: () => dispatch(fetchServers()),
            fetchServer: id => dispatch(fetchServer(id)),
            deleteServer: id => dispatch(deleteServer(id)),
            deleteServerMembership: id => dispatch(deleteServerMembership(id))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContent);