import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from "./components/Registration/Register";
import Root from "./components/Root/Root";
import toastSuccess from "./components/toast/toastSuccess";
export const userContext = createContext();

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(
    null || JSON.parse(localStorage.getItem("user")),
  );
  useEffect(() => {
    if (user) setLoggedin(true);
  }, [user]);

  useEffect(() => {
    if (loggedin) {
      toastSuccess("successfully logged in");
    }
  }, [loggedin]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
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
          <userContext.Provider value={{ user, setLoggedin }}>
            <Root />
          </userContext.Provider>
        )}
      </Router>
    </>
  );
}

export default App;
