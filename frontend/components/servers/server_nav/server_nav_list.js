
import React from "react";
import ServerNavItems from "./Server_Nav_Items";

const ServerNavList = (props) => {
      return (
            <ul className="server-nav-server-list">
                  {
                        props.servers.map(server => {
                              return (
                                    <ServerNavItems
                                          server={server}
                                          history={props.history}
                                          fetchServer={props.fetchServer}
                                          key={server.id}
                                    />
                              )
                        })
                  }
            </ul>

      )
}

export default ServerNavList;