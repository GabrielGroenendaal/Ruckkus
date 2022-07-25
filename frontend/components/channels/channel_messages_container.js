import { connect } from "react-redux";

import { fetchChannel } from "../../actions/channel_actions";
import { createMessage, updateMessage } from "../../actions/message_actions";
import ChannelMessages from "./channel_messages";

const mapStateToProps = (state) => {
  return {
    messages: state.entities.messages,
    users: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    createMessage: (serverId, channelId, message) => dispatch(createMessage(serverId, channelId, message)),
    updateMessage: message => dispatch(updateMessage(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessages)