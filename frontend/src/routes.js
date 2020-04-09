import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Principal from "./pages/Principal";
import Cronograma from "./pages/Cronograma";
import Info from "./pages/Info";
import Local from "./pages/Local";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Principal} />;
        <Route path="/cronograma" component={Cronograma} />
        <Route path="/info" component={Info} />;
        <Route path="/local" component={Local} />;
      </Switch>
    </BrowserRouter>
  );
}
