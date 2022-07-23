import { connect } from "react-redux";
import DirectMessage from "./Direct_Message";
import { updateDirectMessage, deleteDirectMessage } from "../../actions/direct_message_actions";
const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateDirectMessage: dm => dispatch(updateDirectMessage(dm)),
    deleteDirectMessage: id => dispatch(deleteDirectMessage(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessage)