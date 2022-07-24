import { connect } from "react-redux";

import { fetchConversation } from "../../actions/conversation_actions";
import { createDirectMessage, updateDirectMessage } from "../../actions/direct_message_actions";
//import { createMessage, updateMessage } from "../../actions/message_actions";
//import ChannelMessages from "./channel_messages";
import ConversationMessages from "./Conversation_Messages";
const mapStateToProps = (state) => {
  return {
    messages: state.entities.direct_messages,
//     users: state.entities.users,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchConversation: conversationId => dispatch(fetchConversation(conversationId)),
//     createDirectMessage: (channelId, message) => dispatch(createDirectMessage(channelId, message)),
//     updateDirectMessage: message => dispatch(updateDirectMessage(message))
//   };
// };

export default connect(mapStateToProps, null)(ConversationMessages)