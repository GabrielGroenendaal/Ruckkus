import { connect } from "react-redux";
import User from "./User";
import { fetchCurrentUser, logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
const mapStateToProps = (state) => {
      return {
            currentUser: state.entities.users[state.session.id],
            errors: state.errors.server
      }
}

const mapDispatchToProps = dispatch => {
      return {
            closeModal: () => dispatch(closeModal()),
            openModal: modal => dispatch(openModal(modal)),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);