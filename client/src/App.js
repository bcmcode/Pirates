import React from 'react';
import './App.css';
import { Router, Redirect} from '@reach/router';
import Crew from './views/Crew';
import New from './views/New';
import Pirate from './views/Pirate';


function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/pirates" noThrow/>
        <Crew path="/pirates" />
        <New path="/pirate/new" />
        <Pirate path="/pirate/:id" />
      </Router>
    </div>
  );
}

export default App;
