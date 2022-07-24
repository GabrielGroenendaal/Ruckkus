import React, { useState } from "react";
import { useParams } from "react-router";

const ChannelMessageCreate = (props) => {

      // if (!props.channel) {
      //       return nullxp
      // }
      const [body, setBody] = useState(props.message.content)
      const params = useParams()


      const handleSubmit = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let message = { content: body }
            props.createMessage(props.channel.id, message)
            setBody("")
      }

      return (
            <div className="message-form-container" >
                  <form className="message-form" onSubmit={e => handleSubmit(e)}>
                        <input
                              type="text"
                              value={body}
                              onChange={(e) => setBody(e.currentTarget.value)}
                              placeholder={`Message #${props.channel.name}`}
                        />
                  </form>
            </div>
      )
}

export default ChannelMessageCreate