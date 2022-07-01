import { connect } from "react-redux";
import { updateMessage, deleteMessage } from "../../actions/message_actions";
import MessageBody from "./channel_message_body";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBody)