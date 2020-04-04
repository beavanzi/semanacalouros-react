import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Principal from "./pages/Principal";
import Cronograma from "./pages/Cronograma";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Principal} />;
        <Route path="/cronograma" component={Cronograma} />;
      </Switch>
    </BrowserRouter>
  );
}
