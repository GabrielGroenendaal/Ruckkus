
import React from 'react';
import { fetchServers } from '../../actions/server_actions';
import { fetchConversations } from '../../actions/conversation_actions';
import UserContainer from '../user/user_container';
import { matchPath } from 'react-router-dom';

class ConversationContent extends React.Component {
      constructor(props) {
            super(props)
            this.friendsList = this.friendsList.bind(this)
      }

      // componentDidMount() {
      //       const match = matchPath(this.props.history.location.pathname, { path: `/channels/@ne/conversationId` })
      //       this.props.fetchConversations()
      //       this.props.conversations.map(conversationId => {
      //                   this.props.fetchConversation(conversationId).then(
      //                         () => {
      //                               if (match && match.params.conversationId !== '@me') {
      //                                     this.props.fetchConversation(match.params.conversationId)
      //                               }
      //                         })
      //             })
            
      // }
      friendsList() {
            //console.log(this.props)
            return (
                  <div className="direct-messages-users-list-shell">
                        <header>
                              <h2>DIRECT MESSAGES</h2>
                        </header>
                        {
                              this.props.conversations.map(conversation => {
                                    let userIds = Object.values(conversation.users)
                                    console.log(userIds)
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