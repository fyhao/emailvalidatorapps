import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Privacy from './Privacy';
import Terms from './Terms';
import Home from './Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>  
          <Link to="/privacy">Privacy</Link>
		  <Link to="/terms">Terms and Conditions</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
		  <Route path="/terms">
            <Terms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;