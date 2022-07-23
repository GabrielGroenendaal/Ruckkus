import { connect } from "react-redux";

import { createChannel } from "../../actions/channel_actions";
import { closeModal } from "../../actions/modal_actions";
import CreateChannel from "./create_channel";

const mapStateToProps = (state, ownProps) => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    createChannel: (channel, serverId) => dispatch(createChannel(channel, serverId)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannel);