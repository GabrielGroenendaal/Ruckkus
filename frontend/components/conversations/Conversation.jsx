import React from 'react';
import DirectMessageContainer from './direct_message_container';
import CreateDirectMessageContainer from './create_direct_message_container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { createConsumer } from '@rails/actioncable';
import ConversationMessagesContainer from './conversation_messages_container';
function Conversation(props) {
      // console.log(props)

      // useEffect(() => {
      //   props.fetchDmServer(props.match.params.dmServerId)
      // }, [props.match.params.dmServerId])
      if (!props.conversation) {
            return null
      } 
      const [directMessages, setDirectMessages] = useState([])
      const params = useParams();

    
      useEffect(() => {
            props.fetchConversation(props.conversation.id)

            // const cable = createConsumer('ws://localhost:3000/cable')
            const cable = createConsumer('wss://ruckkus.herokuapp.com/cable')
            const paramsToSend = {
                  channel: 'ConversationChannel',
                  id: props.conversation.id
            }

            const handlers = {
                  received(data) {
                        setDirectMessages([...directMessages, data])
                  },

                  connected() {
                        console.log('connected')
                  },

                  disconnected() {
                        console.log("disconnected")
                  }
            }

            const subscription = cable.subscriptions.create(paramsToSend, handlers);

            return function cleanup() {
                  subscription.unsubscribe()
            }

      }, [props.conversation.id, directMessages])


      const messageProfile = (userId) => {
            let user = (userId === props.user.id) ? props.user : props.currentUser
            if (!user) return null
            let profilePicUrl
            (user.user_url === '') ?
                  profilePicUrl = "https://i.imgur.com/aOotaBk.png" :
                  profilePicUrl = user.user_url

            return (
                  <img className="message-profile" src={profilePicUrl} alt="message user profile" />
            )
      }

      const messageDate = (timestamp) => {
            const timeStamp = timestamp.slice(0, 10).split("-")
            const year = timeStamp.shift()
            timeStamp.push(year)
            const date = timeStamp.join("/")
            return (
                  <div className="message-date">{date}</div>
            )
      }
   
      const messages = () => {
            if (!props.conversation.direct_messages) { return null }
            //console.log(props.conversation.direct_messages)
            // let arr = Object.values(props.conversation.direct_messages)
            return (
                        <div className="messages-body">
                              <ul>
                              {
                                    Object.values(props.conversation.direct_messages).map((dm, idx) => {
                                          return (
                                                <li className="channel-message" key={idx.toString()} id={`directMessage-${dm.id}`}>
                                                      {messageProfile(dm.user.id)}
                                                      <div className="message-info-shell">
                                                            <div className="message-info">
                                                                  <div className="message-username">
                                                                        {dm.user.username}
                                                                  </div>
                                                                  {messageDate(dm.created_at)}
                                                            </div>
                                                            <div className="message-body-shell" id={dm.id}>
                                                                  <DirectMessageContainer direct_message={dm} />
                                                            </div>
                                                      </div>
                                                </li>
                                          )
                                    })
                              }
                        </ul>
                        </div>

               

            )
      }

      const ConversationContent = () => {
            if (!props.conversation || !props.user) return null;
            return (
                  <div className="channel-shell">
                        <header className="channel-header">
                              <div className="conversation-at">
                                    <svg x="0" y="0" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg>
                              </div>
                              <div>
                                    {props.user.username}
                              </div>
                        </header>
                        <div className="channel-messages-shell conversation-messages-shell">
                              {/* {messages()} */}
                              <ConversationMessagesContainer user={props.user} currentUser={props.currentUser} />
                              <CreateDirectMessageContainer user={props.user} conversation={props.conversation} />
                              </div>
                       
                  </div>
            )
      }


      return (
            
            ConversationContent()
      )
};

export default Conversation;