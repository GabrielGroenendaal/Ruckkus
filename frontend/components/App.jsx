import React from "react";
import { Provider } from 'react-redux';
import { Route, Switch, Link} from 'react-router-dom';

import modal from "./modal/modal";
import ServerNavBarContainer from "./servers/server_nav/server_nav_container";
import ServerContentContainer from "./servers/server_content/server_content_container";
import ConversationContentContainer from "./conversations/conversation_content_container";
import ConversationContainer from "./conversations/conversation_container";
import ChannelContainer from './channels/channel_container'
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
            <div className="app">
                  <Route path='/' component={modal}></Route>
                  <ProtectedRoute path="/channels" component={ServerNavBarContainer} />
                  <Switch>
                        <ProtectedRoute path="/channels/@me" component={ConversationContentContainer} />
                        <ProtectedRoute path="/channels/:serverId/:channelId" component={ServerContentContainer} />
                  </Switch>
            
                  <Switch>
                        <AuthRoute exact path="/login" component={LoginFormContainer} />
                        <AuthRoute exact path="/signup" component={SignupFormContainer} />
                        <ProtectedRoute path="/channels/@me/:conversationId" component={ConversationContainer} />
                        <ProtectedRoute exact path="/channels/:serverId/:channelId" component={ChannelContainer} />
                        <Route exact path="/" component={SplashContainer} />
                  </Switch>
            </div>
);

export default App;