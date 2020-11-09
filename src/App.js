import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './Views/home.js';
import About from './Views/about.js';
import Product from './Views/product.js';

function App() {
  return (
    <div className="relative min-h-screen pb-10">
      <Router>
        
        <Header />
        
        <Switch>
      
          <Route exact path="/">
            <Home />
          </Route>
      
          <Route path="/aboutus">
            <About />
          </Route>

          <Route path="/product/:id">
            <Product />
          </Route>
      
        </Switch>
        
        <Footer />
      
      </Router>
    </div>
  );
}

export default App;
