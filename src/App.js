import './index.css';
import NaviBar from './components/navbar';
import Home from './components/home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Footer from './components/footer';


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
        <Route exact path='/more'>
          <h1>hello</h1>
        </Route>
      </Switch>
      </div>
      <Footer/>
    </div>

    </Router>
    
    
  );
}

export default App;
