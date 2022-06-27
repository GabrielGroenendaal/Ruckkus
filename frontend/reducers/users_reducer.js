import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const initialstate = {}

const usersReducer = (state = initialstate, action) => {
      Object.freeze(state)
      //let newState = Object.assign({}, state)
      switch (action.type) {
            case RECEIVE_CURRENT_USER:
                  return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
            default:
                  return state;
      }
}

export default usersReducer;