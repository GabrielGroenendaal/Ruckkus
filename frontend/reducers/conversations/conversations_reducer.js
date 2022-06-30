import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION, REMOVE_CONVERSATION } from "../../actions/conversation_actions";
import { RECEIVE_CONVERSATION_PARTICIPATION } from "../../actions/conversation_participant_actions";


const conversationsReducer = (state = {}, action) => {
      // console.log(action)
      Object.freeze(state);

      let newState;
      switch (action.type) {
            case RECEIVE_CONVERSATIONS:
                  return Object.assign({}, action.conversations);
            case RECEIVE_CONVERSATION:
                  newState = Object.assign({}, state);
                  newState[action.conversation.id] = action.conversation
                  return newState;
            case REMOVE_CONVERSATION:
                  newState = Object.assign({}, state);
                  delete newState[action.conversationId];
                  return newState;
            case RECEIVE_CONVERSATION_PARTICIPATION:
                  newState = Object.assign({}, state);
                  newState[action.conversationParticipant.conversation.id] = action.conversationParticipant.conversation;
                  return newState;
            default:
                  return state;
      }
};

export default conversationsReducer;