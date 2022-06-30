import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCurrentUser, logout } from "../../../actions/session_actions";
import { fetchServer, fetchServers, deleteServer } from "../../../actions/server_actions";
import { deleteServerMembership } from "../../../actions/server_membership_actions";
import { fetchConversations } from "../../../actions/conversation_actions";
import { openModal } from "../../../actions/modal_actions";
import ServerContent from './Server_Content'
import { fetchChannel } from "../../../actions/channel_actions";


const mapStateToProps = (state, ownProps) => {
      console.log(window.getState())
      return {
            currentUser: state.entities.users[state.session.id],
            server: state.entities.servers[ownProps.match.params.serverId],
            serverId: ownProps.match.params.serverId,
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
            fetchServer: serverId => dispatch(fetchServer(serverId)),
            deleteServer: serverId => dispatch(deleteServer(serverId)),
            deleteServerMembership: membership => dispatch(deleteServerMembership(membership)),
            fetchChannel: id => dispatch(fetchChannel(id))
       }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerContent));