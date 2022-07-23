import { connect } from "react-redux";

import { createMessage } from "../../actions/message_actions";
import ChannelMessageCreate from "./Channel_Message_Create";
const mapStateToProps = (state, ownProps) => {
  return {
    message: {
      content: ''
    },
    channels: state.entities.channels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (channelId, message) => dispatch(createMessage(channelId, message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessageCreate)

