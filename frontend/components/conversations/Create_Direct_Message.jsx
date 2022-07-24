import React, { useState } from "react";
import { useParams } from "react-router";

function CreateDirectMessage(props) {
      const [body, setBody] = useState(props.message.body)
      const params = useParams()

      const handleSubmit = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let directMessage = { content: body }
            props.createDirectMessage(props.conversation.id, directMessage)
            setBody("")
      }

      return (
            <div className="message-form-container" >
                  <form className="message-form" onSubmit={e => handleSubmit(e)}>
                        <input
                              type="text"
                              value={body}
                              onChange={(e) => setBody(e.currentTarget.value)}
                              placeholder={`Message @${props.user.username}`}
                        />
                  </form>
            </div>
      )
};

export default CreateDirectMessage;