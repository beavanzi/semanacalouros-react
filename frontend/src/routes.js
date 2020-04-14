import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";

import Principal from "./pages/Principal";
import Cronograma from "./pages/Cronograma";
import Info from "./pages/Info";
import Local from "./pages/Local";
import Avaliacao from "./pages/Avaliacao";
import Admin from "./pages/Admin";
import AdminInfo from "./pages/AdminInfo";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/info',
          state: { from: props.location }
        }} />
  )} />
)

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Principal} />;
        <Route path="/cronograma" component={Cronograma} />;
        <Route path="/info" component={Info} />;
        <Route path="/local" component={Local} />;
        <Route path="/avaliacao" component={Avaliacao} />
        <Route path="/admin" component={Admin} />
        {/* <Route path="/admininfo" component={AdminInfo} /> */}
        <PrivateRoute path="/admininfo" component={AdminInfo} />
      </Switch>
    </BrowserRouter>
  );
}


