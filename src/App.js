import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import NotFound from './pages/NotFound';
import Superhero from './pages/Superhero';
import SuperheroDetail from './pages/SuperheroDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><Link to='/'>Superheroes</Link></li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route exact path='/' component={Superhero} />
            <Route path='/superhero/:id' component={SuperheroDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
