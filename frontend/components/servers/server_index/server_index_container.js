import { connect } from "react-redux";


import ServerIndex from "./server_index";
import {fetchServers} from '../../../actions/server_actions'
import { closeModal } from "../../../actions/modal_actions";
import {createServerMembership} from '../../../actions/server_membership_actions'


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
      public_servers = public_servers.filter(serverId => state.entities.servers[serverId].owner_id = currentUser.id)
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