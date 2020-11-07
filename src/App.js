import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClientProfile from "./components/profile/ClientProfile";
import ProviderProfile from "./components/profile/ProviderProfile";
import Register from "./components/Registration/Register";
import MainPage from "./components/Root/MainPage";
import Root from "./components/Root/Root";
import toastSuccess from "./components/toast/toastSuccess";
export const userContext = createContext();

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) setLoggedin(true);
  }, [user]);

  useEffect(() => {
    if (loggedin) {
      toastSuccess("successfully logged in");
    } else return;
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
          <userContext.Provider value={{ user }}>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
            <Root />
            {user.role ? (
              <Switch>
                <Route exact path="/provider/:profile" component={ProviderProfile} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/client/:profile" component={ClientProfile} />
              </Switch>
            )}
          </userContext.Provider>
        )}
      </Router>
    </>
  );
}

export default App;
