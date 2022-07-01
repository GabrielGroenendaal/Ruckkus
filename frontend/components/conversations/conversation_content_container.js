import { connect } from "react-redux";

import ConversationContent from "./Conversation_Content";
import { fetchCurrentUser, logout } from "../../actions/session_actions";
import { fetchServer, fetchServers, deleteServer } from "../../actions/server_actions";
import { deleteServerMembership } from "../../actions/server_membership_actions";
import { fetchConversations, fetchConversation } from "../../actions/conversation_actions";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const currentUsersConversations = state => {
      if (Object.keys(state.entities.conversations).length < state.entities.users[state.session.id].conversations.length) return [];
      return state.entities.users[state.session.id].conversations.map(conversationId => (
            state.entities.conversations[conversationId]
      ))
}

const mapStateToProps = (state) => {
      return {
            currentUser: state.entities.users[state.session.id],
            channels: Object.values(state.entities.channels),
            conversations: currentUsersConversations(state),
            conversationsId: state.entities.users[state.session.id].ids
      }
}

const mapDispatchToProps = dispatch => {
      return {
            fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
            logout: () => dispatch(logout()),
            openModal: modal => dispatch(openModal(modal)),
            fetchConversations: () => dispatch(fetchConversations()),
            fetchConversation: id => dispatch(fetchConversation(id)),
            fetchServers: () => dispatch(fetchServers()),
            fetchServer: id => dispatch(fetchServer(id)),
            deleteServer: id => dispatch(deleteServer(id)),
            deleteServerMembership: id => dispatch(deleteServerMembership(id))
      }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationContent));