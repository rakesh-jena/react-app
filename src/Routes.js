import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, ForgotPassword, Register, NotFoundPage } from "./Views";
import { PostSignUp, ConfirmEmail } from "./components";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./MainLayout/DashboardLayout/DashboardLayout";
import { Dashboard, Message, Profile, OpenProject } from "./pages";
import ScrollToTop from "./resue/ScrollToTop/ScrollToTop";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/forgotpassword" exact>
          <ForgotPassword />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/confirmemail" exact>
          <ConfirmEmail />
        </Route>
        <ProtectedRoute exact path="/userprofile" component={PostSignUp} />
        <ProtectedRoute exact path="/first" component={PostSignUp} />
        <ProtectedRoute exact path="/second" component={PostSignUp} />
        <ProtectedRoute exact path="/confirmemail" component={ConfirmEmail} />

        <DashboardLayout>
          <ScrollToTop />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/message" component={Message} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/settings" component={OpenProject} />
        </DashboardLayout>
        <Route path="*" exact>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
