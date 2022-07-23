import React, { useEffect, userRef, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable"
//import ChannelMessageCreateContainer from "./channel_message_create_container";
import MessageBodyContainer from "./channel_message_body_container";

function ChannelMessages(props) {
      const [messages, setMessages] = useState([])
      const params = useParams()
      

      const messageProfile = (userId) => {
            const user = props.users[userId]
            if (!user) return null
            let profilePicUrl
            (user.profilePicUrl === '') ?
                  profilePicUrl = window.default :
                  profilePicUrl = user.profilePicUrl

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

      return (
            <div className="channel-messages-shell">
                  <div className="messages-body">
                        <ul>
                              <li className="channel-message">
                                    <img className="message-profile" src={window.default} alt="message user profile" />
                                    <div className="message-info-shell">
                                          <div className="message-info">
                                                <div className="message-username">
                                                      demo
                                                </div>
                                                <div className="message-date">
                                                      07/01/2022
                                                </div>
                                          </div>

                                          <div className="message-body-shell">
                                                <div>
                                                      Hello, this is a display message
                                                      <div className="message-button-shell">
                                                            <div><svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg></div>
                                                            <div><svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg></div>
                                                      </div>
                                                      
                                                </div>
                                          </div>
                                    </div>
                              </li>
                              <li className="channel-message">
                                    <img className="message-profile" src={window.default} alt="message user profile" />
                                    <div className="message-info-shell">
                                          <div className="message-info">
                                                <div className="message-username">
                                                      demo
                                                </div>
                                                <div className="message-date">
                                                      07/01/2022
                                                </div>
                                          </div>

                                          <div className="message-body-shell">
                                                <div>
                                                      Hello, this is a display message
                                                      <div className="message-button-shell">
                                                            <div><svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg></div>
                                                            <div><svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg></div>
                                                      </div>
                                                      
                                                </div>
                                          </div>
                                    </div>
                              </li>
                              <li className="channel-message">
                                    <img className="message-profile" src={window.default} alt="message user profile" />
                                    <div className="message-info-shell">
                                          <div className="message-info">
                                                <div className="message-username">
                                                      demo
                                                </div>
                                                <div className="message-date">
                                                      07/01/2022
                                                </div>
                                          </div>

                                          <div className="message-body-shell">
                                                <div>
                                                      Hello, this is a display message
                                                      <div className="message-button-shell">
                                                            <div><svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg></div>
                                                            <div><svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg></div>
                                                      </div>
                                                      
                                                </div>
                                          </div>
                                    </div>
                              </li>
                        </ul>
                  </div>
                  <div className="message-form-shell">
                              <form className="message-form">
                                    <input type="text"
                                          defaultValue="a demo message"
                                    />
                              </form>
                  </div>
                  {/* <div className="messages-body">
        <ul>
          {
            props.messages.map(message => {
              return (
                <li className="channel-message" key={message.id * message.body.length * Math.random(10000)} id={`message-${message.id}`}>
                  {messageProfile(message.user.id)}
                  <div className="message-info-shell">
                    <div className="message-info">
                      <div className="message-username">{message.user.username}</div>
                      {messageDate(message.created_at)}
                    </div>
                    <div className="message-body-shell" id={message.id}>
                        <MessageBodyContainer message={message} />
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div> */}

                  {/* <ChannelMessageCreateContainer /> */}

            </div>
      )
}

export default ChannelMessages