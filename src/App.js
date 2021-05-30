import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
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
<<<<<<< HEAD
=======

>>>>>>> 81794e4c5f8591dacf56e219c14387a8fbe46479
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />
<<<<<<< HEAD
        <Route exact path="/manageServices" component={ManageService} />
        <Route exact path="/room/:id" component={ProductDetails} />
=======
        <Route exact path="/room/:id" component={RoomDetails} />
>>>>>>> 81794e4c5f8591dacf56e219c14387a8fbe46479
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
