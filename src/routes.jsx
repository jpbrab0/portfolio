import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NewsLetter from "./Pages/NewsLetter";
import Projects from "./Pages/Projects";
import RemoveEmail from "./Pages/RemoveEmail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/newsletter" component={NewsLetter} />
        <Route path="/removemail" component={RemoveEmail} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
