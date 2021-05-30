import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './utils/ScrollToTop';
import ManageService from './components/AdminPannel/ManageService';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/manageServices" component={ManageService} />
        <Route exact path="/room/:id" component={ProductDetails} />
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
