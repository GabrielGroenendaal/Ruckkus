
import React from 'react';
import { fetchServers } from '../../actions/server_actions';
import { fetchConversations } from '../../actions/conversation_actions';
import UserContainer from '../user/user_container';
import { matchPath } from 'react-router-dom';

class ConversationContent extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  thing: ''
            }
            this.friendsList = this.friendsList.bind(this)
      }

      componentDidMount() {
            const match = matchPath(this.props.history.location.pathname, { path: `/channels/@ne/conversationId` })
            this.props.fetchConversations().then(() => {
                  this.props.conversations.map(conversation => {
                        this.props.fetchConversation(conversation.id).then(
                              () => {
                                    if (match && match.params.conversation.id !== '@me') {
                                          this.props.fetchConversation(match.params.conversation.id)
                                    }
                              })
                  })
                  })
            this.setState({thing: this.state.thing})
      }
      friendsList() {
            if (!this.props.conversations) {
                  return null
            }
            //console.log(this.props.conversations)
            return (
                  <div className="direct-messages-users-list-shell">
                        <header>
                              <h2>DIRECT MESSAGES</h2>
                        </header>
                        {
                              this.props.conversations.map(conversation => {
                                    let userIds = Object.values(conversation.users)
                                    let userId = userIds.filter(user => {
                                          if (user.id !== this.props.currentUser.id) {
                                                return user
                                          }
                                    })
                                    const user = conversation.users[userId[0].id]
                                    let user_url = (user.user_url === '') ? window.default : user.user_url

                                    return (
                                          <div
                                                key={conversation.id}
                                                onClick={() => this.props.history.push(`/channels/@me/${conversation.id}`)}
                                                className="user-info-shell conversation-info-shell"
                                          >
                                                <img src={user_url} alt="profile picture" className="conversation-profile" />
                                                <div>{user.username}</div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            )
      }
      render() {

            return (
                  <div className="server-content-shell">
                        {this.friendsList()}
                        <UserContainer />
                  </div>
            )
      }
}


export default ConversationContent;