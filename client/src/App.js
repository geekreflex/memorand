import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { PublicRoute, ProtectedRoute } from "./helper/authRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideNav />
        <div className="container margintop">
          <Switch>
            <PublicRoute exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
