import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/login.component";
import SignUp from "./pages/signup/signup.component";
import TeslaAccount from "./pages/tesla-account/tesla-account.component";
import Home from "./pages/home/home.component";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserAuth } from "./redux/user/user-selectors";
import { authCheck } from "./redux/user/user-slice";
import { closeMenu } from "./redux/menu/menu-slice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserAuth);
  const location = useLocation();

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  useEffect(() => {
    dispatch(closeMenu());
  }, [location.pathname, dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/login"
          render={() => (user ? <Redirect to="/teslaaccount" /> : <Login />)}
        />
        <Route
          path="/signup"
          render={() => (user ? <Redirect to="/teslaaccount" /> : <SignUp />)}
        />
        <Route
          exact
          path="/teslaaccount"
          render={() => (user ? <TeslaAccount /> : <Redirect to="/login" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
