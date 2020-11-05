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
  const user = false;
  return (
    <>
      <Router>
        {!user ? (
          <Switch>
            <Route exact path="/register" component={Register} />
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
