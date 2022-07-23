import { connect } from "react-redux";
import EditChannel from "./edit_channel";
import { updateChannel, deleteChannel } from "../../actions/channel_actions"
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    servers: state.entities.servers,
    channels: state.entities.channels
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateChannel: channel => dispatch(updateChannel(channel)),
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditChannel);