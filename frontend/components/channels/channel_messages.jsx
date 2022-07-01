import React, { useEffect, userRef, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable"
//import ChannelMessageCreateContainer from "./channel_message_create_container";
import MessageBodyContainer from "./channel_message_body_container";

function ChannelMessages(props) {
  const [messages, setMessages] = useState([])
  const params = useParams()

  useEffect(() => {
    props.fetchChannel(params.channelId)

    // const cable = createConsumer("ws://localhost:3000/cable")
    const cable = createConsumer("wss://ruckkus.herokuapp.com/cable")

    const paramsToSend = {
      channel: "ConversationChannel",
      id: params.channelId
    }

    const handlers = {
      received(data) {
        // console.log(data)
        setMessages([...messages, data])
      },

      connected() {
        // console.log("connected")
      },

      disconnected() {
        // console.log("disconnected")
      }
    }

    const subscription = cable.subscriptions.create(paramsToSend, handlers)
    
    return function cleanup() {
      // console.log("unsubbing from ", params.channelId)
      subscription.unsubscribe()
    }
  }, [params.channelId, messages])

  const messageProfile = (userId) => {
    const user = props.users[userId]
    if (!user) return null
    let profilePicUrl
    (user.profilePicUrl === '') ? 
    profilePicUrl = "https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png" :
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
      </div>

        {/* <ChannelMessageCreateContainer /> */}
    </div>
  )
}

export default ChannelMessages