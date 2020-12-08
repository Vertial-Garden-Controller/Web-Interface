import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * Import all page components here
 */
import { NewUser } from './pages/newUser';

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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users/signup">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users/signup">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
