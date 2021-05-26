import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/login.component";
import SignUp from "./pages/signup/signup.component";
import TeslaAccount from "./pages/tesla-account/tesla-account.component";
import Home from "./pages/home/home.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserAuth } from "./redux/user/user-selectors";
import { signIn, signOut } from "./redux/user/user-slice";
import { auth } from "./firebase/firebase-utils";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserAuth);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signIn({
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(signOut());
      }
    });
  }, [dispatch]);

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
