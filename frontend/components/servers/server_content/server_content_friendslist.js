import React from 'react'

const FriendsList = props => {
      return (
            <div>
                  {
                        props.conversations.map(conversation => {
                              return <div key={conversation.id}>{conversation.id}</div>
                        })
                  }
            </div>
      )
}

export default FriendsList
