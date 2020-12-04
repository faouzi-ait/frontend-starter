import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

/*
  IN THE MAIN ROUTING:
  <PrivateRoute exact path="<route-here>" component={<component>} />
*/

const PrivateRoute = ({ component, ...rest }) => {
  const authenticated = useSelector((state) => !!state.login.user.email);
  if (authenticated) {
    return <Route {...rest} component={component} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
