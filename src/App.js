import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Movies from './components/Movies.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Counter1 from './Counter1';
import Counter2 from './Counter2';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/counter1" component={Counter1} />
          <Route path="/counter2" component={Counter2} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
