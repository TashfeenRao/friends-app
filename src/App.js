import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Register from './components/Registration/Register';
import Root from './components/Root/Root';

function App() {
const user = true;
  return (
    <Router>
      {!user ? (
        <Switch>
          <Route exact path="/register" component={Register} />
          <Redirect to="/register" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Root} />
          <Redirect to path="/" />
        </Switch>
      )}
    </Router>
  );
}

export default App;
