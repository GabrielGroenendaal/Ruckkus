import { connect } from 'react-redux';

import { createDirectMessage } from '../../actions/direct_message_actions';
import CreateDirectMessage from './Create_Direct_Message';

const mapStateToProps = state => {
  return {
    message: {
      body: ''
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
      createDirectMessage: (id, message) => dispatch(createDirectMessage(id, message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDirectMessage);