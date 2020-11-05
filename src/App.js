import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from "./components/Registration/Register";
import MainPage from "./components/Root/MainPage";
import Root from "./components/Root/Root";

function App() {
const [loggedin, setLoggedin] = useState(false)
  return (
    <>
      <Router>
        {!loggedin ? (
          <Switch>
            <Route
              exact
              path="/register"
              component={() => <Register setLoggedin={setLoggedin} />}
            />
            <Redirect to="/register" />
          </Switch>
        ) : (
          <>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
            <Root />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
