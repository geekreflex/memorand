import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Trash from './views/Trash';
import Home from './views/Home';
import Header from './components/Header';
import { PublicRoute, ProtectedRoute } from './helper/authRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container margintop">
          <div>
            <Switch>
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/register" component={Register} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute exact path="/profile" component={Profile} />
              <ProtectedRoute exact path="/Trash" component={Trash} />
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
