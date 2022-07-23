import { connect } from "react-redux";

import Channel from "./Channel";
import { createConversationParticipation } from "../../actions/conversation_participant_actions";
import { createConversation } from "../../actions/conversation_actions";
import { fetchServer } from "../../actions/server_actions";
import { fetchUser } from "../../actions/user_actions";


const currentUsersConversations = state => {
      if (Object.keys(state.entities.conversations).length < state.entities.users[state.session.id].conversations.length) return [];
      return state.entities.users[state.session.id].conversations.map(conversationId => (
            state.entities.conversations[conversationId]
      ))
}

const mapStateToProps = (state, ownProps) => {
      return {
            currentUser: state.entities.users[state.session.id],
            server: state.entities.servers[ownProps.match.params.serverId],
            channel: state.entities.channels[ownProps.match.params.channelId],
            serverId: ownProps.match.params.serverId,
            conversations: currentUsersConversations(state),
            users: Object.values(state.entities.users)
      }
}

const mapDispatchToProps = dispatch => {
      return {
            fetchUser: id => dispatch(fetchUser(id)),
            fetchServer: id => dispatch(fetchServer(id)),
            createConversation: () => dispatch(createConversation()),
            createConversationParticipation: (dm) => dispatch(createConversationParticipation(dm))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);