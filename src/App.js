import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from './context/authContext/AuthContext'

function App() {
  // const {user} = useContext(AuthContext);
  const user = true;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route exact path="/">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>
          {user && (
            <>
              <Route path="/movies">
                <Home type="movie"/>
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
