import React from "react";
import DirectMessageContainer from "./direct_message_container";

const ConversationMessages = props => {
      if (!props.messages) {
            return (
                  <div className="messages-body">

                  </div>
            )
      
      }
      //console.log(props.messages)

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
   
      return (
                  <div className="messages-body">
                        <ul>
                        {
                              Object.values(props.messages).map((dm, idx) => {
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

export default ConversationMessages;