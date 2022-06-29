import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchServer, fetchServers } from "../../../actions/server_actions";
import { fetchCurrentUser, logout } from '../../../actions/session_actions'
import { openModal } from '../..actions/modal_actions'
import { fetchConversation, fetchConversations } from "../../../actions/conversation_actions";
import ServerNav from './ServerNav';

const currentUsersServers = state => {
      if (Object.keys(state.entities.servers).length < state.entities.users[state.session.id].servers.length) return [];
      return state.entities.users[state.session.id].servers.map(serverId => (
            state.entities.servers[serverId]
      ))
}

const mapStateToProps = state => {
      return {
            currentUser: state.entities.users[state.session.id],
            servers: currentUsersServers(state),
            allServers: state.entities.servers,
            serversId: state.entities.users[state.session.id].ids
      };
};

const mapDispatchToProps = dispatch => {
      return {
            fetchServers: () => dispatch(fetchServers()),
            fetchServer: serverId => dispatch(fetchServer(serverId)),
            fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
            fetchDmServers: () => dispatch(fetchConversations()),
            fetchDmServer: dmServerId => dispatch(fetchConversation(conversationid)),
            logout: () => dispatch(logout()),
            openModal: modal => dispatch(openModal(modal))
      };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerNav));