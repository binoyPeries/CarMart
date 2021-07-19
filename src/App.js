import './index.css';
import NaviBar from './components/navbar';
import Home from './components/home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Footer from './components/footer';
import Register from './components/register';
import Profile from './components/profile';
import AddVehicle from './components/addVehicle';
import Market from './components/allVehicles';
import Login from './components/login';
import Vehicle from './components/vehiclePage';
import Favourites from './components/favourites';


function App() {
  return (
    <Router>
    <div className="app">
      <NaviBar/>
      <div className="">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/register'>
          <Register/>
        </Route>
        <Route exact path='/profile'>
          <Profile/>
        </Route>
        <Route exact path='/market'>
          <Market/>
        </Route>
        <Route exact path='/market/:id'>
          <Vehicle />
        </Route>
        <Route exact path='/add'>
         <AddVehicle/>
        </Route>
        <Route exact path='/fav'>
         <Favourites/>
        </Route>
      </Switch>
      </div>
      <Footer/>
    </div>

    </Router>
    //to run the server
    // npx json-server --watch Db/db.json --port 8000 

  );
}

export default App;
