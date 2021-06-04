import React from "react";

import ProtectedRoute from "./components/auth/protected.route";
import { Route, Switch } from "react-router-dom";
import RootProvider, { RootContext } from "./context/RootContext";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/Presentation/Dashboard";
import Home from "./components/Presentation/Home";
import Privacy from "./components/Presentation/Privacy";
import Success from "./components/Presentation/Success";
import Notfound from "./components/Presentation/Notfound";
import Profile from "./components/Presentation/Profile";

function App() {
  return (
    <RootProvider>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />

          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/privacy" component={Privacy} />
          <ProtectedRoute exact path="/success" component={Success} />
          <ProtectedRoute exact path="/profile" component={Profile} />

          <Route path="*" component={Notfound} />
        </Switch>
      </div>
    </RootProvider>
  );
}
export default App;