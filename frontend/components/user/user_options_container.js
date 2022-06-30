import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";
import UserOptions from "./user_options";


const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOptions);