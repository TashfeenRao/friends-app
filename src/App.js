import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import { useAuthenticate } from "./components/cutomHooks/useAuthenticate";
import Register from "./components/Registration/Register";
import Root from "./components/Root/Root";
export const userContext = createContext();

function App() {
  const { loggedin, setLoggedin, setUser, user } = useAuthenticate();

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        transition={Flip}
        draggable
        pauseOnHover
      />
      <Router>
        {!loggedin ? (
          <Switch>
            <Route
              exact
              path="/register"
              component={() => <Register setUser={setUser} />}
            />
            <Redirect to="/register" />
          </Switch>
        ) : (
          <Root
            user={user}
            setUser={setUser}
            setLoggedin={setLoggedin}
            loggedin={loggedin}
          />
        )}
      </Router>
    </>
  );
}

export default App;
