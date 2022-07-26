# Ruckkus
### [Live Link](https://ruckkus.herokuapp.com/#/) 
<img width="1436" alt="Splash_Ruckkus" src="https://user-images.githubusercontent.com/36039557/180856262-68a00b27-9b24-472f-8e35-0f0405a767b5.png">


[Ruckkus](https://ruckkus.herokuapp.com/#/) is a clone of the popular messaging app Discord where users can join and create servers to live chat with others. Users are able to sign up and make a new account, or log into an existing account in order to live message other users directly or through a public or private server. Messages are organized into individual conversations and channels.


***

## Technologies Utilized
* Frontend
   * React and Redux for frontend state management and rendering components
   * HTML for website structure for the React Components 
   * SCSS for styling elements 
   * Javascript for dynamic updates to the frontend and other front-end logic 
* Backend 
   * Rails for a web application framework 
   * Ruby 2.5.1 for backend and database logic 
   * PostgresSQL for data storage and management 
* Full Stack 
   * Action Cables for live messaging 
   * Heroku for hosting and production

***

## Major Features and Code Snippets

### Live Chat
![Live Chat](https://user-images.githubusercontent.com/36039557/181037813-eaf89361-3b5f-4a23-a6e3-ce6e257cd7f0.gif)

The core feature of Discord is the ability to chat in real-time with other users, a functionality I provided through the use of WebSockets implemented by Action Cable.  This is achieved by utilizing React hooks and Action Cables in the ```Conversation``` and ```Channel``` components. When these componens are mounted, a cable subscription is instantiated, allowing users to receive updates from a variety of channels at once.
```
function Conversation(props) {

      const [directMessages, setDirectMessages] = useState([])

      useEffect(() => {
            props.fetchConversation(props.conversation.id)

            const cable = createConsumer('wss://ruckkus.herokuapp.com/cable')
            const paramsToSend = {
                  channel: 'ConversationChannel',
                  id: props.conversation.id
            }

            const handlers = {
                  received(data) {
                        setDirectMessages([...directMessages, data])
                  },
            }

            const subscription = cable.subscriptions.create(paramsToSend, handlers);
            return function cleanup() {
                  subscription.unsubscribe()
            }

      }, [props.conversation.id, directMessages])
}
```
***

### Server Index
![Server Index](https://user-images.githubusercontent.com/36039557/181045141-f755a78a-a98a-4d3d-9b66-68250847e02e.gif)

The user can create ```Servers``` based off any topic where others can join and live chat in ```Channels```. Memberships between users and servers are stored as ```ServerMemberships``` which are used to prevent Users from signing up to servers multiple times. Users can also join any server that is listed as ```is_public```. So when producing a list of servers for Users to join in ```ServerIndex``` it was necessary to have a helper function to produce the list of public servers the ```currentUser``` is not already a member of.

```
// ServerIndexContainer.js
const publicServers = state => {
      if (Object.keys(state.entities.servers).length === 0) return [];
      let public_servers = [];
      const currentUser = state.entities.users[state.session.id]
      
      Object.keys(state.entities.servers).map(id => {
            public_servers.push(parseInt(id))
      })

      currentUser.servers.map(id => {
            return public_servers.splice(public_servers.indexOf(id), 1)
      })

      let servers = [...public_servers]
      public_servers = public_servers.filter(serverId => state.entities.servers[serverId].is_public)
      public_servers = public_servers.filter(serverId => state.entities.servers[serverId].owner_id != currentUser.id)
      public_servers = public_servers.map(serverId => state.entities.servers[serverId])
      return public_servers;
}

const mapStatetoProps = state => {
      return {
            currentUser: state.entities.users[state.session.id],
            servers: publicServers(state)
      }
}

const mapDispatchToProps = dispatch => {
      return {
            closeModal: () => dispatch(closeModal()),
            fetchServers: () => dispatch(fetchServers()),
            createServerMembership: id => dispatch(createServerMembership(id))
      }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ServerIndex)
```
***

### Direct Messages from Server 
![Direct Messages from Server](https://user-images.githubusercontent.com/36039557/181046314-3894d7ad-ea27-4b07-afb5-1e29899eff7b.gif)

Each ```Server``` showcases a list of its members. Users are able to hover over the display for other users and click a 'Direct Message' element in order to initiate a new ```Conversation``` with that user. This feature was tricky to implement because it required keeping track of the ```currentUser``` conversations within the ```Channel``` component. 
```
class Channel extends React.Component {
      // ...
      
      // A function called by clicking on the Direct Message element which accepts a user object as an argument
      handleDirectMessage(user) {
            // stores all the currently active conversations 
            let currentConversations = {} 
            
            // checks to see what conversations exists, and sets up key value pairs between the user.id of the other participant 
            // and the conversation id both currentUser and user belong to
            this.props.conversations.map(conversation => {
                  if (!conversation || !conversation.users) {
                        return null
                  }
                  let participantIds = Object.keys(conversation.users)
                  participantIds.map(participantId => {
                        if (participantId.toString() != this.props.currentUser.id.toString()) {
                              currentConversations[participantId] = conversation.id
                        }
                  })
            })
            
            // Checks to see if a conversation exists between both the currentUser and user
            // If it does, pushes that URL 
            // If a conversation doesn't exist, a new one is created
            // Then two memberships to that conversation for currentUser and user are created 
            // Then the URL for that new conversation is pushed to the history
            if (currentConversations[user.id.toString()]) {
                  this.props.history.push(`/channels/@me/${currentConversations[user.id.toString()]}`)
            } else {
 
                  this.props.createConversation().then(response => {
                        let conversationParticipation = {
                              conversation_id: response.conversation.id,
                              participant_id: this.props.currentUser.id
                        }
                        this.props.createConversationParticipation(conversationParticipation);
                        let newConversationParticipation = {
                              conversation_id: response.conversation.id,
                              participant_id: user.id
                        }
                        this.props.createConversationParticipation(newConversationParticipation).then(response2 => {
                              this.props.history.push(`/channels/@me/${response2.conversationParticipation.conversation_id}`)
                        })
                  })
            }
      }
```
***

### Acknowledgments
I would like to acknowledge that the following were invaluable to understanding and using the concepts that made Ruckkus possible:

* [Utilizing Action Cables](https://javascript.plainenglish.io/building-a-simple-live-chat-in-react-with-action-cable-8c2abf7a25b5)
* [Deploying Action Cables to Heroku](https://medium.com/swlh/deploying-a-rails-react-app-with-actioncable-to-heroku-cb5d42f41a2a)
* Ricky Zheng for helping trouble shoot live chat on Heroku
* All images used were from Discord and used for educational purposes.

***
<!-- ## Features in Progress
* Message Display
* Channel Creation and Editing
* Live Chat 
* Friending / Blocking Users 
* Uploading images for profile pics / server pics 

***
 -->
