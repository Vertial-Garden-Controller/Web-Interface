import React from 'react';
import './utils/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * Import all page components here
 */
import HomePage from './pages/HomePage';
import NewUser from './pages/NewUser';
import MyInfo from './pages/MyInfo';

export const options = {
  baseURL: "http://localhost:5001",
  responseType: "application/json"
};

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myinfo">My Info</Link>
            </li>
            <li>
              <Link to="/users/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/myinfo">
            <MyInfo />
          </Route>
          <Route path="/users/signup">
            <NewUser />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
