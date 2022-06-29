import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../../actions/session_actions"

// const initialstate = {}
// const sessionReducer = (state = initialstate, action) => {
//       Object.freeze(state)
//       let newState = Object.assign({}, state)
//       switch (action.type) {
//           case RECEIVE_CURRENT_USER:
//               //newState[entities.users] = Object.assign({}, action.currentUser)
//               console.log(newState)
//               newState.session.id = action.currentUser.id
//               return newState;
//           case LOGOUT_CURRENT_USER:
//               console.log(newState)
//               newState.session.id = null
//               return newState;
//           default:
//               return state;
//       }
// }

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;