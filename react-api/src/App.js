import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Add from "./pages/add";
import MainPage from './pages/index';
import Nav from "./pages/nav";
import Snippets from "./pages/snippets";
import Users from "./pages/users";




class App extends Component {
  

  render() {
    return (
      <Router>
        <Nav/>
        <Switch>
          <Route exact path ="/" component = {MainPage} />
          <Route exact path = "/snippets" component = {Snippets} />
          <Route exact path = "/users" component = {Users} />
          <Route exact path = "/add" component = {Add} />
        </Switch>
      </Router>
    );
  }
}

export default App;