import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import AuthProvider from "./contexts/user-auth-context/user-auth-context";
import AuthedRoute from "./components/authed-route";
import Ngoprofile from "./screens/Ngoprofile/Ngoprofile";
import Invitation from "./screens/Invitationdetails/Invitation"
import Topslidebar from "./screens/topslidebar/Topslidebar.js";
import Faq from "./screens/Faqdata/Faq";
import SignIn from "./screens/signIn/SignIn";
import About from "./screens/aboutdata/About";
import Contactus from "./screens/contact us/Contactus";
import ForgotPassword from "./screens/forgotpassword/App";
import Donationdetails from "./screens/donation/donation detail/Donationdetails";
import Donationrecieved from "./screens/donation/donationrecieved/Donationrecieved";
import Dashboard from "./screens/dashboard/Dashboard";
import volunteer from "./screens/volunteer/Volunteer";



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AuthProvider>
            <Switch>
              {Routes.map((x, i) => (
                <AuthedRoute
                  key={i}
                  path={x.path}
                  exact={x.exact}
                  component={x.component}
                />
              ))}
              <Route path="/" component={SignIn} />
              <Route path="/Ngoprofile" component={Ngoprofile}>
                <Route path="/Invitation" component={Invitation} />
                <Route path="/Topslidebar" component={Topslidebar} />
                <Route path="/Faq"        component={Faq} />
                <Route path="/aboutdata" component={About} />
                <Route path="/volunteer" component={volunteer} />
                <Route path="/Contactus" component={Contactus} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/donationdetails" component={Donationdetails} />
                <Route path="/donationrecieved" component={Donationrecieved} />
                <Route path="dashboard" component={Dashboard} />
                <Redirect to="/" />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
