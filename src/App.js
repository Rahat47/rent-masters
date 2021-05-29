import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/product:id" component={ProductDetails} />
      </Switch>

    </Router>
  );
}

export default App;
