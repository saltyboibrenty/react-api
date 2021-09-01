import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams
} from "react-router-dom";
import Create from "./pages/components/create";
import MainPage from './pages/index';
import Nav from "./pages/nav";
import SnippetsList from "./pages/components/view";
import Users from "./pages/users";
import Snippet from "./pages/components/individual";




class App extends Component {
  

  render() {
    return (
      <Router>
        <Nav/>
        <Switch>
          <Route exact path ="/" component = {MainPage} />
          <Route exact path = "/snippets" component = {SnippetsList} />
          <Route exact path = "/users" component = {Users} />
          <Route exact path = "/add" component = {Create} />
          <Route path="/snippets/:id" component={Snippet} />
        </Switch>
      </Router>
    );
  }
}

export default App;