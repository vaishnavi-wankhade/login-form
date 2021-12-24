import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,
  Redirect,
Route,
Switch,
useLocation,} from "react-router-dom";

// import Home from './Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Form from './Components/Form';
// import Register from './Components/Register';
// import Navbar from './Components/Navbar';

import Header from "./Routing-Hooks/Header";
import About from './Pages/About';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Useparams from './Pages/Useparams';
import Uselocation from './Pages/Uselocation';
import NotFound from './Pages/NotFound';

function App() {

  
  return (
    <Router>
    <div className="App">
      {/*<Router>
        <Navbar/>
        <Switch>

        <Route path="/" exact><Home/></Route>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/form" component={Form}/>
          <Route path="/register" component={Register}/>

        </Switch>
      </Router>*/}
 
           <Header/>

           
      
      <Switch>
    <Route path="/"  exact component={Home}/>
    
    <Route path="/about" component={About}/>
    
    <Route path="/profile"  component={Profile}/>

    <Route path="/useparams/:id"  component={Useparams}/>

    <Route path="/uselocation"  component={Uselocation}/>


      

  

    <Route component={NotFound}/>

   
    </Switch>
    </div>
    </Router>
  );
}

export default App;
