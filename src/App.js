import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/room/:id" component={RoomDetails} />
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
