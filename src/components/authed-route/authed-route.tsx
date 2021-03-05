import React, { FC, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../layout";
import { authContext } from "../../contexts/user-auth-context/user-auth-context";

const AuthedRoute = (props) => {
  const { component: Component } = props;
  const { currentUser } = useContext(authContext);

  if (currentUser) {
    if (!Component) {
      return <Redirect to="/dasboard" />;
    }
  } else {
    return <Redirect to="/" />;
  }

  return (
    <Route
      key={props.key}
      path={props.path}
      exact={true}
      render={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AuthedRoute;
