import { Component } from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux"; // Import connect

import Product from "./pages/Product";
import Sell from "./pages/Sell";
import SellLandingPage from "./pages/SellLandingPage";
import Buy from "./pages/Buy";
import Admin from "./admin/Admin";
import Agent from "./pages/Agent";
import Login from "./pages/Login";
import Blog from "./pages/Blog";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props; // Access isAuthenticated from props

    return (
      <>
        <Router>
          <Switch>
            <Route path="/sell" exact>
              <Sell />
            </Route>
            <Route path="/sell-landing">
              <SellLandingPage />
            </Route>
            <Route path="/buy" exact>
              <Home />
            </Route>
            <Route path="/buy-list" exact>
              <Buy />
            </Route>

            <Route path="/property/:id" exact>
              <Product />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/admin" exact>
              {isAuthenticated ? <Admin /> : <Redirect to="/login" />}
            </Route>
            <Route path="/agent" exact>
              <Agent />
            </Route>
            <Route path="/blog/:id" exact>
              <Blog />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

// Map the Redux state to props
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
