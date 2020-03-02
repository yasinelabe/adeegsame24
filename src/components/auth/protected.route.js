import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
  
    <Route
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} {...rest} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};


export default ProtectedRoute