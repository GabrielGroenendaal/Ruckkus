import { connect } from "react-redux";

import Channel from "./Channel";
import { createConversationParticipation } from "../../actions/conversation_participant_actions";
import { createConversation } from "../../actions/conversation_actions";
import { fetchServer } from "../../actions/server_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
      return {
            currentUser: state.entities.users[state.session.id],
            server: state.entities.servers[ownProps.match.params.serverId],
            channel: state.entities.channels[ownProps.match.params.channelId],
            serverId: ownProps.match.params.serverId,
            conversations: Object.values(state.entities.conversations),
            users: Object.values(state.entities.users)
      }
}

const mapDispatchToProps = dispatch => {
      return {
            fetchUser: id => dispatch(fetchUser(id)),
            fetchServer: id => dispatch(fetchServer(id)),
            createConversation: () => dispatch(createConversation()),
            createConversationParticipation: () => dispatch(createConversationParticipation())
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);