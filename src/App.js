import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuthenticate } from "./components/cutomHooks/useAuthenticate";
import Register from "./components/Registration/Register";
import Root from "./components/Root/Root";
import toastSuccess from "./components/toast/toastSuccess";
export const userContext = createContext();

function App() {
  const { loggedin, setLoggedin, setUser, user } = useAuthenticate();

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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
          <>
            {toastSuccess("Successfully Loggedin")}
            <Root user={user} setLoggedin={setLoggedin} />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
