import './index.css';
import NaviBar from './components/navbar';
import Home from './components/home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="div">
      <NaviBar/>
      <div className="">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/more'>
          <h1>hello</h1>
        </Route>
      </Switch>
      </div>
    </div>

    </Router>
    
    
  );
}

export default App;
