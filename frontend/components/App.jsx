import React from "react";
import { Provider } from 'react-redux';
import { Route, Switch, Link} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
const App = () => (
 
            <div className="app">
                  {/* <header id="gretting">
                        <h1>Ruckus</h1>
                        <GreetingContainer />
                  </header> */}
                  <Route path='/' component={<div></div>}></Route>

                  <ProtectedRoute path="/channels" component={ServerNavBarContainer} />
                  <Switch>
                        <AuthRoute exact path="/login" component={LoginFormContainer} />
                        <AuthRoute exact path="/signup" component={SignupFormContainer} />
                        <Route exact path="/" component={SplashContainer} />
                  </Switch>
         
            </div>
 
);

export default App;