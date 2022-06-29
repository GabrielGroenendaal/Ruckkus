
import { connect } from "react-redux";
import Conversation from "./Conversation";
import { fetchConversations, fetchConversation } from "../../actions/conversation_actions";


const grabUser = (state, ownProps) => {
      let conversation = state.entities.conversations[ownProps.match.params.conversationId];
      if (conversation) {
            let currentUser = state.entities.users[state.session.id];
            let participants = Object.keys(conversation.participants);
            let participantId = participants.filter(id => {
                  if (id !== currentUser.id.toString()) {
                        return id
                  }
            });
            return conversation.participants[participantId[0]];
      }
}

const mapStateToProps = (state, ownProps) => {
      return {
            conversation: state.entities.conversations[ownProps.match.params.conversationId],
            currentUser: state.entities.users[state.session.id],
            user: grabUser(state, ownProps)
      }
}

const mapDispatchToProp = dispatch => {
      return {
            fetchConversations: () => dispatch(fetchConversations()),
            fetchConversation: id => dispatch(fetchConversation(id))
      }
}

export default connect(mapStateToProps, mapDispatchToProp)(Conversation)