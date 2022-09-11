import React from "react";
import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Parentforms from "./pages/Home/Parentforms";
const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/about' exact>
            <About/>
          </Route>
          <Route path='/Gallery' exact>
            <Gallery/>
          </Route>
          <Route path='/Contact' exact>
            <Contact/>
          </Route>
          <Route path='/Parentforms' exact component={Parentforms}>

          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>  
    <Footer />
    </div>
  );
}

export default App;
