import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchServer, fetchServers } from "../../../actions/server_actions";
import { fetchCurrentUser, logout } from '../../../actions/session_actions'
import { openModal } from '../..actions/modal_actions'