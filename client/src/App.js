import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { PublicRoute, ProtectedRoute } from './helper/authRoute';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

// Components

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
