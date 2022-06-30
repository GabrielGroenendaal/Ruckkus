
import React from 'react'

class ServerCreateForm extends React.Component {

      constructor(props) {
            super(props)

            const defaultServer = `${props.currentUser.username}'s server`

            this.state = {
                  server_name: defaultServer,
                  public: props.is_public
            }
      }
}

export default ServerCreateForm