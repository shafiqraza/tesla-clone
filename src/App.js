import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderBlock from "./components/header-block/header-block.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import Login from "./pages/login/login.component";
import SignUp from "./pages/signup/signup.component";
import TeslaAccount from "./pages/tesla-account/tesla-account.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserAuth } from "./redux/user/user-selectors";
import { signIn, signOut } from "./redux/user/user-slice";
import { auth } from "./firebase/firebase-utils";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserAuth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header isMenuOpen={isMenuOpen} toggleIsMenuOpen={toggleIsMenuOpen} />
          {isMenuOpen && <Menu toggleIsMenuOpen={toggleIsMenuOpen} />}
          <HeaderBlock></HeaderBlock>
        </Route>
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
