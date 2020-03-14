import React, { Component } from "react";
import Landing from "./component/Landing";

//dashboar
import Index from "./component/page/Index";
import Profile from "./component/page/Profile";
import EditProfile from "./component/page/EditProfile";
import AddPet from "./component/page/AddPet";

import "./App.css";
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { authenticatedPage } from "./config/authenticatedPage";

class App extends Component {
  render() {
    const token = localStorage.getItem("token");
    return (
      <Router>
        <div className="">
          {token ? <Redirect to="/home" /> : <Redirect to="/" />}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={authenticatedPage(Index)} />
            <Route
              exact
              path="/profile"
              component={authenticatedPage(Profile)}
            />
            <Route
              exact
              path="/edit-profile"
              component={authenticatedPage(EditProfile)}
            />
            <Route
              exact
              path="/add-pet"
              component={authenticatedPage(AddPet)}
            />

            {/* <Route path="/add-pet">
              <AddPet />
            </Route>
            <Route path="/edit-profile">
              <EditProfile />
            </Route>
            <Route path="/index">
              <Index />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Landing />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

// class Header extends Component {
//   render() {
//     return (
//       <div className="">
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }

// class Footer extends Component {
//   render() {
//     return (
//       <div>
//         <h1>footer</h1>
//       </div>
//     );
//   }
// }

export default App;
