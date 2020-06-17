import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductRoutes from "../features/Products/routes";


const routes = [...ProductRoutes];

function MainRoutes() {
  return (
    <Switch>
      {routes.map((route, index) =>
        !route.auth ? <Route {...route} key={index} /> : "NADA"
      )}
      <Redirect to="/" exact></Redirect>
      <Route to="*">
        <h1> 404 Page Not Found</h1>
      </Route>
    </Switch>
  );
}

export default MainRoutes;
