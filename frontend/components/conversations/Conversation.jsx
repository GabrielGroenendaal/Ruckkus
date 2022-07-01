import React from 'react';


function Conversation(props) {
      // console.log(props)

      // useEffect(() => {
      //   props.fetchDmServer(props.match.params.dmServerId)
      // }, [props.match.params.dmServerId])
      const demoContent = () => {
            return (
                  <div className="direct-messages-shell">
                        <div className="direct-messages-body">
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
                                                            Hello, this is a demo direct message
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
                                          value="a demo message"
                                    />
                              </form>
                        </div>
                  </div>
            )
      }

      const ConversationContent = () => {
            if (!props.conversation || !props.user) return null;
            return (
                  <div className="conversation-shell">
                        <header>
                              <div className="conversation-at">
                                    <svg x="0" y="0" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg>
                              </div>
                              <div>
                                    {props.user.username}
                              </div>
                        </header>
                        <div className="conversation-content">
                              {demoContent()}
                              {/* <DmMessagesContainer user={props.user} /> */}
                        </div>
                  </div>
            )
      }

      return (
            ConversationContent()
      )
};

export default Conversation;